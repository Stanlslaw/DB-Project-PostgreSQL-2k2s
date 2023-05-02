--###############################################Аудит######################################
--------------------------------Процедура получения данных с журнала аудита ----------------
CREATE or REPLACE PROCEDURE get_log(y varchar(2), m varchar(2)) LANGUAGE plpgsql AS $$ BEGIN IF length(m) = 1 THEN m := '0' || m;
END IF;
TRUNCATE TABLE postgres_log;
EXECUTE format(
	'COPY postgres_log FROM ''/var/lib/postgresql/14/main/log/postgresql-%s-%s.csv'' CSV DELIMITER '','' QUOTE ''"''',
	y,
	m
);
END $$;
--##########################################Пользователи#######################################
---------------------------Функция входа пользователя---------------------------------
--c
create or replace function log_user(email text, password text) returns text as $body$ begin if (
		select num <> 1
		from (
				select count(*) as num
				from (
						select user_email
						from users
						where user_email = email
					) as usrmail
			) as rescount
	) then return 'Error: Неправильный логин или пароль';
elseif (
	select (pass_hesh = crypt(password, pass_hesh))
	from (
			select *
			from users
			where user_email = email
		) as usr
		join users_passwords as psw on psw.user_id = usr.user_id
) then return 'Succsess';
else return 'Error: Неправильный логин или пароль';
end if;
end;
$body$ language plpgsql;
---------------------------Функция регистрации пользователя----------------------------
create or replace function reg_user(
		UserName text,
		UserLastname text,
		UserEmail text,
		UserPhone text,
		UserPassword text
	) returns text as $body$ begin if (
		select count(*)
		from (
				select *
				from users
				where user_email = UserEmail
			) as usr
	) <> 0 then return 'Error: Данный пользователь уже зарегестрирован';
else
INSERT into users(
		user_id,
		user_name,
		user_lastname,
		user_email,
		user_phone
	)
values(
		nextval('users_id'),
		UserName,
		UserLastname,
		UserEmail,
		UserPhone
	);
insert into users_passwords(user_id, pass_hesh)
values(
		currval('users_id'),
		crypt(UserPassword, gen_salt('md5'))
	);
return currval('users_id');
end if;
end;
$body$ language plpgsql;
---------------------------------Процедура обновления данных пользователя -------------------
create or replace procedure update_user(
		UserName text,
		UserLastname text,
		UserEmail text,
		UserPhone text
	) as $body$
declare userId int;
begin if (
	select count(*)
	from (
			select *
			from users
			where user_email = UserEmail
		) as usr
) <> 1 then raise 'Error: Пользователя не существует' using errcode = 'user_not_exist';
else
select top(user_id) into userId
from users
where user_email = UserEmail;
update users
set user_name = UserName,
	user_lastName = UserLastName,
	user_email = UserEmail,
	user_phone = UserPhone
where user_id = userId;
end if;
end;
$body$ language plpgsql;
---------------------------------------Удалить пользователя------------------------------
create or replace procedure delete_user(userId text) as $body$ begin
delete from users
where user_id = userId;
end;
$body$ language plpgsql;
--##########################################Продукты/товары########################################
--с
--------------------------------Удаление товара---------------------------------------
--------------------------------изменение товара--------------------------------------
--------------------------------Процедура добавления данных о продукте----------------
create sequence product_id start 1 no cycle;
create or replace procedure add_product(
		productName text,
		productBrand text,
		productPrice float,
		productAmount int,
		productDescription text,
		productType text,
		productPhotoPath text,
		productCharacteristic json --[{"name":"pivoname","value": "lidskoe"},{"name":"lenght","value": "123"}]
	) as $body$ begin
insert into products(
		product_id,
		product_name,
		product_brand,
		product_price,
		product_amount,
		product_description,
		product_type,
		product_photo_path
	)
values (
		nextval('product_id'),
		productName,
		productBrand,
		productPrice,
		productAmount,
		productDescription,
		productType,
		productPhotoPath
	);
call add_product_characteristic(
	currval('product_id'),
	productCharacteristic
);
end;
$body$ language plpgsql;
---------------------------------------процедура добавления характеристик к товару--------------
create or replace procedure add_product_characteristic(
		productId bigint,
		characteristicsJson json --[{"name":"pivoname","value": "lidskoe"},{"name":"lenght","value": "123"}]
	) as $body$ begin for i in 0..json_array_length(characteristicsJson) -1 loop
insert into product_characteristics(
		product_id,
		product_characteristics_name,
		product_characteristics_value
	)
values(
		productId,
		json_array_element(characteristicsJson, i)::json->>'name',
		json_array_element(characteristicsJson, i)::json->>'value'
	);
end loop;
end;
$body$ language plpgsql;
-----------тест
-- call add_product(
-- 	'Xxx',
-- 	'Belshina',
-- 	400,
-- 	25,
-- 	'lorem ipsum',
-- 	'tire',
-- 	'photoxxx.jpg',
-- 	'[{"name":"pivoname","value": "lidskoe"},
-- 				 {"name":"lenght","value": "123"}]' 
--#########################################Комметарии########################################
--------------------------------Получить комментарии--------------------------------------
create or replace function get_product_comments(productId bigint) returns table(
		user_name text,
		user_lastname text,
		user_email text,
		comment_date date,
		comment_text text,
		user_id bigint
	) as $body$ begin return query
select usr.user_name,
	usr.user_lasname,
	usr.user_email,
	com.comment_date,
	com.comment_text,
	usr.user_id
from product_comments as com
	join users as usr on com.user_id = usr.user_id
	and com.product_id = productId;
end;
$body$ language plpgsql;
----------------------------------------Создать комментарий-------------------------------------------------
create sequence comment_id start 1 no cycle;
create or replace procedure add_comment(
		producId bigint,
		userId bigint,
		commentText varchar(1023)
	) as $body$ begin
insert into product_comment(
		comment_id,
		product_id,
		user_id,
		comment_date,
		comment_text
	)
values(
		nextval('comment_id'),
		productId,
		userId,
		NOW(),
		commentText
	);
end;
$body$ language plpgsql;
------------------------------------------Удалить комментарий------------------------------
create or replace procedure delete_comment(commentId bigint, userId bigint) as $body$ begin if (
		select user_id
		from (
				select *
				from product_comments
				where comment_id = commentId
			) as commID
	) = userId then
delete from product_comments
where comment_id = commentId;
else raise exception 'Error: Попытка удалить не свой комментарий';
end if;
end;
$body$ language plpgsql;
------------------------------------------Редактировать комментарий------------------------
create or replace procedure update_comment(
		commentId bigint,
		userId bigint,
		commentText varchar(1023)
	) as $body$ begin if (
		select user_id
		from (
				select *
				from product_comments
				where comment_id = commentId
			) as commID
	) = userId then
update product_comments
set comment_text = commentText,
	comment_date = NOW()
where comment_id = commentId;
else raise exception 'Error: Попытка редактировать не свой комментарий';
end if;
end;
$body$ language plpgsql;
--##############################################Корзина###########################################
---------------------------------Добавить в корзину----------------------------------
create or replace procedure add_to_basket(productId bigint, userId bigint) AS $body$ begin if (
		select count(*)
		from basket
		where user_id = userId
			and product_id = productId
	) = 0 then
insert into basket(basket_id, product_id, user_id, product_amount)
values (nextval('basket_id'), productId, userId, 1);
else raise exception 'Error: Товар уже существует';
end if;
end;
$body$ language plpgsql;
------------------------------------------удалить из корзины----------------------------------
create or replace procedure delete_from_basket(productId bigint, userId bigint) AS $body$ begin
delete from basket
where product_id = productId
	and user_id = userId;
end;
$body$ language plpgsql;
-----------------------------------------изменить количество определенного товара в корзине------------------
create or replace procedure update_basket(
		productId bigint,
		userId bigint,
		newAmount integer
	) AS $body$ begin if newAmount <= 0 then raise exception 'Error: Неверное количество товара';
elseif newAmount >(
	select product_amount
	from products
	where product_id = productId
) then raise exception 'Error: Указано больше товара чем есть на складе';
else
update basket
set product_amount = newAmount
where product_id = productId
	and user_id = userId;
end if;
end;
$body$ language plpgsql;
---------------------------------------получить данные корзины--------------------------------
--с
--##############################################Избранное#####################################
-------------------------------------добавить в избранное---------------------------
create or replace procedure add_to_favorites(userId bigint, productId bigint) as $body$ begin
insert into favorites(favorite_id, user_id, product_id)
values(nextval('favorite_id'), userId, productId);
end;
$body$ language plpgsql;
-------------------------------------удалить из избранного------------------------------
create or replace procedure delete_from_favorites(userId bigint, productId bigint) as $body$ begin
delete from favorites
where product_id = productId
	and user_id = userId;
end;
$body$ language plpgsql;
-------------------------------------получить из избранного------------------------------
create or replace function get_from_favorites(userId bigint) returns table(product_id bigint) as $body$ begin return query
select product_id
from favorites
where user_id = userId;
end;
$body$ language plpgsql;
--########################################Заказы########################################
--########################################Адреса########################################
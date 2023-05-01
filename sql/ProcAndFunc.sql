-------------------------------------Пользователи----------------------------------------------
---------------------------Функция входа пользователя---------------------------------
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
------------------------------------------Продукты----------------------------------------------
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
call add_product(
	'Xxx',
	'Belshina',
	400,
	25,
	'lorem ipsum',
	'tire',
	'photoxxx.jpg',
	'[{"name":"pivoname","value": "lidskoe"},
				 {"name":"lenght","value": "123"}]' -------------------------------------Комметарии-----------------------------------------------------
	--------------------------------Получить комментарии--------------------------------------
	create or replace function get_product_comments(productId integer) returns table(
			user_name text,
			user_lastname text,
			user_email text,
			comment_date date,
			comment_text text
		) as $body$ begin return query
	select usr.user_name,
		usr.user_lasname,
		usr.user_email,
		com.comment_date,
		com.comment_text
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
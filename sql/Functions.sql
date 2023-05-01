---------------------------Функция входа пользователя---------------------------------
create or replace function log_user(email text,password text) 
returns text as $body$
begin
	if (select num<>1 from (select count(*) as num
			from (select user_email 
				  	from users 
				  		where user_email=email) as usrmail)as rescount)
	then 
		return 'Error: Неправильный логин или пароль';
	elseif (select (pass_hesh=crypt(password,pass_hesh)) 
				from (select * from users where user_email=email) as usr
				join users_passwords as psw 
				on psw.user_id=usr.user_id)
	then
		return 'Succsess';
	else 
		return 'Error: Неправильный логин или пароль';
		end if;
end;
 $body$ language plpgsql; 
---------------------------Функция регистрации пользователя----------------------------
create or replace function reg_user(   
		UserName text,
        	UserLastname text,
        	UserEmail text,
        	UserPhone text,
        	UserPassword text)
returns text as 
$body$
	begin
		if (select count(*) from (select * from users where user_email=UserEmail) as usr) <>0 
			then return 'Error: Данный пользователь уже зарегестрирован';
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
			values(currval('users_id'), crypt(UserPassword, gen_salt('md5')));
			return currval('users_id');
		end if;
	end;
$body$ language plpgsql;





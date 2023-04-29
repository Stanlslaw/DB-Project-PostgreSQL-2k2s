create or replace function(email text,password text) 
returns text
language plpgsql as
$$
begin
	if (select user_email from users where user_email is email) is not null then 
		
end
$$;

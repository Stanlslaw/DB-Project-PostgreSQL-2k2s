DO $$
DECLARE i INTEGER;
BEGIN FOR i IN 1..100000 LOOP
INSERT INTO users (
        user_id,
        user_name,
        user_lastname,
        user_email,
        user_phone
    )
VALUES (
        i,
        'test',
        'test',
        i || 'test@mail.com',
        '12345'
    );
END LOOP;
END $$;
SELECT *
from users
where user_email = '68964test@mail.com';
truncate table users cascade;
CREATE INDEX INDX_Users ON users(user_email) tablespace users;
drop INDEX INDX_Users;
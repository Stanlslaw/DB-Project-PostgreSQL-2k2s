CREATE or REPLACE PROCEDURE get_log(y varchar(2), m varchar(2)) LANGUAGE plpgsql AS $$ BEGIN IF length(m) = 1 THEN m := '0' || m;
END IF;
TRUNCATE TABLE postgres_log;
EXECUTE format(
    'COPY postgres_log FROM ''/var/lib/postgresql/14/main/log/postgresql-%s-%s.csv'' CSV DELIMITER '','' QUOTE ''"''',
    y,
    m
);
END $$;
create sequence users_id start 1 no cycle owned by users.user_id;
CREATE or Replace procedure reg_user(
        UserName text,
        UserLastname text,
        UserEmail text,
        UserPhone text,
        UserPassword text
    ) LANGUAGE plpgsql as $$ BEGIN
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
END $$;

Call reg_user('Станислав','Cкалкович','xx@gmail.com','+3754329493','Admin2004');

CREATE or REPLACE PROCEDURE get_log(y varchar(2), m varchar(2)) LANGUAGE plpgsql AS $$ BEGIN IF length(m) = 1 THEN m := '0' || m;
END IF;
TRUNCATE TABLE postgres_log;
EXECUTE format(
    'COPY postgres_log FROM ''/var/log/postgresql/postgresql-%s-%s.csv'' CSV DELIMITER '','' QUOTE ''"''',
    y,
    m
);
END;
$$
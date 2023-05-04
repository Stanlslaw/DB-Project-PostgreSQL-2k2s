CREATE TABLE USERS (
	USER_ID BIGINT not null PRIMARY KEY,
	USER_NAME VARCHAR(255) NOT NULL,
	USER_LASTNAME VARCHAR(255) NOT NULL,
	USER_EMAIL VARCHAR(255) NOT NULL,
	USER_PHONE VARCHAR(255) NOT NULL
) tablespace users;
CREATE TABLE USERS_PASSWORDS(
	USER_ID BIGINT NOT NULL,
	PASS_HESH VARCHAR(48) NOT NULL,
	CONSTRAINT FK_USER_ID_PASSWORD FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) on delete cascade
) tablespace users;
CREATE TABLE USERS_ADDRESSES(
	ADDRESS_ID bigint PRIMARY KEY,
	USER_ID BIGINT NOT NULL,
	REGION VARCHAR(255) NOT NULL,
	CITY VARCHAR(255) NOT NULL,
	STREET VARCHAR(255) NOT NULL,
	HOUSE VARCHAR(255) NOT NULL,
	APARTMENT VARCHAR(255) NOT NULL,
	is_saved boolean not null,
	CONSTRAINT FK_USER_ID_ADDRESSES FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) --создать триге на удалении при удалении orders
) tablespace users;
CREATE TABLE ORDERS(
	ORDER_ID bigint PRIMARY KEY,
	USER_ID BIGINT NOT NULL,
	ORDER_DATE DATE NOT NULL,
	ORDER_STATUS VARCHAR(255) NOT NULL,
	ORDER_FULL_PRICE REAL NOT NULL,
	ORDER_DELIVER_TYPE VARCHAR(255) NOT NULL,
	ORDER_DELIVER_DATE DATE NOT NULL,
	CONSTRAINT FK_USER_ID_ORDERS FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) on delete cascade
) tablespace orders;
CREATE TABLE PRODUCTS(
	PRODUCT_ID BIGINT PRIMARY KEY,
	PRODUCT_NAME VARCHAR(511) NOT NULL,
	PRODUCT_BRAND VARCHAR(255) NOT NULL,
	PRODUCT_PRICE REAL NOT NULL,
	PRODUCT_AMOUNT INTEGER NOT NULL,
	PRODUCT_DESCRIPTION VARCHAR(1023) NOT NULL,
	PRODUCT_TYPE VARCHAR(255),
	product_photo_path varchar(511)
) tablespace products;
CREATE TABLE ORDERS_PRODUCTS(
	ORDER_ID bigint NOT NULL,
	PRODUCT_ID BIGINT NOT NULL,
	PRODUCT_IN_ORDER_NUM INTEGER NOT NULL,
	CONSTRAINT FK_ORDER_ID_ORDERS_PRODUCTS FOREIGN KEY (ORDER_ID) REFERENCES ORDERS(ORDER_ID) on delete cascade,
	CONSTRAINT FK_PRODUCT_ID_ORDERS_PRODUCTS FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(PRODUCT_ID)
) tablespace orders;
-------------------старый----------------
-- CREATE TABLE PRODUCT_CHARACTERISTICS(
-- 	PRODUCT_ID INTEGER NOT NULL,
-- 	PROPERTY_ID INTEGER NOT NULL,
-- 	PRODUCT_CHARACTERISTICS_VALUE VARCHAR(255) NOT NULL --CONSTRAINT FK_PRODUCT_ID_PRODUCT_CHARACTERISTICS
-- 	--	FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(PRODUCT_ID)
-- ) tablespace products;
-- CREATE TABLE PRODUCT_GLOSSARY(
-- 	PROPERTY_ID SERIAL PRIMARY KEY,
-- 	PROPERTY_NAME VARCHAR(255) NOT NULL
-- ) tablespace products;
-------------------новый---------------------
CREATE TABLE PRODUCT_CHARACTERISTICS(
	CHARACTERISTIC_ID BIGINT PRIMARY KEY,
	PRODUCT_ID BIGINT NOT NULL,
	PRODUCT_CHARACTERISTICS_NAME VARCHAR(255) NOT NULL,
	PRODUCT_CHARACTERISTICS_VALUE VARCHAR(255) NOT NULL,
	CONSTRAINT FK_PRODUCT_ID_PRODUCT_CHARACTERISTICS FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(PRODUCT_ID) on delete cascade
) tablespace products;
------------------------------------------------
CREATE TABLE PRODUCT_COMMENTS(
	COMMENT_ID BIGINT PRIMARY KEY,
	PRODUCT_ID BIGINT NOT NULL,
	USER_ID BIGINT NOT NULL,
	COMMENT_DATE DATE NOT NULL,
	COMMENT_TEXT VARCHAR(1023) NOT NULL,
	CONSTRAINT FK_USER_ID_PRODUCT_COMMENT FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID),
	CONSTRAINT FK_PRODUCT_ID_PRODUCT_COMMENT FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(PRODUCT_ID) on delete cascade
) tablespace products;
CREATE TABLE BASKET(
	BASKET_ID BIGINT PRIMARY KEY,
	PRODUCT_ID BIGINT NOT NULL,
	USER_ID BIGINT NOT NULL,
	product_amount integer check(product_amount > 0) NOT NULL,
	CONSTRAINT FK_USER_ID_BASKET FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) on delete cascade,
	CONSTRAINT FK_PRODUCT_ID_BASKET FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(PRODUCT_ID) on delete cascade
) tablespace users;
CREATE TABLE FAVORITES(
	FAVORITE_ID bigint PRIMARY KEY,
	PRODUCT_ID BIGINT NOT NULL,
	USER_ID BIGINT NOT NULL,
	CONSTRAINT FK_USER_ID_FAVORITES FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) on delete cascade,
	CONSTRAINT FK_PRODUCT_ID_FAVORITES FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCTS(PRODUCT_ID) on delete cascade
) tablespace users;
--log table
CREATE TABLE pg_audit (
	audit_time timestamp with time zone,
	user_name text,
	session_id text,
	client_addr inet,
	client_port integer,
	server_addr inet,
	server_port integer,
	command_tag text,
	session_start_time timestamp with time zone,
	virtual_transaction_id text,
	transaction_id bigint,
	error_severity text,
	sql_state_code text,
	message text,
	detail text,
	hint text,
	internal_query text,
	internal_query_pos integer,
	context text,
	query text,
	query_pos integer,
	location text,
	application_name text
);
CREATE TABLE postgres_log (
	log_time timestamp(3) with time zone,
	user_name text,
	database_name text,
	process_id integer,
	connection_from text,
	session_id text,
	session_line_num bigint,
	command_tag text,
	session_start_time timestamp with time zone,
	virtual_transaction_id text,
	transaction_id bigint,
	error_severity text,
	sql_state_code text,
	message text,
	detail text,
	hint text,
	internal_query text,
	internal_query_pos integer,
	context text,
	query text,
	query_pos integer,
	location text,
	application_name text,
	backend_type text,
	PRIMARY KEY (session_id, session_line_num)
);
-------------------------------------------DROPS-------------------------------
drop TABLE IF EXISTS products cascade;
drop TABLE IF EXISTS users cascade;
drop TABLE IF EXISTS users_passwords cascade;
drop TABLE IF EXISTS product_comments cascade;
drop TABLE IF EXISTS product_characteristics cascade;
drop TABLE IF EXISTS orders cascade;
drop TABLE IF EXISTS ORDERS_PRODUCTS cascade;
drop TABLE IF EXISTS FAVORITES cascade;
drop TABLE IF EXISTS BASKET cascade;
drop TABLE IF EXISTS USERS_ADDRESSES cascade;
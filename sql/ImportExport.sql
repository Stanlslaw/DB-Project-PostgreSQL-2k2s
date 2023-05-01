----------------------------Экспорт БД---------------------
call export_json('/postgresqlData/BackupJson/')
CREATE OR REPLACE PROCEDURE export_json(pathToSave TEXT) AS $$ BEGIN EXECUTE format(
		'COPY (SELECT row_to_json(t) FROM users t) TO %L',
		pathToSave || 'users.json'
	);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM users_addresses t) TO %L',
	pathToSave || 'users_addresses.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM users_passwords t) TO %L',
	pathToSave || 'users_passwords.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM basket t) TO %L',
	pathToSave || 'basket.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM favorites t) TO %L',
	pathToSave || 'favorites.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM orders t) TO %L',
	pathToSave || 'orders.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM orders_products t) TO %L',
	pathToSave || 'orders_products.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM products  t) TO %L',
	pathToSave || 'products.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM product_characteristics t) TO %L',
	pathToSave || 'product_characteristics.json'
);
EXECUTE format(
	'COPY (SELECT row_to_json(t) FROM product_comments t) TO %L',
	pathToSave || 'product_comments.json'
);
END;
$$ LANGUAGE plpgsql;
-------------------------------------Импорт в БД--------------------------
call import_json('/postgresqlData/BackupJson');
create or REPLACE procedure import_json(pathToGet text) as $body$
declare usersJson json;
usersPasswordsJson json;
usersAddressesJson json;
basketJson json;
favoritesJson json;
ordersJson json;
ordersProductsJson json;
productsJson json;
productCharacteristicsJson json;
productCommentsJson json;
BEGIN
SELECT pg_read_file(pathToGet || '/users.json') INTO usersJson;
SELECT pg_read_file(pathToGet || '/users_passwords.json') INTO usersPasswordsJson;
SELECT pg_read_file(pathToGet || '/users_addresses.json') INTO usersAddressesJson;
SELECT pg_read_file(pathToGet || '/basket.json') INTO basketJson;
SELECT pg_read_file(pathToGet || '/favorites.json') INTO favoritesJson;
SELECT pg_read_file(pathToGet || '/orders.json') INTO ordersJson;
SELECT pg_read_file(pathToGet || '/orders_products.json') INTO ordersProductsJson;
SELECT pg_read_file(pathToGet || '/products.json') INTO productsJson;
SELECT pg_read_file(pathToGet || '/product_characteristics.json') INTO productCharacteristicsJson;
SELECT pg_read_file(pathToGet || '/product_comments.json') INTO productCommentsJson;
INSERT into users
select *
from json_populate_recordset(null::users, usersJson);
INSERT into users_passwords
select *
from json_populate_recordset(null::users_passwords, usersPasswordsJson);
INSERT into users_addresses
select *
from json_populate_recordset(null::users_addresses, usersAddressesJson);
INSERT into basket
select *
from json_populate_recordset(null::basket, basketJson);
INSERT into favorites
select *
from json_populate_recordset(null::favorites, favoritesJson);
INSERT into orders
select *
from json_populate_recordset(null::orders, ordersJson);
INSERT into orders_products
select *
from json_populate_recordset(null::orders_products, ordersProductsJson);
INSERT into products
select *
from json_populate_recordset(null::products, productsJson);
INSERT into product_characteristics
select *
from json_populate_recordset(
		null::product_characteristics,
		productCharacteristicsJson
	);
INSERT into product_comments
select *
from json_populate_recordset(null::product_comments, productCommentsJson);
end;
$body$ LANGUAGE plpgsql;
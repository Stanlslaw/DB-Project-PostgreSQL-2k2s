CREATE INDEX INDX_Users ON users(user_email) tablespace users;
create index INDX_ORDERS ON orders(user_id) tablespace orders;
create index INDX_product_characteristics on product_characteristics(product_id) tablespace products;
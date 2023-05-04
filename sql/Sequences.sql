create SEQUENCE basket_id OWNED by basket.basket_id start 1 no CYCLE;
create SEQUENCE favorite_id OWNED by favorites.favorite_id start 1 no CYCLE;
create SEQUENCE product_id OWNED by products.product_id start 1 no CYCLE;
create SEQUENCE user_id OWNED by users.user_id start 1 no CYCLE;
CREATE sequence ADDRESS_ID owned by USERS_ADDRESSES.ADDRESS_ID start 1 no cycle;
CREATE sequence users_id owned by USERS.user_ID start 1 no cycle;
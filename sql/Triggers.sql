----------------------------------------удаление не сохраненого адреса при удалении заказа-----------------------------
create function delete_not_saved_address() returns trigger as $body$ begin
delete from users_addresses
where user_id = OLD.user_id
    and is_saved = false;
return old;
end;
$body$ language plpgsql;
CREATE trigger delete_not_saved_address before delete on orders for each row EXECUTE procedure delete_not_saved_address();
select *
from orders;
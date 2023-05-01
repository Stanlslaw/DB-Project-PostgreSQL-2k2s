create or replace procedure export_json(pathToSave text)
as $body$ 
	begin
		copy (select row_to_json(u) from users as u) to pathToSave;
	end;
$body$ language plpgsql;

call export_json('/var/lib/postgresql/14/main/BackupJson/')

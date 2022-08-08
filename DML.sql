use Permisos


insert into TipoPermiso (Descripcion) values ('Administrador')
insert into TipoPermiso (Descripcion) values ('Tienda')
insert into TipoPermiso (Descripcion) values ('Usuario')
go
insert into Permiso (NombreEmpleado,ApellidoEmpleado, TipoPermisoId,FechaPermiso) values ('Richards','Cohglan', 1, GETDATE())
insert into Permiso (NombreEmpleado,ApellidoEmpleado, TipoPermisoId,FechaPermiso) values ('Katty','MacClein', 2, GETDATE())
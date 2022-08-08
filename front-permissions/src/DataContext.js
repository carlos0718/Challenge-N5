import React from "react";
import { getPermissions, postPermissions, putPermissions } from "./api";

export const Context = React.createContext();
const { Provider } = Context;

const DataContext = ({ children }) => {
	const [permissions, setPermissions] = React.useState([]);

	const getData = () => getPermissions().then((data) => setPermissions(data));

	const submitPost = (nombre, apellido, codigo) => {
		postPermissions(nombre, apellido, codigo).then((data) => setPermissions([...permissions, data]));
	};

	const submitPut = (id, nombre, apellido, codigo) => {
		putPermissions(id, nombre, apellido, codigo);
		permissions.map((item) => {
			if (item.id === id) {
				item.nombreEmpleado = nombre;
				item.apellidoEmpleado = apellido;
				item.tipoPermisoId = codigo;
			}
			return item;
		});
		setPermissions([...permissions]);
	};
	React.useEffect(() => {
		getData();
	}, []);

	return <Provider value={{ permissions, submitPost, submitPut }}>{children}</Provider>;
};

export default DataContext;

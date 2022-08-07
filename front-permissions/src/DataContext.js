import React from "react";
import { getPermissions, postPermissions, putPermissions } from "./api";

export const Context = React.createContext();
const { Provider } = Context;

const DataContext = ({ children }) => {
	const [permissions, setPermissions] = React.useState([]);

	const getData = () => getPermissions().then((data) => setPermissions(data));

	const submitPost = (nombre, apellido, codigo) => {
		postPermissions(nombre, apellido, codigo);
		setPermissions([...permissions, { nombre, apellido, codigo }]);
	};

	const submitPut = (id, nombre, apellido, codigo) => {
		putPermissions(id, nombre, apellido, codigo);
		setPermissions(
			permissions.map((p) => {
				if (p.id === id) {
					return { id, nombre, apellido, codigo };
				}
				return p;
			})
		);
	};
	console.log(permissions);
	React.useEffect(() => {
		getData();
	}, []);

	return <Provider value={{ permissions, submitPost, submitPut }}>{children}</Provider>;
};

export default DataContext;

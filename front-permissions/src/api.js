import axios from "axios";

const URL = "https://localhost:7047/api/Permisos";

axios.create({
	baseURL: URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		Accept: "application/json",
	},
});

const getPermissions = async () => {
	const response = await axios.get(`${URL}`);
	return response.data;
};

const postPermissions = async (nombre, apellido, tipo) => {
	try {
		const response = await axios.post(`${URL}/RequestPermisos`, {
			nombreEmpleado: nombre,
			apellidoEmpleado: apellido,
			tipoPermisoId: tipo,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const putPermissions = async (id, nombre, apellido, tipo) => {
	try {
		const response = await axios.put(`${URL}/${id}`, {
			id: id,
			nombreEmpleado: nombre,
			apellidoEmpleado: apellido,
			tipoPermisoId: tipo,
		});
		return response.status;
	} catch (error) {
		console.log(error);
	}
};

export { getPermissions, postPermissions, putPermissions };

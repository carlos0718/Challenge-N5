import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ title, text, variant, color, data, submitPost, submitPut }) {
	const [open, setOpen] = React.useState(false);
	const [id] = React.useState(data?.id);
	const [nombre, setNombre] = React.useState(data?.nombreEmpleado || "");
	const [apellido, setApellido] = React.useState(data?.apellidoEmpleado || "");
	const [codigo, setCodigo] = React.useState(data?.tipoPermisoId || "");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id) {
			submitPut(id, nombre, apellido, codigo);
		} else {
			submitPost(nombre, apellido, codigo);
		}
		handleClose();
	};
	return (
		<>
			<Button variant={variant} color={color} onClick={handleClickOpen}>
				{text}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
						margin='dense'
						id='name'
						label='Name'
						type='text'
						fullWidth
						variant='standard'
					/>
					<TextField
						autoFocus
						value={apellido}
						onChange={(e) => setApellido(e.target.value)}
						margin='dense'
						id='last-name'
						label='Last Name'
						type='text'
						fullWidth
						variant='standard'
					/>
					<TextField
						autoFocus
						value={codigo}
						onChange={(e) => setCodigo(e.target.value)}
						margin='dense'
						id='number'
						type='number'
						label='Type Permission'
						fullWidth
						variant='standard'
						inputProps={{ min: 1, max: 3 }}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSubmit}>Save</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

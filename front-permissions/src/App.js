import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormDialog from "./FormDialog";
import React from "react";
import { Context } from "./DataContext";
import "./App.css";

function App() {
	const { permissions, submitPost, submitPut } = React.useContext(Context);

	return (
		<div className='App-header'>
			<div className='App'>
				<FormDialog
					title='CREATE PERMISSION'
					text='Request Permission'
					variant='outlined'
					color='success'
					submitPost={submitPost}
				/>
				<TableContainer component={Paper} sx={{ marginTop: 5 }}>
					<Table sx={{ minWidth: 1000 }} aria-label='customized table'>
						<TableHead>
							<TableRow>
								<StyledTableCell>Nombre</StyledTableCell>
								<StyledTableCell align='center'>Apellido</StyledTableCell>
								<StyledTableCell align='center'>Cod. Permiso</StyledTableCell>
								<StyledTableCell align='center'>Fecha de Alta</StyledTableCell>
								<StyledTableCell align='center'></StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{permissions.map((row) => (
								<StyledTableRow key={row.id}>
									<StyledTableCell component='th' scope='row'>
										{row.nombreEmpleado}
									</StyledTableCell>
									<StyledTableCell align='center'>{row.apellidoEmpleado}</StyledTableCell>
									<StyledTableCell align='center'>{row.tipoPermisoId}</StyledTableCell>
									<StyledTableCell align='center'>{row.fechaPermiso}</StyledTableCell>
									<StyledTableCell align='center'>
										<FormDialog
											title='MODIFY PERMISSION'
											text='Modify Permission'
											variant='outlined'
											data={row}
											submitPut={submitPut}
										/>
									</StyledTableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	);
}

export default App;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

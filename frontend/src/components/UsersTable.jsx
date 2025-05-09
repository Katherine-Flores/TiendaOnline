import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from '@mui/material'

const Usuarios = () => {
    const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/usuarios', {withCredentials: true,});
                setUsuario(response.data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box sx={{width: "1132px"}}>
            <Typography variant="h5" sx={{mb: "40px", fontWeight: 600 }}>
                Usuarios
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Rol</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Correo</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>Fecha de Nacimiento</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usuarios.map((usuario) => (
                            <TableRow key={usuario.idUsuarios}>
                                <TableCell>{usuario.idUsuarios}</TableCell>
                                <TableCell>{usuario.rol_idRol}</TableCell>
                                <TableCell>{usuario.estados_idEstados}</TableCell>
                                <TableCell>{usuario.nombre_completo}</TableCell>
                                <TableCell>{usuario.correo_electronico}</TableCell>
                                <TableCell>{usuario.telefono}</TableCell>
                                <TableCell>{usuario.fecha_nacimiento}</TableCell>
                                <TableCell>
                                    <Box sx={{display: 'flex', gap: 2}}>
                                        <Button variant="contained" color="warning">
                                            <box-icon type='solid' name='edit' color='#fff'></box-icon>
                                        </Button>
                                        <Button variant="contained" color="error">
                                            <box-icon type='solid' name='trash' color='#fff'></box-icon>
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Usuarios;
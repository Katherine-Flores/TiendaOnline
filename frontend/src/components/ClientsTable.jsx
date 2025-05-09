import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from '@mui/material'

const Clientes = () => {
    const [clientes, setCliente] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clientes', {withCredentials: true,});
                setCliente(response.data);
            } catch (error) {
                console.error('Error al obtener los clientes:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box sx={{width: "1132px"}}>
            <Typography variant="h5" sx={{mb: "40px", fontWeight: 600 }}>
                Clientes
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Razon Social</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>NIT</TableCell>
                            <TableCell>Dirección</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell>correo</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientes.map((cliente) => (
                            <TableRow key={cliente.idClientes}>
                                <TableCell>{cliente.idClientes}</TableCell>
                                <TableCell>{cliente.razon_social}</TableCell>
                                <TableCell>{cliente.nombre_comercial}</TableCell>
                                <TableCell>{cliente.nit}</TableCell>
                                <TableCell>{cliente.direccion_entrega}</TableCell>
                                <TableCell>{cliente.telefono}</TableCell>
                                <TableCell>{cliente.correo}</TableCell>
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

export default Clientes;
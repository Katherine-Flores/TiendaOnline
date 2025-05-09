import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from '@mui/material'

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/ordenes', {withCredentials: true,});
                setOrders(response.data);
            } catch (error) {
                console.error('Error al obtener las órdenes:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box sx={{width: "1132px"}}>
            <Typography variant="h5" sx={{mb: "40px", fontWeight: 600 }}>
                Ordenes
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Detalles</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.idOrden}>
                                <TableCell>{order.idOrden}</TableCell>
                                <TableCell>{order.Fecha}</TableCell>
                                <TableCell>{order.nombre}</TableCell>
                                <TableCell>{order.EstadoOrden}</TableCell>
                                <TableCell>{order.DetallesOrden}</TableCell>
                                <TableCell>{'Q' + order.total_orden}</TableCell>
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

export default Orders;
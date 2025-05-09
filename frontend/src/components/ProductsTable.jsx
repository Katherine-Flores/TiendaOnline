import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from '@mui/material'

const Productos = () => {
    const [productos, setProducto] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/productos', {withCredentials: true,});
                setProducto(response.data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box sx={{width: "1132px"}}>
            <Typography variant="h5" sx={{mb: "40px", fontWeight: 600 }}>
                Productos
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Categoria</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Marca</TableCell>
                            <TableCell>Codigo</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map((producto) => (
                            <TableRow key={producto.idProductos}>
                                <TableCell>{producto.idProductos}</TableCell>
                                <TableCell>{producto.categoriaProductos_idCategoriaProductos}</TableCell>
                                <TableCell>{producto.usuarios_idUsuarios}</TableCell>
                                <TableCell>{producto.estados_idEstados}</TableCell>
                                <TableCell>{producto.nombre}</TableCell>
                                <TableCell>{producto.descripcion}</TableCell>
                                <TableCell>{producto.marca}</TableCell>
                                <TableCell>{producto.codigo}</TableCell>
                                <TableCell>{producto.stock}</TableCell>
                                <TableCell>{'Q' + producto.precio}</TableCell>
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

export default Productos;
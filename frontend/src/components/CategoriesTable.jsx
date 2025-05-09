import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from '@mui/material'

const Categorias = () => {
    const [categorias, setCategoria] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/categorias', {withCredentials: true,});
                setCategoria(response.data);
            } catch (error) {
                console.error('Error al obtener los categorias:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box sx={{width: "1132px"}}>
            <Typography variant="h5" sx={{mb: "40px", fontWeight: 600 }}>
                Categorias
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Fecha de creación</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categorias.map((categoria) => (
                            <TableRow key={categoria.idCategoriaProductos}>
                                <TableCell>{categoria.idCategoriaProductos}</TableCell>
                                <TableCell>{categoria.usuarios_idUsuarios}</TableCell>
                                <TableCell>{categoria.estados_idEstados}</TableCell>
                                <TableCell>{categoria.nombre}</TableCell>
                                <TableCell>{categoria.fecha_creacion}</TableCell>
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

export default Categorias;
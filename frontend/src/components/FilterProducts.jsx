import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Modal, Box, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const FilterProducts = ({ open, onClose, onApplyFilters }) => {
    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState("");
    const [precioMin, setPrecioMin] = useState("");
    const [precioMax, setPrecioMax] = useState("");
    const [ordenarPor, setOrdenarPor] = useState("");
    const [orden, setOrden] = useState("");

    useEffect(() => {
        const fetchCategorias = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/categorias", {
              withCredentials: true,
            });
            setCategorias(response.data);
        } catch (error) {
            console.error("Error al obtener categorías:", error);
        }
        };

        fetchCategorias();
    }, []);

    const aplicarFiltros = () => {
        onApplyFilters({ categoria, precioMin, precioMax, ordenarPor, orden });
        onClose(); // Cierra el modal después de aplicar los filtros
    };

    return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-filtros">
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
            }}
            >
            <Typography id="modal-filtros" variant="h6" component="h2" gutterBottom>
                Filtros
            </Typography>

            <FormControl fullWidth margin="normal">
                <InputLabel id="categoria-label">Categoría</InputLabel>
                <Select
                labelId="categoria-label"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                >
                <MenuItem value="">
                  Todos
                </MenuItem>         
                {categorias.map((cat) => (
                    <MenuItem key={cat.idCategoriaProductos} value={cat.idCategoriaProductos}>
                    {cat.nombre}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>

            <TextField
                label="Precio Mínimo"
                type="number"
                fullWidth
                margin="normal"
                value={precioMin}
                onChange={(e) => setPrecioMin(e.target.value)}
            />
            <TextField
                label="Precio Máximo"
                type="number"
                fullWidth
                margin="normal"
                value={precioMax}
                onChange={(e) => setPrecioMax(e.target.value)}
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="ordenar-por-label">Ordenar Por</InputLabel>
                <Select
                labelId="ordenar-por-label"
                value={ordenarPor}
                onChange={(e) => setOrdenarPor(e.target.value)}
                >
                <MenuItem value="Precio">Precio</MenuItem>
                <MenuItem value="Stock">Stock</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel id="orden-label">Orden</InputLabel>
                <Select
                labelId="orden-label"
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                >
                <MenuItem value="ASC">Ascendente</MenuItem>
                <MenuItem value="DESC">Descendente</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                <Button variant="outlined" color="error" onClick={onClose}>
                Cancelar
                </Button>
                <Button variant="contained" color="primary" onClick={aplicarFiltros}>
                Aplicar
                </Button>
            </Box>
        </Box>
      </Modal>
    );
};

FilterProducts.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterProducts;
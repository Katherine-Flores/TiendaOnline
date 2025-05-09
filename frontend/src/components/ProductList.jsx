import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import FilterProducts from "./FilterProducts";
import theme from "../styles/theme";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductos = async (filtros = {}) => {
    try {
      const response = await axios.get("http://localhost:3000/api/producto", {
        params: filtros,
        withCredentials: true,
      });

      if (response.status === 200) {
        setProductos(response.data);
        setError(null);
      } else {
        setError("No se encontraron productos con esos filtros.");
      }
    } catch (error) {
      setError("Error al obtener los productos: " + error.message);
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos(); // Carga inicial de productos sin filtros
  }, []);

  const aplicarFiltros = (filtros) => {
    fetchProductos(filtros); // Actualiza los productos con los filtros seleccionados
  };

  // Filtrar los productos con estado activo
  const productosActivos = productos.filter((producto) => producto.estados_idEstados === 1);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
          Filtros
        </Button>
      </Box>

      {error ? (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" color="error">
            {error}
          </Typography>
        </Box>
      ) : (
        <Box sx={{
            backgroundColor: theme.palette.background.paper, 
            borderRadius: "32px",
            maxWidth: "calc(798px + 300px)",
            p: "32px 150px",
            m: "52px",
            mx: "auto"
          }}
        >
          <Typography variant="h4" sx={{mb: "40px", fontWeight: 700 }}>
              Catalogo de Productos
          </Typography>
          <Box sx={{
            display: "flex",
            flexWrap: "wrap", 
            gap: 3,
          }}
          >
            {productosActivos.map((producto) => (
              <ProductCard key={producto.idProductos} producto={producto} />
            ))}
          </Box>
        </Box>
      )}

      <FilterProducts
        open={openModal}
        onClose={() => setOpenModal(false)}
        onApplyFilters={aplicarFiltros}
      />
    </Box>
  );
};

export default ProductList;
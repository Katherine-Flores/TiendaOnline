import PropTypes from "prop-types";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Box, Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import theme from '../styles/theme';

const ProductCard = ({ producto }) => {
  const getImage = (foto) => {
    if (!foto || foto === "data:image/jpg;base64,/w==") return "img/paquete.png";
    return foto;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card sx={{ boxShadow: 3, borderRadius: "16px", width: 250, backgroundColor: theme.palette.background.default }}>
        <CardMedia
          component="img"
          height="200"
          image={getImage(producto.foto)}
          alt={producto.nombre}
          sx={{ objectFit: "contain", padding: "16px 32px" }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "200px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" fontWeight="bold">
              {producto.nombre}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              {producto.descripcion}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              <strong>Precio:</strong> Q{producto.precio.toFixed(2)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: producto.stock > 0 ? theme.palette.success.main : theme.palette.error.main,
              }}
            >
              <strong>Stock:</strong> {producto.stock > 0 ? producto.stock : "Agotado"}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            disabled={producto.stock === 0}
            sx={{borderRadius: "12px"}}
          >
            <box-icon type='solid' name='cart-add' color="#fff"></box-icon>
            <Typography sx={{ml:"4px"}}>Agregar al Carrito</Typography>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

// Validación de las props usando PropTypes
ProductCard.propTypes = {
  producto: PropTypes.shape({
    idProductos: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    foto: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
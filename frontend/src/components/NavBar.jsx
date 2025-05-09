import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import theme from '../styles/theme';
import HomeIcon from '@mui/icons-material/HomeRounded';
import ContentPasteIcon from '@mui/icons-material/ContentPasteRounded';
import PaymentIcon from '@mui/icons-material/PaymentRounded';
import PeopleIcon from '@mui/icons-material/PeopleRounded';
import SellIcon from '@mui/icons-material/SellRounded';
import CategoryIcon from '@mui/icons-material/CategoryRounded';
import LogoutIcon from '@mui/icons-material/LogoutRounded';

const NavBar = () => {
    const { usuario, logout } = useAuth();

    return (
        <Box
            sx={{
                width: '152px',
                height: '100vh',
                backgroundColor: theme.palette.tertiary.main,
                position: 'sticky',
                top: 0,
                overflowY: 'auto',
                color: theme.palette.primary.contrastText,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-between"
            }}
        >
            <List>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard">
                    <Box sx={{ display: "flex", alignItems: "center", m: "16px 0" }}>
                        <img
                            src="/img/LOGO.png"
                            alt="Logo"
                            style={{ height: "40px", marginRight: "10px" }}
                        />
                        <Typography variant="h6" color="inherit" sx={{fontSize: "14px"}}>Mi Tiendita Online</Typography>
                    </Box>
                </ListItem>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard">
                    <HomeIcon />
                    <ListItemText sx={{ ml: '8px' }} primary="Inicio" />
                </ListItem>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard/ordenes">
                    <ContentPasteIcon />
                    <ListItemText sx={{ ml: '8px' }} primary="Órdenes" />
                </ListItem>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard/clientes">
                    <PaymentIcon />
                    <ListItemText sx={{ ml: '8px' }} primary="Clientes" />
                </ListItem>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard/usuarios">
                    <PeopleIcon />
                    <ListItemText sx={{ ml: '8px' }} primary="Usuarios" />
                </ListItem>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard/productos">
                    <SellIcon />
                    <ListItemText sx={{ ml: '8px' }} primary="Productos" />
                </ListItem>
                <ListItem sx={{color: "inherit"}} button component={Link} to="/Dashboard/categorias">
                    <CategoryIcon />
                    <ListItemText sx={{ ml: '8px' }} primary="Categoría Productos" />
                </ListItem>
            </List>
            {usuario && (
                <Button sx={{ mb: '32px'}}
                    color="inherit"
                    onClick={logout}
                >
                    <LogoutIcon sx={{ mr: '4px' }} />
                    Cerrar Sesión
                </Button>
            )}
        </Box>
    );
};

export default NavBar;
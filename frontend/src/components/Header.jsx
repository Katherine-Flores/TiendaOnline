import { useAuth } from '../context/AuthContext';
import { Button, Box, Typography, useTheme } from '@mui/material';


function Header() {
    const { usuario, logout } = useAuth();
    const theme = useTheme();

    return (
        <Box
            component="header"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: theme.spacing(2),
                backgroundColor: theme.palette.tertiary.main,
                color: theme.palette.primary.contrastText,
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                    src="/img/LOGO.png"
                    alt="Logo"
                    style={{ height: "40px", marginRight: "10px" }}
                />
                <Typography variant="h6" color="inherit">Mi Tiendita Online</Typography>
            </Box>
            {usuario && (
                <Button
                    color="inherit"
                    onClick={logout}
                >
                    Cerrar Sesión
                </Button>
            )}
        </Box>
    );
}

export default Header;
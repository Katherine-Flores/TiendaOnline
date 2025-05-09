import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Orders from '../components/OrdersTable';
import Clientes from '../components/ClientsTable';
import Usuarios from '../components/UsersTable';
import Productos from '../components/ProductsTable';
import Categorias from '../components/CategoriesTable';
import theme from '../styles/theme';

const Dashboard = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <NavBar />
                <Box
                    sx={{
                        flexGrow: 1,
                        margin: '16px',
                        padding: '16px',
                    }}
                >
                    <Routes>
                        <Route path='' element={
                                <Typography variant="h5" 
                                            sx={{mb: "40px", fontWeight: 600 }}
                                >
                                    Admin Dashboard
                                </Typography>
                            } 
                        />
                        <Route path="ordenes" element={<Orders />} />
                        <Route path="clientes" element={<Clientes />} />
                        <Route path="usuarios" element={<Usuarios />} />
                        <Route path="productos" element={<Productos />} />
                        <Route path="categorias" element={<Categorias />} />
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Dashboard;
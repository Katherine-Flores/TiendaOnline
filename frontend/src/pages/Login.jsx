import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";
import theme from "../styles/theme";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [error, setError] = useState("");

    const validationSchema = Yup.object().shape({
        correo: Yup.string()
            .email("El correo electrónico no es válido")
            .required("El correo es obligatorio"),
        password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .required("La contraseña es obligatoria"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const manejarSubmit = async (data) => {
        const { correo, password } = data;

        try {
            const response = await axios.post(
                "http://localhost:3000/api/login",
                { correo, password },
                { withCredentials: true }
            );

            // Procesar respuesta del servidor
            const rol = response.data.rol;
            const mensaje = response.data.message;
            const nombre = response.data.name;

            console.log(mensaje);

            login(nombre, rol);

            if (rol === 1) {
                navigate("/Dashboard");
            } else if (rol === 2) {
                navigate("/Catalogo");
            } else {
                setError("Rol desconocido");
            }

        } catch (error) {
            console.error("Error en el login:", error);

            // Manejar errores
            if (error.response && error.response.status === 403) {
                setError("Correo o contraseña incorrectos");
            } else {
                setError("Ocurrió un error. Inténtalo de nuevo más tarde.");
            }
        }
    };

    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: theme.palette.tertiary.main, display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box sx={{ 
                minWidth: "940px", 
                minHeight: "500px", 
                padding: "32px", 
                borderRadius: "32px", 
                backgroundColor: theme.palette.background.glass, 
                border: "rgba(255, 255, 255, 0.5), 2px, solid",
                backdropFilter: "blur(50px)",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.25)",
                display: "flex",
                gap: "32px"
            }}>
                <Box sx={{
                    maxWidth: "448px",
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: "16px"
                }}>
                    <Box 
                        component="img"
                        src="/img/Ilustración.png"
                        alt="Ilustración de Mi Tiendita Online"
                        sx={{
                            width: "100%"
                        }}
                    >
                    </Box>
                </Box>
                <Box sx={{
                    maxWidth: "464px",
                    backgroundColor: theme.palette.background.default,
                    borderRadius: "16px",
                    padding: "32px"
                }}>
                    <Typography variant="h4" sx={{ textAlign: "center", mt: "24px" }}>
                        ¡Bienvenido de vuelta!
                    </Typography>
                    <Typography variant="h5" sx={{ textAlign: "center", fontSize: "1rem", mt: "4px", mb: "20px" }}>
                        Hora de comprar {String.fromCodePoint(0x1F552)}
                    </Typography>
                    <form onSubmit={handleSubmit(manejarSubmit)}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Correo Electrónico"
                            {...register("correo")}
                            error={!!errors.correo}
                            helperText={errors.correo?.message}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Contraseña"
                            type="password"
                            {...register("password")}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        {error && (
                            <Typography color="error" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Iniciar Sesión
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
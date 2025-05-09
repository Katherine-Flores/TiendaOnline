import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Catalogo from "./pages/Catalogo";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <div>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Catalogo" element={<Catalogo/>}/>
                    <Route path="/Dashboard/*" element={<Dashboard/>}/>
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App;
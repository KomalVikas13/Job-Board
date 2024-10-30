import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCsrf } from "./CsrfContext";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigator = useNavigate();
    const { fetchCsrfToken } = useCsrf(); // This should now work

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8096/auth/login', { username, password }, {
                withCredentials: true,
            });
            if (response.status === 200) {
                setIsAuthenticated(true);
                fetchCsrfToken(); // Fetch CSRF token after login
                navigator(`/user-portal`);
            }
        } catch (error) {
            setIsAuthenticated(false);
            console.error("Login failed:", error);
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CsrfContext = createContext();

export const useCsrf = () => useContext(CsrfContext);

export const CsrfProvider = ({ children }) => {
    const [csrfToken, setCsrfToken] = useState("");

    const fetchCsrfToken = async () => {
        try {
            console.log("Fetching CSRF token");
            const response = await axios.get('http://localhost:8096/api/csrf-token', { withCredentials: true });
            setCsrfToken(response.data.token);
            console.log("CSRF token:", response.data.token);
        } catch (error) {
            console.error("Error fetching CSRF token:", error);
        }
    };

    useEffect(() => {
        // Call fetchCsrfToken initially or when needed
        fetchCsrfToken();
    }, []);

    return (
        <CsrfContext.Provider value={{ csrfToken, fetchCsrfToken }}>
            {children}
        </CsrfContext.Provider>
    );
};

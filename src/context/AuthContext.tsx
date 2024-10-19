import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const isAuthenticated = false
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return <>{children}</>;
};

export default AuthContext;

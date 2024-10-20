import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from "../../components/common/Loader";
import jwt_decode from "jwt-decode"; // Direct named import

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        // Decode the token to get userId
        const decodedToken: any = jwt_decode(token); // Directly use jwt_decode
        const userId = decodedToken.id;

        // Fetch the user role using the userId
        const response = await fetch(`https://api-mesan.curaweda.com/auth/users/${userId}/role`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserRole(data.role); // Assuming the backend returns { role: 'USER' } or similar
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole === null) {
    return <Navigate to="/unauthorized" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from "../../components/common/Loader";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  // Function to decode JWT
  const decodeJWT = (token: string) => {
    const payload = token.split('.')[1]; // Get the payload part
    if (!payload) return null;

    // Decode Base64Url to JSON
    const decodedPayload = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    return decodedPayload;
  };

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
        const decodedToken = decodeJWT(token);
        const userId = decodedToken?.id; // Use optional chaining

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

  if (userRole === 'MERCHANT') {
    return <Navigate to="/merchant" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

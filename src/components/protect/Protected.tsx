import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode; // Define children prop type
  allowedRoles?: string[]; // Define allowed roles prop type
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null); // State to store user's role

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("https://api-mesan.curaweda.com/auth/", {
          method: "GET",
          credentials: "include", 
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserRole(data.role); // Assume the response contains a 'role' field
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
    return <div>Loading...</div>; // Optionally show a loading state
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  if (allowedRoles && !allowedRoles.some((role) => role === userRole)) {
    return <Navigate to="/unauthorized" />; // Redirect to unauthorized page if role not allowed
  }

  return <>{children}</>; // Render protected children if authenticated and authorized
};

export default ProtectedRoute;

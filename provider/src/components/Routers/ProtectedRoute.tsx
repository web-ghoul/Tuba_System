import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<"checking" | "authenticated" | "unauthenticated">("checking");
  
  useEffect(() => {
    const checkAuth = async () => {
      // Simulate a slight delay to prevent immediate flashing
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const token = Cookies.get(import.meta.env.VITE_TOKEN_TITLE);
      console.log("Auth token:", token);
      
      setAuthState(token ? "authenticated" : "unauthenticated");
    };
    
    checkAuth();
  }, []);
  
  // Show loading state while checking authentication
  if (authState === "checking") {
    return (
        <>
        </>
    //   <div className="flex items-center justify-center h-screen">
    //     <div className="text-center">
    //       <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin mx-auto"></div>
    //       <p className="mt-4 text-lg"></p>
    //     </div>
    //   </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (authState === "unauthenticated") {
    return <Navigate to={import.meta.env.VITE_LOGIN_ROUTE} replace />;
  }
  
  // Render children if authenticated
  return <>{children}</>;
}
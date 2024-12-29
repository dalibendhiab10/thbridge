import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth';

const PrivateRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/AdminLogin" />;
};

export default PrivateRoute;
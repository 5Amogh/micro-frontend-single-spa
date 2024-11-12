import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

const AuthGuard = ({ children }) => {
  // if (!isAuthenticated()) {
  //   return <Navigate to="/landing" replace />;
  // }
  return children;
};

export default AuthGuard;

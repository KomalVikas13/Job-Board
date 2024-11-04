import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import UserPortal from './components/UserPortal';
import PostJob from './components/PostJob';
import { CsrfProvider } from './components/CsrfContext';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {isAuthenticated && (
        <>
          <Route path="/user-portal" element={<UserPortal />} />
          <Route path="/post-job" element={<PostJob />} />
        </>
      )}
    </Routes>
  );
}

function App() {
  return (
    <CsrfProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </CsrfProvider>
  );
}

export default App;

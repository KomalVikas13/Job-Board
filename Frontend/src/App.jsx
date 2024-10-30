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
          <Route 
            path="/user-portal" 
            element={
              <CsrfProvider>
                <UserPortal />
              </CsrfProvider>
            } 
          />
          <Route 
            path="/post-job" 
            element={
              <CsrfProvider>
                <PostJob />
              </CsrfProvider>
            } 
          />
        </>
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;

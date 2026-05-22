import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Rocket, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsOpen(false);
  };

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <Rocket className="logo-icon" />
          <span className="logo-text gradient-text">AstroPhysics1111</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {isAuthenticated && (
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          )}
          <Link to="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Pricing</Link>
          <div className="nav-actions">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="btn btn-secondary logout-btn">
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Log In</Link>
                <Link to="/register" className="btn btn-primary" onClick={() => setIsOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

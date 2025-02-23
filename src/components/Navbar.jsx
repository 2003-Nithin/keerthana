import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CookingPot, LogIn, UserPlus, Home, PlusCircle, Search } from 'lucide-react';

interface NavbarProps {
  isLoggedIn: boolean;
  userName?: string;
}

export function Navbar({ isLoggedIn, userName }: NavbarProps) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`${isHomePage ? 'bg-transparent absolute w-full z-10' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <CookingPot className={`w-8 h-8 ${isHomePage ? 'text-white' : 'text-orange-500'}`} />
              <span className={`ml-2 text-2xl font-bold ${isHomePage ? 'text-white' : 'text-gray-900'}`}>
                Recipe Share
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/recipes" 
                className={`flex items-center ${isHomePage ? 'text-white hover:text-orange-200' : 'text-gray-600 hover:text-orange-500'}`}
              >
                <Search className="w-5 h-5 mr-1" />
                <span>Browse Recipes</span>
              </Link>
              {isLoggedIn && (
                <Link 
                  to="/upload" 
                  className={`flex items-center ${isHomePage ? 'text-white hover:text-orange-200' : 'text-gray-600 hover:text-orange-500'}`}
                >
                  <PlusCircle className="w-5 h-5 mr-1" />
                  <span>Upload Recipe</span>
                </Link>
              )}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <span className={`${isHomePage ? 'text-white' : 'text-gray-600'}`}>
                Welcome, {userName}
              </span>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`flex items-center ${isHomePage ? 'text-white hover:text-orange-200' : 'text-gray-600 hover:text-orange-500'}`}
                >
                  <LogIn className="w-5 h-5 mr-1" />
                  <span>Login</span>
                </Link>
                <Link 
                  to="/register" 
                  className={`flex items-center ${
                    isHomePage 
                      ? 'bg-white text-gray-900 hover:bg-gray-100' 
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  } px-4 py-2 rounded-lg transition-colors`}
                >
                  <UserPlus className="w-5 h-5 mr-1" />
                  <span>Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
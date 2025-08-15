import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Code, Shield, Users, Database, ChevronDown } from 'lucide-react';

export const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [menuItems, setMenuItems] = useState([
    { label: "Home", isActive: true },
    { label: "About", isActive: false },
    { label: "Services", isActive: false },
    { label: "Career", isActive: false },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const serviceItems = [
    { 
      label: "Software Development", 
      icon: Code, 
      color: "text-teal-500",
      route: "/software-development"
    },
    { 
      label: "Quality Assurance", 
      icon: Shield, 
      color: "text-pink-500",
      route: "/quality-assurance"
    },
    { 
      label: "Client Services", 
      icon: Users, 
      color: "text-purple-500",
      route: "/client-services"
    },
    { 
      label: "Data processing", 
      icon: Database, 
      color: "text-blue-500",
      route: "/data-processing"
    },
  ];

  // Update active state based on current route
  useEffect(() => {
    setMenuItems((items) =>
      items.map((item) => ({
        ...item,
        isActive: 
          (item.label === "Home" && location.pathname === "/") ||
          (item.label === "About" && location.pathname === "/about") ||
          (item.label === 'Services' && (
            location.pathname === '/software-development' ||
            location.pathname === '/quality-assurance' ||
            location.pathname === '/client-services' ||
            location.pathname === '/data-processing'
          ))
      }))
    );
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (label) => {
    if (label === "Services") {
      setIsDropdownOpen(!isDropdownOpen);
      return;
    }

    // Handle navigation
    if (label === "Home") {
      navigate('/');
    } else if (label === "About") {
      navigate('/about');
    } else {
      if (onMenuClick) onMenuClick(label.toLowerCase());
    }

    setIsDropdownOpen(false);
  };

  const handleServiceClick = (serviceItem) => {
    navigate(serviceItem.route);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[85px] z-50 bg-neutral-300 shadow-">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between h-full px-8">
        {/* Logo */}
        <img
          className="w-[200px] h-[85px] object-cover cursor-pointer"
          alt="Tekarsh Logo"
          src="logo.png"
          onClick={() => navigate('/')}
        />

        {/* Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="w-[629px] h-[50px] rounded-[46px] bg-transparent flex items-center justify-center gap-8 px-4">
            {menuItems.map((item, index) => (
              <li key={index} className="relative" ref={item.label === "Services" ? dropdownRef : null}>
                {item.isActive ? (
                  <button 
                    className="h-11 px-6 rounded-[42px] bg-black hover:bg-black/90 transition flex items-center gap-1" 
                    onClick={() => handleClick(item.label)}
                  >
                    <span className="font-medium text-[#249d58] text-xl">
                      {item.label}
                    </span>
                    {item.label === "Services" && (
                      <ChevronDown className={`w-4 h-4 text-[#249d58] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                ) : (
                  <button
                    className="font-medium text-black text-xl cursor-pointer hover:text-[#2aa45f] transition flex items-center gap-1"
                    onClick={() => handleClick(item.label)}
                  >
                    {item.label}
                    {item.label === "Services" && (
                      <ChevronDown className={`w-4 h-4 text-black transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                )}

                {/* Dropdown Menu for Services */}
                {item.label === "Services" && isDropdownOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-stone-50 rounded-xl shadow-xl border border-lime-200 overflow-hidden z-50 backdrop-blur-sm">
                    <div className="py-3">
                      {serviceItems.map((service, serviceIndex) => {
                        const IconComponent = service.icon;
                        return (
                          <button
                            key={serviceIndex}
                            onClick={() => handleServiceClick(service)}
                            className="w-full flex items-center gap-4 px-5 py-3 hover:bg-stone-100 transition-all duration-200 text-left group"
                          >
                            <div className={`p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all duration-200`}>
                              <IconComponent className={`w-5 h-5 ${service.color}`} />
                            </div>
                            <span className="font-medium text-gray-700 text-base group-hover:text-gray-900 transition-colors">
                              {service.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
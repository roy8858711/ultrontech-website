import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone, Facebook, Linkedin, Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首頁', path: '/' },
    { name: '關於我們', path: '/about' },
    { name: '服務介紹', path: '/services' },
    { name: '核心技術', path: '/technology' },
    { name: '專案實績', path: '/projects' },
    { name: '聯絡我們', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white text-gray-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <img
                src="images/Ultronlogo_V2.png"
                alt="UltronTech Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-xl tracking-wider">奧創科技工程</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-all duration-200 ${isActive
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium transition ${isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">奧創科技工程有限公司</h3>
            <p className="text-sm leading-relaxed text-slate-400 mb-4">
              結合水資源工程、IoT物聯網與AI智慧決策的專家。<br />
              致力於提供智慧化、自動化的環境監測解決方案。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400">關於我們</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">服務項目</Link></li>
              <li><Link to="/technology" className="hover:text-blue-400">核心技術</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400">專案實績</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">聯絡資訊</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span>10690 臺北市大安區忠孝東路四段191號14樓之2</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500" />
                <a href="mailto:info@ultrontech.com.tw" className="hover:text-blue-400">info@ultrontech.com.tw</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500" />
                <span>02-1234-5678</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Ultron Technology Engineering Co., Ltd. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
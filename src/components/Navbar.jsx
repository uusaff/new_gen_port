import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  
  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-6 px-8 text-xs font-bold tracking-widest uppercase border-b border-black/10 dark:border-white/10 dark:text-[#F4F4F0] transition-colors duration-700 gap-4 md:gap-0 relative z-50">
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="text-lg hover:text-[#D90429] transition-colors">YOUSAF.</Link>
        <button 
          onClick={toggleTheme}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 hover:border-[#D90429] dark:hover:border-[#D90429] transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          )}
        </button>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
        {links.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={`transition-colors pb-1 hover:text-[#D90429] ${location.pathname === link.path ? 'text-[#D90429] border-b border-[#D90429]' : 'text-[#1C1C1A] dark:text-[#F4F4F0]'}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-6">
        <span>FULL-STACK DEVELOPER</span>
        <button 
          onClick={toggleTheme}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-black/20 dark:border-white/20 hover:border-[#D90429] dark:hover:border-[#D90429] transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          )}
        </button>
      </div>
    </header>
  );
};

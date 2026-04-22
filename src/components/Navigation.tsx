import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-[#2C3E50] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">网球技能提升</h1>
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className={`hover:text-[#3498DB] transition-colors ${location.pathname === '/' ? 'font-bold border-b-2 border-[#3498DB]' : ''}`}
          >
            水平标准
          </Link>
          <Link 
            to="/skills" 
            className={`hover:text-[#3498DB] transition-colors ${location.pathname === '/skills' ? 'font-bold border-b-2 border-[#3498DB]' : ''}`}
          >
            技能
          </Link>
          <Link 
            to="/notes" 
            className={`hover:text-[#3498DB] transition-colors ${location.pathname === '/notes' ? 'font-bold border-b-2 border-[#3498DB]' : ''}`}
          >
            记录
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

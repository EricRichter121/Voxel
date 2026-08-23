import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCartIcon } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'

function NavBar() {
  const location = useLocation()
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories'},
    { name: 'About', path: '/about' },
    { name: 'Search', path: '/search'}
  ]

  // проверяем, активен ли путь, чтобы подсветить активную ссылку
  const isActiveLink = (path: string) => location.pathname === path

  return (
      <div className="bg-base-100/80 backdrop-blur-md border-b border-base-content/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-16">
            {/* LOGO */}
            <div className="shrink-0">
              <Link to="/" className="text-xl font-bold text-primary">Simple Logo</Link>
            </div>
            {/* NAVIGATION LINKS */}
            <div className="hidden md:flex space-x-4">
              {/* map создает новый массив на основе navLinks,  */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-mono transition-colors duration-300 ${
                    isActiveLink(link.path) ? 'text-primary' : 'text-base-content hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* RIGHT SECTION */}
            <div className="flex items-center space-x-8">
                <Link to="/cart" className="text-base font-mono text-base-content hover:text-primary transition-colors duration-300">
                    <ShoppingCartIcon className="h-6 w-6" />
                </Link>
                {/* Тут позже добавить выбор темы сайта(используется zustand) */}
                <Link to="/profile" className="text-base font-mono text-base-content hover:text-primary transition-colors duration-300">
                    <CircleUserRound className="h-6 w-6" />
                </Link>
            </div>
          </div> 
        </div>
      </div>
  )
}

export default NavBar
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories } from './data/categories';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-emerald-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4825/4825292.png"
                alt="Ecuador Cuisine"
                className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Sabores de Ecuador</h1>
                <p className="text-emerald-100 mt-2">Un viaje gastronómico por nuestra tierra</p>
              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="text-white hover:text-emerald-200 transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 space-y-2">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="block py-2 text-white hover:text-emerald-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-16"
          >
            <div 
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <h2 className="text-3xl font-bold text-emerald-900">{category.name}</h2>
              <ChevronDown 
                className={`transform transition-transform ${
                  activeCategory === category.id ? 'rotate-180' : ''
                }`}
              />
            </div>
            
            <div className={`grid md:grid-cols-2 gap-8 mt-8 transition-all duration-300 ${
              activeCategory === category.id || activeCategory === null ? 'block' : 'hidden'
            }`}>
              {category.dishes.map((dish) => (
                <article
                  key={dish.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-emerald-900 mb-2">{dish.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{dish.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Sabores de Ecuador. Todos los derechos reservados.</p>
          <p>
            Descubre más sobre nuestra gastronomía en{' '}
            <a
              href="https://blog.howlanders.com/ecuador/gastronomia-en-ecuador/"
              className="text-emerald-300 hover:text-emerald-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              nuestro blog
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
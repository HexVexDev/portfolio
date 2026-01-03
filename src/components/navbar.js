
export default function Navbar({ active, setActive }) {

  const links = ["Home", "Projects", "Education"];

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md shadow-lg sticky top-0 left-0 z-50 mb-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 md:gap-0">
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">Maximiliano Diaz</h1>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center">
          {links.map((link) => (
            <li key={link}>
              <a
                onClick={() => setActive(link)}
                className={`cursor-pointer text-lg font-medium transition-all duration-300 px-3 py-1 rounded-full ${active === link
                    ? "bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-600 shadow-sm ring-1 ring-red-200"
                    : "text-gray-600 hover:text-red-500 hover:bg-gray-50"
                  }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
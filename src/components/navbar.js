
export default function Navbar({active,setActive}) {

  const links = ["Home", "Projects","Education"];
  
  return (
    <nav className="w-full bg-white shadow-md relative top-0 left-0 z-50  mb-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold text-gray-800">Maximiliano Diaz</h1>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a
                onClick={() =>setActive(link)}
                className={`cursor-pointer transition-colors duration-200 ${
                  active === link ? "text-red-600 font-medium" : "text-green-700 hover:text-red-500"
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
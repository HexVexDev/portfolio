// src/components/Footer.jsx
import { Mail, Github, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-400 py-10 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4 md:gap-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Maximiliano Diaz</p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/HexVexDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/maximiliano-diaz-44a1421a2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

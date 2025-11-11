// src/components/Footer.jsx
import { Mail, Github, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
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

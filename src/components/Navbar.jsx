import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-neutral-900 shadow-md">
      <div className="container mx-auto justify-end flex items-center justify-between p-4">
        <nav className="hidden md:flex space-x-4 text-neutral-50">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-neutral-50 hover:text-violet-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-50 hover:text-violet-600">
                Tafsir
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-50 hover:text-violet-600">
                Riyad-Us-Saliheen
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-50 hover:text-violet-600">
                Kitab-At-Tawhid
              </a>
            </li>
            <li>
              <a href="#" className="text-neutral-50 hover:text-violet-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button>
            <Menu color="#fafafa" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

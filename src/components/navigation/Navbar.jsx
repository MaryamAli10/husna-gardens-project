import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sideBar = (
    <div
      id="sideBar"
      className="flex absolute fixed bg-neutral-800 text-neutral-50 w-3/4 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 translate-x-0 "
    >
      <div className="flex flex-col items-center p-4 w-full items-end">
        <button
          className="flex justify-self-end items-end "
          onClick={() => setIsOpen(false)}
        >
          <X color="#fafafa" size={38} />
        </button>
        <ul className="flex flex-col divide-y divide-neutral-700 w-full text-lg">
          <li className="mb-2 w-full border-b">
            <a className="block hover:violet-600" href="#">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a className="block hover:violet-600" href="#">
              Tafsir
            </a>
          </li>
          <li className="mb-2">
            <a className="block hover:violet-600" href="#">
              Riyad-Us-Saliheen
            </a>
          </li>
          <li className="mb-2">
            <a className="block hover:violet-600" href="#">
              Kitab-At-Tawhid
            </a>
          </li>
          <li className="mb-2">
            <a className="block hover:violet-600" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {isOpen && sideBar}
      <div className="static fixed top-0 z-50 w-full bg-neutral-900 ">
        <div
          className="container mx-auto justify-end
       flex items-center justify-between p-4"
        >
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
            <button onClick={() => setIsOpen(!isOpen)}>
              <Menu color="#fafafa" size={38} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

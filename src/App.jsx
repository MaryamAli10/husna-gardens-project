import Home from "@/pages/Home";
import Tafsir from "@/pages/Tafsir";
import RiyadUsSaliheen from "@/pages/Riyad-Us-Saliheen";
import KitabAtTawhid from "@/pages/Kitab-At-Tawhid";
import Khutbah from "@/pages/Khutbah";
import Contact from "@/pages/Contact";
import Navbar from "./components/navigation/Navbar";

import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "tafsir" && <Tafsir />}
      {page === "riyadUsSaliheen" && <RiyadUsSaliheen />}
      {page === "kitabAtTawhid" && <KitabAtTawhid />}
      {page === "khutbah" && <Khutbah />}
      {page === "contact" && <Contact />}
    </>
  );
}

export default App;

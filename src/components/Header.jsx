import Navbar from "@/components/Navbar";

function Header({ title, text }) {
  return (
    <header className="w-full h-full bg-neutral-900">
      <Navbar />
      <div className="w-full flex flex-col gap-4 justify-center text-center text-neutral-50 md:mt-0 sm:mt-8 mt-4">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {/* breadcrumbs */}
    </header>
  );
}

export default Header;

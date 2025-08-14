import Navbar from "@/components/Navbar";

function Header({ title, text }) {
  return (
    <header className=" w-full h-full bg-neutral-900 pb-5">
      <Navbar />
      <div className="flex flex-col gap-2 justify-center text-center text-neutral-50 md:mt-0 sm:mt-8 mt-4 p-5">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-[Eb_Garmond]">
          {title}
        </h1>
        <p className="font-[Open_Sans] border-b border-neutral-50 px-3 pb-3 ">
          {text}
        </p>
      </div>
      {/* breadcrumbs */}
    </header>
  );
}

export default Header;

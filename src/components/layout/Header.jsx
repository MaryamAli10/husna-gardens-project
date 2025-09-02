import Navbar from "@/components/navigation/Navbar";

function Header({ title, text }) {
  return (
    <div className=" w-full h-full bg-neutral-900 pb-5 ">
      <Navbar />
      <div className="flex flex-col gap-4 justify-center text-center text-neutral-50  mt-8 p-5 ">
        <h1 className="md:text-4xl text-3xl font-semibold font-[Eb_Garmond]">
          {title}
        </h1>
        <p className="font-[Open_Sans] border-b border-neutral-50 px-3 pb-3 ">
          {text}
        </p>
        <div className="h-10 bg-neutral-900"></div>
      </div>

      {/* breadcrumbs */}
    </div>
  );
}

export default Header;

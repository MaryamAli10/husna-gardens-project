import Banner from "@/components/common/Banner";
import { MessageCircle, Mail, MapPinHouse } from "lucide-react";

function Contact() {
  return (
    <div>
      <Banner>Contact</Banner>
      <div className="w-full h-full p-4 bg-neutral-800 text-white">
        <div className="">
          <MessageCircle />
          <Mail />
          <MapPinHouse />
        </div>

        <div>
          <h2 className="font-[Gb-Garmoned] font-medium text-2xl">
            Books covered in Class:
          </h2>
          <ul className="font-[Open_Sans]" style={{ listStyleType: "disc" }}>
            <li>
              <a className="underline hover:text-purple-600" href="" download>
                Riyad-Us-Saliheen
              </a>
            </li>
            <li>
              <a className=" underline hover:text-purple-600" href="">
                Kitab-At-Tawhid (arabic ver)
              </a>
            </li>
            <li>
              <a className="underline hover:text-purple-600" href="">
                Kitab-At-Tawhid (english ver)
              </a>
            </li>
          </ul>
        </div>

        <div className="" id="contact-info">
          {" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nanoid } from "nanoid";

import AudioCard from "@/components/common/AudioCard";
import Banner from "@/components/common/Banner";

const items = [
  {
    title: "Al-Fatiha - ٱلْفَاتِحَة",
    content: 1,
  },
  {
    title: "Al-Baraqah - ٱلْبَقَرَة",
    content: 48,
  },
  {
    title: "Ali'Imran - آلِ عِمْرَان",
    content: 27,
  },
  {
    title: "An-Nisa - ٱلنِّسَاء",
    content: 30,
  },
  {
    title: "Al-Ma'idah - ٱلْمَائِدَة",
    content: 21,
  },
  {
    title: "Al-An'am - ٱلْأَنْعَام",
    content: 22,
  },
  {
    title: "Al-A'raf - ٱلْأَعْرَاف",
    content: 24,
  },
  {
    title: "Al-Anfal - ٱلْأَنْفَال",
    content: 10,
  },
];

function Placeholder({ items }) {
  function mapContent(title, content) {
    let arry = [];
    for (let i = 1; i <= content; i++) {
      let formatedTitle = `Surah ${title} - part ${i}`;
      arry.push(
        <li key={nanoid()} className="my-6 mx-2">
          <AudioCard key={nanoid()} title={formatedTitle} />
        </li>
      );
    }
    return arry;
  }
  return (
    <div>
      <Accordion type="single" collapsible className="mx-4 my-4 ">
        {items.map(({ title, content }, i) => (
          <AccordionItem key={nanoid()} value={`surah-${i}`}>
            <AccordionTrigger className="text-lg font-normal">{`${
              i + 1
            }. Surah ${title}`}</AccordionTrigger>
            <AccordionContent>
              <ul>{mapContent(title, content)}</ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function Tafsir() {
  return (
    <div className="bg-neutral-800 text-neutral-50">
      <Banner>Tafsir</Banner>
      <div className="flex flex-col font-[EB-Garmond] ">
        <h2 className="flex w-fit text-3xl border-b border-neutral-50 self-center my-4">
          Surah List
        </h2>

        <Placeholder items={items} />
      </div>
    </div>
  );
}

export default Tafsir;

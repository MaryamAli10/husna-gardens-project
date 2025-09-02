import AudioCard from "@/components/common/AudioCard";
import { useState } from "react";

function RecentAudioSection() {
  const [noOfCards, setNoOfCards] = useState(8);

  function handleLoadMore() {
    setNoOfCards(noOfCards + 4);
  }

  const audioCardList = [];

  for (let i = 0; i < noOfCards; i++) {
    let no = audioCardList.push(
      <AudioCard key={i} title={titles[i]} audioSrc={audio} />
    );
  }

  return (
    <div className="bg-neutral-800 text-neutral-50 w-full pb-8 px-6">
      <h1 className="font-[Eb_Garmond] border-b border-neutral-50 mx-auto text-center text-2xl p-1 pt-2 w-fit my-8">
        Latest Classes
      </h1>
      <div className="flex flex-col gap-4" id="latest-classes">
        <AudioCard title={titles[0]} audioSrc={audio} />
        <AudioCard title={titles[1]} />
        <AudioCard title={titles[2]} />
        <AudioCard title={titles[3]} />
        <button
          className="bg-neutral-700 text-neutral-50 rounded w-auto px-4 py-2 mx-auto hover:bg-neutral-600 transition"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

let audio = "/WhatsApp Audio 2025-01-10 at 7.28.55 PM.aac";

let titles = [
  "Khuthbah- Don't be unmindful where as everything you do is paid attention to ",
  "Kitab-at-Tawhid, Chapter 21- The chapter of what is narrated that, exceeding proper limits in the Graves of the righteous causes it to be something that is worshipped other than Allah ",
  "The Book of Prohibited Actions, Chapter 302, pt.2- Hadiths 1659-1660 ",
  "Surah Fatir ayahs 19-30 ",
];

export default RecentAudioSection;

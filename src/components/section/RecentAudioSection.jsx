import AudioCard from "@/components/common/AudioCard";
import { useState } from "react";

function RecentAudioSection() {
  function handleLoadMore() {
    //to be added
  }

  const audioCardList = [
    <AudioCard title={titles[0]} audioSrc={audio} key="1" />,
    <AudioCard title={titles[1]} key="2" />,
    <AudioCard title={titles[2]} key="3" />,
    <AudioCard title={titles[3]} key="4" />,
  ];

  return (
    <div className="bg-neutral-800 text-neutral-50 w-full pb-8 px-6 lg:px-30 2xl:px-60">
      <h1 className="font-[Eb_Garmond] border-b border-neutral-50 mx-auto text-center text-2xl p-1 pt-2 w-fit my-8">
        Latest Classes
      </h1>
      <div className="flex flex-col gap-4 " id="latest-classes">
        {audioCardList}
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

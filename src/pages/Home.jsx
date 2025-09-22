import Header from "@/components/layout/Header";
import RecentAudioSection from "@/components/section/RecentAudioSection";

function Home() {
  return (
    <div
      id="HomePageLayout"
      className="w-full h-full bg-neutral-800 min-h-screen"
    >
      <Header title={introTitle} text={introText} />
      <RecentAudioSection />
    </div>
  );
}

let introTitle = "بسم الله الرحمن الرحيم";
let introText =
  "A humble contribution in calling to Islam upon clear guidance in the English language. May Allah accept from us and make it a source of benefit in this world and the next.";

export default Home;

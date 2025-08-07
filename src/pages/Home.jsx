import Header from "@/components/Header";

function Body() {}

function Footer() {}

function Home() {
  return (
    <div id="HomePageLayout">
      <Header title={introTitle} text={introText} />
      <Body />
      <Footer />
    </div>
  );
}

let introTitle = "بسم الله الرحمن الرحيم";
let introText =
  "A humble contribution in calling to Islam upon clear guidance in the English language. May Allah accept from us and make it a source of benefit in this world and the next.";

export default Home;

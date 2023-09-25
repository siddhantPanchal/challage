import "./App.css";
import FAQ from "./components/faq/FAQ";
import FeatureSections from "./components/features/FeatureSection";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Introduction from "./components/intro/Introduction";
import NewsLetter from "./components/news_letter/NewsLetter";
import PracticeSection from "./components/practice/PracticeSection";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className=" ">
      <Header />
      <Hero />
      <Introduction />
      <FeatureSections />
      <PracticeSection />
      <Testimonial />
      <Team />
      <FAQ />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;

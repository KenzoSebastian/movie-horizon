import Background from "../component/Elements/Background";
import MyCarousel from "../component/fragments/Carousel";
import MyCardSection from "../component/fragments/MyCardSection";
import Navbar from "../component/fragments/Navbar";

const HomePage = () => {
  return (
    <div className="h-[1200px]">
      <Background />
      <Navbar />
      <MyCarousel />
      <MyCardSection query="Batman"></MyCardSection>
      {/* <MyCardSection query="Avengers"></MyCardSection>
      <MyCardSection query="Disney"></MyCardSection>
      <MyCardSection query="christmas"></MyCardSection> */}
    </div>
  );
};

export default HomePage;

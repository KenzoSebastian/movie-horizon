import Background from "../component/Elements/Background";
import MyCarousel from "../component/fragments/Carousel";
import MyCardSection from "../component/fragments/MyCardSection";
import Navbar from "../component/fragments/Navbar";
import useDispatchSession from "../hooks/useDispatchSession";
import useInsertDb from "../hooks/useInsertDb";

const HomePage = () => {
  useDispatchSession();
  useInsertDb();
  
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

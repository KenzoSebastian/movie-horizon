import Background from "../component/Elements/Background";
import MyCarousel from "../component/fragments/Carousel";
import MyCardSection from "../component/fragments/MyCardSection";
import Navbar from "../component/fragments/Navbar";

const HomePage = ({ query }) => {
  return (
    <div className="h-[1200px]">
      <Background />
      <Navbar />
      <MyCarousel query={query[0]} />
      {query.map((item, index) => {
        if (index !== 0 && index <= 5) {
          return <MyCardSection query={item} key={index}></MyCardSection>;
        }
      })}
    </div>
  );
};

export default HomePage;

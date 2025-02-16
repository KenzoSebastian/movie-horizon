import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Background from "../component/Elements/Background";
import MyCarousel from "../component/fragments/Carousel";
import MyCardSection from "../component/fragments/MyCardSection";
import Navbar from "../component/fragments/Navbar";
import { setSession } from "../redux/slices/session";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    if (allKeys.length >= 2) {
      const sessionKey = allKeys.find((key) => key.includes("auth-token"));
      dispatch(setSession(JSON.parse(localStorage.getItem(sessionKey))));
    }
  }, []);
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

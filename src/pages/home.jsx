import { useMantineColorScheme } from "@mantine/core";
import MyCarousel from "../component/fragments/Carousel";
import Navbar from "../component/fragments/Navbar";
import { useEffect } from "react";
import MyCardSection from "../component/fragments/MyCardSection";
import Background from "../component/Elements/Background";

const HomePage = () => {
  const { setColorScheme } = useMantineColorScheme();
  useEffect(() => {
    setColorScheme("dark");
  }, []);
  return (
    <div className="h-[1200px]">
      <Background />
      <Navbar />
      <MyCarousel />
      <MyCardSection title="Batman"></MyCardSection>
      <MyCardSection title="Avengers"></MyCardSection>
      <MyCardSection title="Disney"></MyCardSection>
      <MyCardSection title="christmas"></MyCardSection>

    </div>
  );
};

export default HomePage;

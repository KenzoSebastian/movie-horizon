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
  }, [setColorScheme]);
  return (
    <div className="h-[1200px]">
      <Background />
      <Navbar />
      <MyCarousel />
      <MyCardSection query="Batman"></MyCardSection>
      <MyCardSection query="Avengers"></MyCardSection>
      <MyCardSection query="Disney"></MyCardSection>
      <MyCardSection query="christmas"></MyCardSection>

    </div>
  );
};

export default HomePage;

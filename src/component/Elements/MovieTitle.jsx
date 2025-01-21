import { Title } from "@mantine/core";
import React from "react";

const MovieTitle = ({children}) => {
  return (
    <Title tt={"capitalize"} className="text-2xl md:text-3xl lg:text-4xl">
      {children}
    </Title>
  );
};

export default MovieTitle;

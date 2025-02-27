import { Box, Flex, Skeleton } from "@mantine/core";
import React from "react";

const SkeletonCarousel = () => {
  return (
    <Box h={650} className="rounded-[35px]" bg={"gray.9"}>
      <Skeleton height={300} radius="xl" />
      <Skeleton height={50} width="50%" mt={20} radius="lg" ml={20} />
      <Flex gap={"md"} align={"center"} mt={10} ml={20}>
        <Skeleton height={35} width="20%" radius="lg" />
        <Skeleton height={25} width="40%" radius="md" />
      </Flex>
      <Skeleton height={20} width="80%" mt={20} radius="md" ml={20} />
      <Skeleton height={20} width="80%" mt={10} radius="md" ml={20} />
      <Skeleton height={20} width="80%" mt={10} radius="md" ml={20} />
      <Skeleton height={50} width="20%" mt={20} radius="xl" ml={20} />
    </Box>
  );
};

export default SkeletonCarousel;

import { Box, Container, Flex, Group, Skeleton } from "@mantine/core";

const SkeletonDetail = () => {
  return (
    <Container pt={120} size={"xl"}>
      <Flex gap={"lg"} className="flex-col md:flex-row">
        <Skeleton height={450} className="w-full md:w-[300px]" radius="xl" />
        <Box className="flex-1">
          <Skeleton className="w-full md:w-3/4" height={60} radius={"md"} />
          <Group pt={10}>
            <Skeleton className="w-1/4 md:w-[19%]" height={30} radius={"md"} />
            <Skeleton
              className="w-[15%] md:w-[10%]"
              height={30}
              radius={"md"}
            />
            <Skeleton className="w-1/3 md:w-1/5" height={30} radius={"md"} />
          </Group>
          <Skeleton
            height={20}
            className="w-full md:w-4/5"
            mt={40}
            radius="md"
          />
          <Skeleton
            height={20}
            className="w-4/5 md:w-3/4"
            mt={10}
            radius="md"
          />
          <Skeleton
            height={20}
            className="w-[90%] md:w-[85%]"
            mt={10}
            radius="md"
          />
          <Skeleton
            height={20}
            className="w-1/3 md:w-[40%]"
            mt={10}
            mb={40}
            radius="md"
          />
          {Array.from({ length: 4 }).map((_, i) => (
            <Group mb={10} key={i}>
              <Skeleton height={20} className="w-1/4 md:w-[20%]" radius="md" />
              <Skeleton height={20} className="w-1/2 md:w-[40%]" radius="md" />
            </Group>
          ))}
        </Box>
      </Flex>
    </Container>
  );
}

export default SkeletonDetail
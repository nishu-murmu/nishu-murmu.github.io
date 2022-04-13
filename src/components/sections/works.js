import { Box, Heading } from "@chakra-ui/react";
import WorksItem from "./worksItem";

const Works = () => {
  return (
    <Box>
      <Heading>Works</Heading>
      <Box>
        <WorksItem />
      </Box>
    </Box>
  );
};

export default Works;

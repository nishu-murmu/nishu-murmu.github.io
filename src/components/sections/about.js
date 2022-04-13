import { Box, Image, Heading } from "@chakra-ui/react";

//files

const About = () => {
  return (
    <Box>
      <Heading as="h1" size="xl">
        About
      </Heading>
      <Image
        className="profile-image"
        align="center"
        src={require("../../static/nishu.jpg")}
        borderRadius="full"
        boxSize="100px"
        alt="Nishu Murmu"
      ></Image>
      <Heading as="h4" size="md" className="profile-heading">
        <strong>Nishu Murmu</strong>
      </Heading>
    </Box>
  );
};

export default About;

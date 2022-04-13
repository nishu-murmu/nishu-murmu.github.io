import React from "react";
import { VStack, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

//files
import "../styles/section.css";
import Works from "./sections/works.js";
import About from "./sections/about.js";
import Blog from "./sections/blog.js";

const Section = () => {
  return (
    <VStack className="section">
      <Flex className="section_content">
        <Routes>
          <Route path="works" element={<Works />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Flex>
    </VStack>
  );
};

export default Section;

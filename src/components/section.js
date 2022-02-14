import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

//files
import "./section.css";
import ItemList from "./itemList.js";

const Section = () => {
  return (
    <VStack className="section">
      <div className="section_header">Works</div>
      <Flex className="section_content">
        <ItemList />
      </Flex>
    </VStack>
  );
};

export default Section;

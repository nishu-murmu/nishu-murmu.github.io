import React from "react";
import {Box} from "@chakra-ui/react"
//files
import "./styles/footer.css";

const Footer = () => {

  return (
    <Box className="footer">
      &copy; 2022,
      <a href="https://github.com/nishu-murmu/Portfolio">Nishu Murmu</a>. All
      rights reserved.
    </Box>
  );
};

export default Footer;

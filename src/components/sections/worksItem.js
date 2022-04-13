import React, { Fragment } from "react";
import { Box, Image } from "@chakra-ui/react";

const List = [
  {
    id: 1,
    href: "https://github.com/nishu-murmu/psychedelic-waves",
    src: require("../../static/psychedelic.png"),
    name: "psychedelic-waves",
    className: "section_content_one",
    info: "Psychedelic waves made by perlin noise and GLSL.",
  },
  {
    id: 2,
    href: "https://github.com/nishu-murmu/Eva-Unit-01",
    src: require("../../static/eva.png"),
    name: "eva",
    className: "section_content_two",
    info: "Eva robot smooth scroll info display.",
  },
  {
    id: 3,
    href: "https://github.com/nishu-murmu/psychedelic-waves",
    src: require("../../static/psychedelic.png"),
    name: "psychedelic-waves",
    className: "section_content_three",
    info: "Psychedelic waves made by perlin noise and GLSL.",
  },
  {
    id: 4,
    href: "https://github.com/nishu-murmu/Eva-Unit-01",
    src: require("../../static/eva.png"),
    name: "eva",
    className: "section_content_four",
    info: "Eva robot smooth scroll info display.",
  },
];

const WorksItem = () => {
  const list = List.map((index) => {
    return (
      // 1
      <Box key={index.id} className="item">
        <a href={index.href}>
          <Image src={index.src} alt={index.name} />
          <p>{index.info}</p>
        </a>
      </Box>
    );
  });
  return <Fragment>{list}</Fragment>;
};

export default WorksItem;

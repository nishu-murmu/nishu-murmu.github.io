import React, { Fragment } from "react";
import { Box, Image } from "@chakra-ui/react";
const List = [
  {
    id: 1,
    href: "https://medium.com/@nishumurmu/three-js-game-changer-for-3d-web-design-79c22b93e0a1",
    src: require("../../static/webgl.png"),
    name: "THREEjs",
    className: "section_content_one",
    info: "THREEjs - Game changer for 3D web design.",
  },
  {
    id: 2,
    href: "https://dev.to/nishumurmu/my-neovim-config-setup-for-linux-environment-211",
    src: require("../../static/neovim.png"),
    name: "Neovim Config setup",
    className: "section_content_two",
    info: "My Neovim config setup in Lua.",
  },
  {
    id: 3,
    href: "https://dev.to/nishumurmu/my-fish-shell-with-tmux-setup-for-linux-16e7",
    src: require("../../static/fish.png"),
    name: "fish shell setup",
    className: "section_content_three",
    info: "Fish shell setup with tmux for faster terminal workflow.",
  },
];

const BlogItem = () => {
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

export default BlogItem;

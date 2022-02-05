import React, { useState } from "react";
import { Stack, HStack, IconButton, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// files
import "./header.css";

const Header = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack spacing="20px" className="header">
            <a href="https://github.com/nishu-murmu/Portfolio" className="name">
                Nishu &nbsp; Murmu
            </a>
            <div className="navigation">
                <a href="./sections/post.tsx" className="link">
                    Posts
                </a>
                <a href="./sections/about.tsx" className="link">
                    About
                </a>
                <a
                    href="https://github.com/nishu-murmu/Portfolio"
                    className="github"
                >
                    <i className="fab fa-github"></i>
                </a>
                <HStack spacing="20px">
                    <IconButton
                        variant="solid"
                        onClick={() => toggleColorMode()}
                        icon={<SunIcon />}
                        key="tableModeButton"
                    />
                    <IconButton icon={<HamburgerIcon />} className="bars" />
                </HStack>
            </div>
        </HStack>
    );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom"
import {
    HStack,
    VStack,
    Flex,
    IconButton,
    useColorMode,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon } from "@chakra-ui/icons";

// files
import "./header.css";

const Header = (props) => {
    const { toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <HStack spacing="20px" className="header">
            <Link to="/about" className="name">
                Nishu &nbsp; Murmu
            </Link>
            <Flex className="navigation">
                <Link to="/works" className="link">
                    Works
                </Link>
                <Link to="/blog" className="link">
                    Blog
                </Link>
                <Link to="/about" className="link">
                    About
                </Link>
                <a
                    href="https://github.com/nishu-murmu/Portfolio"
                    className="github"
                >
                    <i className="fab fa-github"></i>
                </a>
                <HStack spacing="20px" className="buttons">
                    <IconButton
                        variant="solid"
                        onClick={() => toggleColorMode()}
                        icon={<MoonIcon />}
                        key="tableModeButton"
                        className="toggle"
                    />
                    <IconButton
                        variant="outline"
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                        className="bars"
                    />
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        size="xs"
                        motionPreset="slideInBottom"
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                                <VStack>
                                    <Link href="/works">Works</Link>
                                    <Link href="/blog">Blog</Link>
                                    <Link href="/about">About</Link>
                                    <a href="https://github.com/nishu-murmu/Portfolio">
                                        Source
                                    </a>
                                </VStack>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </HStack>
            </Flex>
        </HStack>
    );
};

export default Header;

import React from "react";
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
import { HamburgerIcon, SunIcon } from "@chakra-ui/icons";

// files
import "./header.css";

const Header = (props) => {
    const { toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <HStack spacing="20px" className="header">
            <a href="https://github.com/nishu-murmu/Portfolio" className="name">
                Nishu &nbsp; Murmu
            </a>
            <Flex className="navigation">
                <a href="./sections/post.js" className="link">
                    Blog
                </a>
                <a href="./sections/about.js" className="link">
                    About
                </a>
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
                        icon={<SunIcon />}
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
                                    <a href="/sections/post.js">Blog</a>
                                    <a href="./sections/about.js">About</a>
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

import { Button, HStack, Flex, Link, Spacer, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Heading from './heading'
import { FaSun, FaMoon } from 'react-icons/fa'
import NextLink from 'next/link'


type LinkItemProps = {
    href: string
    children: string
}

const NavBar: React.FC = () => {

    const { toggleColorMode } = useColorMode()
    const LinkItem = (props: LinkItemProps) => {
        return (
            <Link
                as={NextLink}
                href={props.href}
                scroll={false}
                p={2}
                bg={'grassTeal'}
                color={useColorModeValue("black", "white")}
            >
                {props.children}
            </Link>
        )
    }

    return (
        <>

            <Flex>
                <Heading />
                <Spacer />
                <HStack>
                    <LinkItem href="/">Home</LinkItem>
                    <LinkItem href="/posts">Posts</LinkItem>
                    <LinkItem href="/works">Works</LinkItem>

                </HStack>

                <Spacer />
                <Button size={'sm'} onClick={() => toggleColorMode()}>
                    {useColorModeValue(<FaSun />, <FaMoon />)}
                </Button>
            </Flex>
        </>
    )
}

export default NavBar

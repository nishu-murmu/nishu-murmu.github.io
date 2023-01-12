import {
  Flex,
  Heading,
  Text,
  HStack,
  useColorModeValue,
  useColorMode,
  Box,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa'

const NavBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const IconStyle = {
    fontSize: "25px",
    cursor: "pointer",
  }
  return (
    <Flex padding={4} justifyContent={'space-between'}>
      <Heading size={'lg'}>
        <strong>Nishu Murmu</strong>
      </Heading>
      <HStack spacing={8}>
        <Link href={'/works'}>
          <Text fontSize={'xl'}>Works</Text>
        </Link>
        <Link href={'/posts'}>
          <Text fontSize={'xl'}>Posts</Text>
        </Link>
        <Link href={'https://github.com/nishu-murmu/nishu-murmu.github.io'}>
          <HStack spacing={2}>
          <FaGithub fontSize={'20px'} />
            <Text fontSize={'lg'}>Source</Text>
          </HStack>
        </Link>
      </HStack>
      <Box mt={2}>
        <SwitchIcon style={IconStyle} onClick={toggleColorMode}/>
      </Box>
    </Flex>
  )
}

export default NavBar

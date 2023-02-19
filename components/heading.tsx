import { Link, Text, useColorModeValue } from "@chakra-ui/react"
import NextLink from 'next/link'


const Heading: React.FC = () => {
    return (
        <Link style={{ 'textDecoration': 'none' }} as={NextLink} href={'/'} scroll={false}>
            <Text color={useColorModeValue("black", 'white')} fontSize={'xl'} fontWeight={'bold'}>
                Nishu Murmu
            </Text>
        </Link>
    )
}

export default Heading

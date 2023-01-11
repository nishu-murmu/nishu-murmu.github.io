import { Box, Heading, HStack, Container, Grid } from '@chakra-ui/react'
import Link from 'next/link'
import { Fragment } from 'react'

//files
import Footer from '../components/footer.js'
import MainSection from '../components/main.js'
import NavBar from '../components/nav-bar.js'

export default function Home() {
  return (
    <Fragment>
      <Container bg={'cyan.400'} maxWidth={'4xl'}>
        <Box>
          <NavBar />
          <MainSection />
          <Footer />
        </Box>
      </Container>
    </Fragment>
  )
}

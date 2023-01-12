import { Box, Container } from '@chakra-ui/react'
import { Fragment } from 'react'

//files
import Footer from '../components/footer.js'
import MainSection from '../components/section.js'
import NavBar from '../components/nav-bar.js'

export default function Home() {
  return (
    <Fragment>
      <Container
        maxWidth={'5xl'}>
        <Box>
          <NavBar />
          <MainSection />
          <Footer />
        </Box>
      </Container>
    </Fragment>
  )
}

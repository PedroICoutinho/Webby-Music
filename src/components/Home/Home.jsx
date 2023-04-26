import NeoCarousel from '../NeoCarousel/NeoCarousel'
import NeoNavbar from '../NeoNavbar/NeoNavbar'
import { PreviewMusic } from '../../pages/Home Footer/preview'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <NeoNavbar/>
    <NeoCarousel/>
    <PreviewMusic/>
    <Footer/>
    </>
  )
}

export default Home
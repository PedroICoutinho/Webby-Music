import NeoCarousel from '../NeoCarousel/NeoCarousel'
import NeoNavbar from '../NeoNavbar/NeoNavbar'
import { PreviewMusic } from '../../pages/Home Footer/preview'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <NeoNavbar/>
    <div className='mb-5'>
    <NeoCarousel/>
    </div>
    <div className='d-flex justify-content-center align-items-center bg-dark'>
    <PreviewMusic/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
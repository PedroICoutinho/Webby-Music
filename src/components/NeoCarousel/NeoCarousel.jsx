import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import rap from "../../assets/images/RAP.png";
import rock from "../../assets/images/rock.png";
import edm from "../../assets/images/edm.png"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container style={{backgroundColor:"var(--black)", height:"580px", width:"900px"}}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{height:"570px", width:"900px"}}
          className=""
          src={rap}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover Rap</h3>
          <p className='text-light'>Click above to discover the best Rap has to offer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"570px",width:"900px"}}
          className="d-block w-100"
          src={rock}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Discover Rock</h3>
          <p className='text-light'>Click above to discover the best Rock has to offer</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"570px", width:"900px"}}
          className="d-block w-100"
          src={edm}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Discover EDM</h3>
          <p className='text-light'>Click above to discover the best EDM has to offer</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default ControlledCarousel
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Carousel } from 'react-bootstrap';  
import L from './images/ki1.jpg';  
import M from './images/ki12.jpg'; 
import K from './images/k.jpeg'; 
import { useState } from 'react';  
function Kinde() {  
  const [index, setIndex] = useState(0);  
  const handleSelect = (selectedIndex, e) => {  
    setIndex(selectedIndex);  
  };  
  return (  
    <>  
      <div className='p-5'>  
        <Carousel activeIndex={index} onSelect={handleSelect} >  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src={L}  
              alt="First slide"  
            />  
            <Carousel.Caption>  
              {/* <h3>First Slider Image Title</h3>  
              <p>First Slide decription.</p>   */}
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src={M}  
              alt="Second slide"  
            />  
  
            <Carousel.Caption>  
              {/* <h3>Second slide Image </h3>  
              <p>Second slide description</p>   */}
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item>  
            <img  
              className="d-block w-100"  
              src={K}  
              alt="Third slide"  
            />  
  
            <Carousel.Caption>  
              {/* <h3>Third Slide Image</h3>  
              <p>Third Slide Description.</p>   */}
            </Carousel.Caption>  
          </Carousel.Item>  
        </Carousel>  
      </div>  
    </>  
  );  
}  
export default Kinde;  
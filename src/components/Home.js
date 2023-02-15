import Carousel from 'react-bootstrap/Carousel';


const textStyle = {
    color: 'dark',
    textDecoration: 'none',
	fontSize: 'bold'
	
}

function Home() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 homeImages"
			src="https://static.demilked.com/wp-content/uploads/2016/06/Social-Media-in-Marketing.jpg"
        	alt="First slide"
        />
        <Carousel.Caption className='text-dark'>
          <h3 style={textStyle} >SOCIAL LENS</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 homeImages"
          src="https://lh4.googleusercontent.com/PLQXT3YJO8W1Lb2IMzW2jsOqCjNiifIJFF77rut4T32PAMy1iNHP8YPt8Msafm2pWNhC3RzK0LAyMhWNJ7D8BYZhFbL5DNg6pS8G_9GNLdagf-OqJ6olkkpi7KQk6bEwu65fPqub"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 homeImages"			
		  src="https://www.shutterstock.com/image-vector/welcome-banner-bright-multicolored-sign-260nw-1749503249.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;

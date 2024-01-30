import ImageOne from '../assets/giraffe.jpg';
import ImageTwo from '../assets/koala.jpg';
import ImageThree from '../assets/panda.jpg';

function Gallery() {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <img src={ImageOne} alt="giraffe_image" className='portrait' />
        <img src={ImageTwo} alt="koala_image" className='portrait' />
        <img src={ImageThree} alt="panda_image" className='portrait' />
      </div>
    )
}
  
export default Gallery // component export
import './Gallery.css';

const Gallery = () => {
    return (
      <div className='space-y-12 mx-12'>
          <h4 className='mt-12 text-xl text-center'>Searching for enchanting Disney Princesses, magical Disney Fairies, or the beloved characters from Disney's Frozen?
        </h4>
        <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img className="carousel-image" src="https://www.marcieinmommyland.com/wp-content/uploads/2019/09/Meeting-Princesses-at-Walt-Disney-World-4-scaled.jpg" alt="Princess 1" />
        </div> 
        <div className="carousel-item">
          <img className="carousel-image" src="https://www.familychoiceawards.com/wp-content/uploads/2014/02/elsaanna.jpg" alt="Princess 2" />
        </div> 
        <div className="carousel-item">
          <img className="carousel-image" src="https://media3.s-nbcnews.com/i/streams/2014/May/140501/2D274905754982-disney-snow-white-cinderella-belle-636_2.jpg" alt="Princess 3" />
        </div> 
        <div className="carousel-item">
          <img className="carousel-image" src="https://www.parksavers.com/wp-content/uploads/2022/08/img_2075-scaled.jpg" alt="Princess 4" />
        </div> 
        <div className="carousel-item">
          <img className="carousel-image" src="https://live.staticflickr.com/4098/5437953586_fa9a9fbb69_b.jpg" alt="Princess 5" />
        </div> 
        <div className="carousel-item">
          <img className="carousel-image" src="https://i2-prod.corkbeo.ie/incoming/article17489530.ece/ALTERNATES/s615/0_princesses-flickrarmadillo444.jpg" alt="Princess 6" />
        </div> 
        <div className="carousel-item">
          <img className="carousel-image" src="https://www.shemazing.net/wp-content/uploads/2018/05/b3b4459888e7f6410aec014686b2c64bb2e4077a-jpg_facebook-656x345.jpg" alt="Princess 7" />
        </div>
      </div>
      </div>
      
    );
};

export default Gallery;
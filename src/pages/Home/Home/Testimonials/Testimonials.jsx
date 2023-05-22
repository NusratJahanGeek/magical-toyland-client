import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

    return (
        <div className='bg-[#FFEBDB] px-4 py-16 md:px-12 md:py-28'>
          <h2 className="text-xl mb-8 md:text-3xl text-center md:mb-12" style={{ color: "#000" }}>Magical Toy Tales: Happy Customer Stories!</h2>
          <div data-aos="fade-up" data-aos-anchor=".other-element" className="flex flex-col md:flex-row items-center">
            <div className="chat chat-start aos-animate" data-aos="slide-right"
                data-aos-delay="100">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://www.shutterstock.com/image-photo/portrait-mature-business-woman-smiling-260nw-1593894763.jpg" alt="User 1" />
    </div>
  </div>
  <div className="chat-bubble bg-[#F4BBD0] text-black">Disney Princesses, Disney Fairies, and Disney Frozen dolls galore! Magical Toyland is a paradise for Disney doll collectors like me. The variety and quality are simply enchanting!</div>
</div>
<div className="chat chat-start aos-animate" data-aos="slide-up"
                data-aos-delay="100">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Impact_Of_Wikipedia.webm/1200px--The_Impact_Of_Wikipedia.webm.jpg" alt="User 2" />
    </div>
  </div>
  <div className="chat-bubble bg-[#F4BBD0] text-black">As a fan of Disney Fairies, Magical Toyland is my fairyland! Their Disney Fairies Dolls capture the enchantment of Tinker Bell and her magical friends. I love adding these whimsical dolls to my collection!</div>
</div>
<div className="chat chat-start  aos-animate" data-aos="slide-left"
                data-aos-delay="100">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://media.nngroup.com/media/people/photos/20211213_Vegas-tanner.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg" alt="User 3" />
    </div>
  </div>
  <div className="chat-bubble bg-[#F4BBD0] text-black">Magical Toyland makes Disney dreams come true! With their Disney Princess, Disney Fairies, and Disney Frozen Dolls, every child can embark on imaginative journeys inspired by their favorite characters. It's pure magic!</div>
</div>

        </div>
        </div>
    );
};

export default Testimonials;
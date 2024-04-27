
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-[95%] mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero object-cover object-center rounded-3xl w-full mb-4 h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/St3H54F/pexels-anete-lusina-7257021.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md text-left">
                                <h1 className="mb-5 text-5xl font-bold">Discover the Creativity at ArtisanVista</h1>
                                <p className="mb-5">Handcrafted World </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero object-cover object-center rounded-3xl w-full mb-4 h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/d0GHX89/pexels-cottonbro-10607199.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl  font-bold">Discover the Creativity at ArtisanVista</h1>
                                <p className="mb-5">Handcrafted World </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero object-cover object-center rounded-3xl w-full mb-4 h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/BnTTtYV/pexels-artempodrez-6941450.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Discover the Creativity at ArtisanVista</h1>
                                <p className="mb-5">Handcrafted World </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
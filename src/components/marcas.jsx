import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// Importar estilos de Swiper
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const marcas = [
    // arr ay de logos
    { id: 1, logo: 'logo1.png' },
    { id: 2, logo: 'logo2.png' },
    { id: 3, logo: 'logo3.png' },
    { id: 4, logo: 'logo4.png' },
    { id: 5, logo: 'logo5.png' },
    { id: 6, logo: 'logo6.png' },
    { id: 7, logo: 'logo7.png' },
    { id: 8, logo: 'logo8.png' },
    { id: 9, logo: 'logo9.png' },
    { id: 10, logo: 'logo10.png' },
    { id: 11, logo: 'logo11.png' },
    { id: 12, logo: 'logo12.png' },
    { id: 13, logo: 'logo13.png' },
    { id: 14, logo: 'logo14.png' },
    { id: 15, logo: 'logo15.png' },
    { id: 16, logo: 'logo16.png' },
    { id: 17, logo: 'logo17.png' },
    { id: 18, logo: 'logo18.png' },
    { id: 19, logo: 'logo19.png' },
    { id: 20, logo: 'logo20.png' },
];

const Marcas = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={5}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1024: {
                    slidesPerView: 5,
                    slidesPerGroup: 2,
                },
            }}
        >
            {marcas.map((marca) => (
                <SwiperSlide key={marca.id}>
                    <img src={marca.logo} alt={`Logo ${marca.id}`} className="w-full h-auto" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Marcas;

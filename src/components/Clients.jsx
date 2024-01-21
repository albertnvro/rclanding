import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';






export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1024, // Ajustes para pantallas menores a 1024px
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 600, // Ajustes para pantallas menores a 600px
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480, // Ajustes para pantallas menores a 480px
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <div>
              <div className='bg-white'>
                <Slider {...settings}>
                    {/* Tus imágenes aquí */}
                  
     

                    <div><img src="./src/assets/marcas/aliexpress.svg" alt="Aliexpress" /></div>
                    <div><img src="./src/assets/marcas/allegro.svg" alt="Allegro" /></div>
                    <div><img src="./src/assets/marcas/amazon.svg" alt="Amazon" /></div>
                    <div><img src="./src/assets/marcas/carrefour-logo.svg" alt="Carrefour" /></div>
                    <div><img src="./src/assets/marcas/cdiscount.svg" alt="Cdiscount" /></div>
                    <div><img src="./src/assets/marcas/cdon.svg" alt="Cdon" /></div>
                    <div><img src="./src/assets/marcas/conforama.svg" alt="Conforama" /></div>
                    <div><img src="./src/assets/marcas/darty.svg" alt="Darty" /></div>
                    <div><img src="./src/assets/marcas/decathlon.svg" alt="Decathlon" /></div>
                    <div><img src="./src/assets/marcas/ebay-logo.svg" alt="Ebay" /></div>
                    <div><img src="./src/assets/marcas/eprice.svg" alt="Eprice" /></div>
                    <div><img src="./src/assets/marcas/facebook-logo.svg" alt="Facebook" /></div>
                    <div><img src="./src/assets/marcas/fnac.svg" alt="Fnac" /></div>
                    <div><img src="./src/assets/marcas/groupon.svg" alt="Groupon" /></div>
                    <div><img src="./src/assets/marcas/instagram-logo.svg" alt="Instagram" /></div>
                    <div><img src="./src/assets/marcas/leroy-merlin.svg" alt="Leroy Merlin" /></div>
                    <div><img src="./src/assets/marcas/kaufland.svg" alt="Kaufland" /></div>
                    <div><img src="./src/assets/marcas/mediamarkt.svg" alt="MediaMarkt" /></div>
                    <div><img src="./src/assets/marcas/pinterest-logo.svg" alt="Pinterest" /></div>
                    <div><img src="./src/assets/marcas/prestashop.svg" alt="Prestashop" /></div>
                    <div><img src="./src/assets/marcas/privalia.svg" alt="Privalia" /></div>
                    <div><img src="./src/assets/marcas/rakuten.svg" alt="Rakuten" /></div>
                    <div><img src="./src/assets/marcas/rueducommerce.svg" alt="Rueducommerce" /></div>
                    <div><img src="./src/assets/marcas/shopify-logo.svg" alt="Shopify" /></div>
                    <div><img src="./src/assets/marcas/showroomprive-es.svg" alt="Showroomprive" /></div>
                    <div><img src="./src/assets/marcas/tiktok-logo.svg" alt="TikTok" /></div>



                  
                    {/* Repite para cada imagen */}
                    {/* ... */}
                </Slider>
                </div>
            </div>
        );
    }
}

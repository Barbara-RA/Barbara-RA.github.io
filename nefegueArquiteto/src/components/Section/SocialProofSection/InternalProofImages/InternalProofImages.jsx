import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react';

import style from '../InternalProofImages/InternalProofImages.module.css'

function InternalProofImages({  images  }) {

    return (
        <div className={style.imagesProof}>
            <Swiper
                nested={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="internalSwiper"
                breakpoints={{
                    1024: {
                      centeredSlides: false, // Remover o efeito de slides centralizados no desktop
                      spaceBetween: 10, // Menor espaço entre os slides no desktop
                    },
                }}
            >     
                {images.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={url} alt="projeto" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default InternalProofImages;
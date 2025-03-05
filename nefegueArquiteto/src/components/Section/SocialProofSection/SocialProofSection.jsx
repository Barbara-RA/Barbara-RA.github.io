import { useEffect, useState } from 'react';
import { Navigation, Virtual, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react';

import ValidateText from './ValidateText/ValidateText.jsx';

import style from './SocialProofSection.module.css';
import './swiperStyle.css';
import InternalProofImages from './InternalProofImages/InternalProofImages.jsx';

function SocialProofSection() {

    const [proof, setProof] = useState([]);

    useEffect(() => {
        fetch('/socialProof/social.json')
            .then(response => response.json())
            .then(data => {
                setProof(data);
            })
            .catch(
                err => console.error(err)
            )
    }, []);

    return (
        <section className={style.proofSection} id="social-proof">
            <div className={style.proofBody}>
                <Swiper 
                    navigation={{ clickable: true }}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    pagination={{ clickable: true }}
                    className="swiperProof"
                    modules={[Navigation, Virtual]}
                >
                    {
                        proof.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={style.cardProof}>
                                    <InternalProofImages
                                        images={item.images}
                                    />
                                    <div className={style.textProof}>
                                        <h3>{item.title}</h3>
                                        <div className={style.locationProof}>
                                            <img src="/icons/map-draw.png" alt="" />
                                            <p>{item.location}</p>
                                        </div>
                                        <div className={style.descriptionProof}>
                                            <ValidateText text={item.description}/>
                                        </div>
                                    </div>
                            </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
		    </div>
        </section>
    );
}

export default SocialProofSection;
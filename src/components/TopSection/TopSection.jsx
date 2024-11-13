import classes from './TopSection.module.css'
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from '../../products';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Swiper.css";



export default function TopSection() {
    const swiper = useSwiper();
    return (
        <section className={`${classes.top}`} >
            <div className={`${classes.top__wrapper}`}>
                <h2 className={`${classes.top__title}`}>Weekly - Top NFT</h2>
                <div className="swiper__container">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={60}
                        initialSlide={0}
                        centeredSlidesBounds={true}
                        grabCursor={true}
                        centeredSlides={true}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: "true",
                        }}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1300: {
                                slidesPerView: 4,
                            },
                            1440: {
                                slidesPerView: 5,
                                loop: true,
                            },
                        }}
                        className="mySwiper" >
                        {products.map((item) => (
                            <SwiperSlide className={`${classes.top__item}`} key={item.id}>
                                <ProductCard
                                    title={item.title}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    id={item.id}
                                />
                            </SwiperSlide>
                        ))
                        }
                        <div className="arrow__wrapper">
                            <button className="swiper-button-prev arrow" onClick={() => swiper.slidePrev()}>
                            </button>
                            <svg width="4" height="27" viewBox="0 0 4 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.921875" y="0.558472" width="2.15584" height="25.8701" rx="1.07792" fill="#E6E8EC" />
                            </svg>
                            <button className="swiper-button-next arrow" onClick={() => swiper.slideNext()}>
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )

}
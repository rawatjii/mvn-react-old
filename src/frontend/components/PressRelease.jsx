import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function PressRelease({ data, slidesPerView, spaceBetween }) {
    return (
        <div className="press_release_slider">
            <Swiper
                spaceBetween={spaceBetween || 20}
                slidesPerView={slidesPerView || 3}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    // Mobile view (768px and below)
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // Tablet view (768px to 1024px)
                    768: {
                        slidesPerView: slidesPerView || 2,
                        spaceBetween: spaceBetween || 15,
                    },
                    // Desktop view (1024px and above)
                    1024: {
                        slidesPerView: slidesPerView || 3,
                        spaceBetween: spaceBetween || 20,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="thumbnail">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="pressRelease-Img"
                                style={{ width: "100%", cursor: "pointer" }}
                                onClick={() => window.open(item.pdf, "_blank")}
                            />
                            {/* <p style={{ textAlign: "center", marginTop: "10px" }}>{item.title}</p> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PressRelease;

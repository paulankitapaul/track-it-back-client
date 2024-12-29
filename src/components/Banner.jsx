import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto my-10">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-yellow-500 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Lost Something? We Can Help!</h2>
                        <p className="text-lg">
                            Report your lost items and let our community help you find them quickly.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-blue-600 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Found Something? Let Others Know!</h2>
                        <p className="text-lg">
                            Post found items and connect with their rightful owners effortlessly.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-teal-500 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Secure and Reliable</h2>
                        <p className="text-lg">
                            Ensure smooth and safe communication between users with our secure platform.
                        </p>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="w-full h-[450px] bg-purple-600 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
                        <p className="text-lg">
                            Become part of a supportive network that helps reunite people with their belongings.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

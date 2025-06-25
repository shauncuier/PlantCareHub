import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
    {
        id: 1,
        title: 'Track Your Plants with Ease',
        desc: 'Organize and care for your green companions all in one place. Monitor growth, health, and watering schedules effortlessly.',
        image: 'https://i.ibb.co/NdR0fVZh/69b6641c21b4.jpg',
    },
    {
        id: 2,
        title: 'Never Miss a Watering',
        desc: 'Smart reminders help you keep your plants happy and hydrated. Get personalized watering schedules for each plant.',
        image: 'https://i.ibb.co/60Y3Sfs7/de0d6204979f.jpg',
    },
    {
        id: 3,
        title: 'Grow Your Garden with Confidence',
        desc: 'Discover tips, track growth, and enjoy plant parenting. Access expert advice and watch your garden flourish.',
        image: 'https://i.ibb.co/60Y3Sfs7/de0d6204979f.jpg',
    },
];

const PlantSlider = () => {
    return (
        <section className="relative bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ 
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !bg-gray-400 !opacity-50',
                        bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100 !bg-green-500'
                    }}
                    navigation={true}
                    loop={true}
                    className="rounded-2xl overflow-hidden shadow-xl"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative h-[400px] md:h-[500px] w-full">
                                {/* Background Image */}
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="object-cover w-full h-full"
                                />
                                
                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <div className="text-center text-white max-w-4xl px-6">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                            {slide.title}
                                        </h2>
                                        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                            {slide.desc}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link
                                                to="/add-plant"
                                                className="inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                                            >
                                                <FaLeaf className="mr-2" />
                                                Add Your First Plant
                                            </Link>
                                            <Link
                                                to="/plants"
                                                className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30"
                                            >
                                                Explore Plants
                                                <FaArrowRight className="ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PlantSlider;

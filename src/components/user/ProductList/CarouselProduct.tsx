import { useState, useRef } from "react";
import { ICarouselProps } from "../../interface/interface";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carousel = ({ images, width, height }: ICarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            setCurrentIndex(
                currentIndex === 0 ? images.length - 1 : currentIndex - 1
            );
            carouselRef.current.scrollBy({
                left: -width,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            setCurrentIndex(
                currentIndex === images.length - 1 ? 0 : currentIndex + 1
            );
            carouselRef.current.scrollBy({
                left: width,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className={`relative flex m-auto p-1 w-[${width}rem] h-[${height}rem]`}
        >
            <div
                ref={carouselRef}
                className="flex overflow-x-hidden scroll-snap-type-x snap-start snap-mandatory"
            >
                {images.map((image: string, i: number) => (
                    <img
                        className=" h-[15rem] w-[15rem] px-3 inline-block scroll-snap-align-start"
                        alt={`Image ${i}`}
                        src={image}
                        key={i}
                    />
                ))}
            </div>
            <div className="absolute w-full top-[7rem] flex justify-between">
                <button className="text-[2rem] -ml-4 z-20" onClick={handlePrev}>
                    <BsChevronCompactLeft className="hover:scale-110 transition-all" />
                </button>
                <button className="text-[2rem] -mr-2 z-20" onClick={handleNext}>
                    <BsChevronCompactRight className="hover:scale-110 transition-all" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;

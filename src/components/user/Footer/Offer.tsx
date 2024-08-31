

const Offer = () => {
    return (
        <section className="relative cursor-default w-full h-[30rem] sm:h-[20rem] bg-white-400 border-t-8 border-b-8 border-black flex flex-col sm:flex-row justify-between">
            <div className="mt-12 sm:my-20 -ml-8 sm:ml-40 relative scale-[0.75] sm:scale-[1]">
                <span className="absolute h-36 w-36 z-0 rounded-full blur-xl bg-red-500 sm:-top-[1rem] left-[11rem]"></span>
                <span className="absolute h-0.5 w-28 z-0 -skew-y-SkewOffer bg-black -top-[0.7rem] left-[5rem]"></span>
                <span className="absolute h-0.5 w-64 z-0 -skew-y-SkewOffer bg-black -top-[0.2rem] -left-[0rem]"></span>
                <span className="absolute z-10 bg-black h-16 w-80 pr-5 -skew-y-SkewOffer flex justify-end items-center">
                    <p className="text-white text-[3.8rem] -skew-x-6">
                        Jujutsu &
                    </p>
                </span>
                <span className="absolute h-0.5 w-36 z-30 -skew-y-SkewOffer bg-black -bottom-[2.2rem] sm:bottom-[6.5rem] left-[20rem]"></span>
                <span className="absolute h-0.5 w-36 z-30 -skew-y-SkewOffer bg-black -bottom-[5.3rem] sm:bottom-[3.8rem] left-[1rem]"></span>
                <span className="absolute h-16 w-40 z-0 -skew-y-SkewOffer2 bg-red-500 top-[1.7rem] left-[10rem]"></span>
                <span className="absolute z-10 top-[3.5rem] left-[10rem] bg-black h-16 w-80 pl-5 -skew-y-SkewOffer flex justify-start items-center">
                    <p className="text-white text-[3.8rem]">Reliable</p>
                </span>
                <span className="absolute h-0.5 w-64 z-0 -skew-y-SkewOffer bg-black -bottom-[7.8rem] sm:bottom-[1.5rem] left-[14rem]"></span>
                <span className="absolute h-0.5 w-28 z-0 -skew-y-SkewOffer bg-black -bottom-[8.4rem] sm:bottom-[1rem] left-[18rem]"></span>
            </div>
            <div className="text-2xl mb-8 sm:mb-0 h-1/2 sm:h-full sm:w-96 z-20 py-5 text-center flex flex-col justify-between sm:mr-40 ">
                <span className="text-[8rem] mt-14 sm:top-0">Mesan</span>
                <p className="text-[2.5rem] mt-10 sm:top-0">
                    Are ready to help you with your needs
                </p>
            </div>
        </section>
    );
};

export default Offer;

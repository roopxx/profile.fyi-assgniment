import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { fetchPoster } from "./utils/fetch";
import ShowHideText from "./components/ShowHideText";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import PropTypes from "prop-types";

function App({ isLoading }) {
  const [homePageImages, setHomePageImages] = useState([]);

  useEffect(() => {
    fetchPoster().then((data) => setHomePageImages(data.home));
  }, []);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mx-4 mb-10 md:mx-10">
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="mt-8 space-y-5 md:mt-12 md:space-y-10">
              <h1 className="text-center text-3xl md:text-6xl">
                Welcome to <span className="font-bold text-red-700">Wall</span>
                <span className="font-bold">Wonder</span>.
                <p>Your Ultimate Poster Paradise!</p>
              </h1>
              <p className="text-center text-2xl md:text-3xl">
                Are you pondering over how to infuse life into your room&apos;s
                walls and transform them from mundane to marvelous?
              </p>
              <p className="text-center text-2xl md:text-3xl">
                Look no further! We are your premier destination for top-notch
                posters featuring your beloved anime, Marvel, DC, and much more.
                With our meticulously curated selection, your walls will radiate
                vibrance like never before!
              </p>
            </div>
            <div className="masonry-md md:masonry mt-12 space-y-2">
              {homePageImages.map((image) => (
                <img
                  className="border-2 border-double border-black p-0.5"
                  key={image.alt}
                  src={image.path}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 space-y-5 md:-mt-8 md:space-y-10">
            <h1 className="text-left text-3xl leading-snug md:text-6xl">
              <span className="text-red-700 underline underline-offset-4">
                Wondering what we offer?
              </span>
              <br />
              Here&apos;s what we bring to your walls!
            </h1>
            <div className="flex flex-col items-start gap-5">
              <ShowHideText
                heading={"Unleash Your Walls' Superpowers!"}
                para={
                  "Embark on a journey through imagination with our vast collection of posters. Whether you're a die-hard anime fan, a Marvel enthusiast, or a dedicated DC follower, we have something that will enchant your senses and transform your space."
                }
              />
              <ShowHideText
                heading={"Explore Boundless Worlds"}
                para={
                  "Immerse yourself in a universe teeming with iconic characters, stunning landscapes, and captivating artwork. From the depths of Gotham City to the expansive anime multiverse, there's a poster ready to infuse life into your walls."
                }
              />
              <ShowHideText
                heading={"Elevate Your Space"}
                para={
                  "Let your style and passions shine with every glance. Elevate your room, office, or sanctuary with posters that convey volumes without saying a word. Transform your walls into the canvas of your imagination."
                }
              />
              <ShowHideText
                heading={"Dive into Awesomeness"}
                para={
                  "Embark on an exhilarating journey of discovery and excitement. With fresh arrivals and timeless classics, there's always something new and captivating waiting for you to explore."
                }
              />
            </div>
            <p className="text-center text-2xl md:text-5xl">
              So, what are you waiting for? Let&apos;s dive in!
              <br />
              <Link
                to="store"
                className="group relative mt-4 inline-block text-lg"
              >
                <span className="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
                  <span className="absolute inset-0 size-full rounded-lg bg-gray-50 px-5 py-3"></span>
                  <span className="ease absolute left-0 -ml-2 size-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
                  <span className="relative">SHOP NOW!</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoading: PropTypes.bool,
};

export default App;

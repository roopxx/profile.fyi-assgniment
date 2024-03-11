import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div className="mx-20">
        <div className="mt-12 space-y-10">
          <h1 className="text-center text-6xl">
            About <span className="font-bold text-red-700">Wall</span>
            <span className="font-bold">Wonder</span>.
          </h1>
          <p className="text-center text-4xl">
            At Wall Wonder, we are passionate about helping you transform your
            living spaces into vibrant, captivating environments.
          </p>
          <p className="text-center text-4xl">
            Our journey began with a simple idea: to provide an extensive
            collection of high-quality posters that cater to diverse tastes and
            preferences.
          </p>
          <p className="text-center text-4xl">
            We believe that every wall has the potential to tell a story and
            evoke emotions. Whether you&apos;re a fan of anime, comics, or
            classic art, we offer a curated selection of posters that speak to
            your passions.
          </p>
          <p className="text-center text-4xl">
            We are dedicated to ensuring that your experience with Wall Wonder
            is nothing short of exceptional. From browsing our catalog to
            receiving your order, we strive for excellence every step of the
            way.
          </p>
          <p className="text-center text-4xl">
            Thank you for choosing Wall Wonder as your ultimate destination for
            poster paradise. We look forward to helping you turn your walls into
            works of art!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

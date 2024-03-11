import NavBar from "./NavBar";

function Contact() {
  return (
    <>
      <NavBar />
      <div className="mx-20">
        <div className="mt-12 space-y-8">
          <h1 className="text-center text-6xl">Get in Touch</h1>
          <p className="text-center text-4xl">
            We&apos;re here to assist you in any way we can. Whether you have a
            question, feedback, or just want to say hello, we&apos;d love to
            hear from you!
          </p>
          <p className="text-left text-4xl">
            You can reach out to us through any of the following channels:
          </p>
          <div className="space-y-9">
            <div className="flex flex-col gap-2 text-4xl">
              <h2>Email :</h2>
              <p>
                Feel free to drop us an email at
                <a href="mailto:info@wallwonder.com"> info@wallwonder.com</a>.
                We&apos;ll get back to you as soon as possible!
              </p>
            </div>
            <div className="flex flex-col gap-2 text-4xl">
              <h2>Phone :</h2>
              <p>
                Prefer to chat? Give us a call at
                <a href="tel:+1234567890"> +1 (234) 567-890</a>. Our friendly
                team is ready to assist you.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-left text-4xl">
              Our dedicated customer support team is available to assist you
              from Monday to Friday, 9:00 AM to 5:00 PM (IST). We strive to
              respond to all inquiries promptly and efficiently.
            </p>
            <p className="text-left text-4xl">
              For questions about your order, shipping status, or returns,
              please have your order number handy to help us assist you more
              effectively.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

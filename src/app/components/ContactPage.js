import Link from "next/link";

const ContactPage = () => {
  return (
    <div
      className="lg:container flex flex-col min-h-screen justify-center lg:p-16 md:p-8 animate-hidden z-10"
      id="contact-section"
    >
      <h1 className="font-bold md:text-6xl text-4xl my-4">contact me</h1>
      <Link
        href="https://web.facebook.com/mirimomekiku"
        className="text-xl lg:text-2xl duration-500 delay-0 hover:text-blue-500"
      >
        Facebook ↗
      </Link>
      <Link
        href="https://github.com/dlord213"
        className="text-xl lg:text-2xl duration-500 delay-0 hover:text-slate-500"
      >
        GitHub ↗
      </Link>
      <Link
        href="https://www.instagram.com/tsukeh2" 
        className="text-xl lg:text-2xl duration-500 delay-0 hover:text-red-500"
      >
        Instagram ↗
      </Link>
      <h1 className="my-4">viernes.jhonlloydd@gmail.com</h1>
    </div>
  );
};

export default ContactPage;

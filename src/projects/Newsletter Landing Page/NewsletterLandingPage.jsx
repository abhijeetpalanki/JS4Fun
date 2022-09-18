import React from "react";
import bg from "./assets/bg.jpg";

const NewsletterLandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <main className="container flex-1 px-6 pt-16 mx-auto text-center">
        <h2 className="text-2xl uppercase md:text-4xl lg:text-6xl">
          Welcome to
        </h2>

        <h1 className="mb-8 text-3xl font-black uppercase md:text-6xl lg:text-8xl">
          Projects for fun
        </h1>

        <div className="px-4 py-2 mx-auto mb-8 text-lg bg-white rounded-full md:text-2xl lg:text-3xl md:py-4 md:px-10 lg:py-6 lg:px-12 bg-opacity-10 w-fit">
          942,243 members
        </div>

        <form
          action="https://www.getrevue.co/profile/ajpalanki/add_subscriber"
          method="post"
          target="_blank"
        >
          <div className="flex flex-col justify-center mb-4 md:flex-row">
            <input
              placeholder="E.g. example@example.com"
              type="email"
              name="member[email]"
              className="px-6 py-4 mb-4 text-lg duration-150 bg-white rounded-full outline-none md:text-2xl placeholder:text-gray-400 placeholder:italic md:px-10 lg:px-12 bg-opacity-10 focus:bg-opacity-20 md:rounded-tr-none md:rounded-br-none md:mb-0"
            />
            <input
              type="submit"
              value="Join today"
              name="member[subscribe]"
              className="px-6 py-4 text-lg duration-150 rounded-full cursor-pointer bg-[#ff7088] md:rounded-tl-none md:rounded-bl-none md:text-2xl hover:opacity-75 md:px-10 lg:py-6 lg:px-12"
            />
          </div>

          <div className="italic opacity-75">
            By subscribing, you agree with Revue's{" "}
            <a
              target="_blank"
              href="https://www.getrevue.co/terms"
              className="duration-150 hover:opacity-80"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://www.getrevue.co/privacy"
              className="duration-150 hover:opacity-80"
            >
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>

      <footer className="container flex flex-col items-center justify-between p-6 mx-auto md:flex-row">
        <p>Newsletter Landing Page</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 duration-150 hover:opacity-80">
            About Us
          </a>{" "}
          |
          <a href="#" className="mx-3 duration-150 hover:opacity-80">
            Privacy
          </a>{" "}
          |
          <a href="#" className="mx-3 duration-150 hover:opacity-80">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NewsletterLandingPage;

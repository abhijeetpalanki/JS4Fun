import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ContactUsForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.success("Your message submitted successfully!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setValues({
      fullName: "",
      email: "",
      role: "",
      message: "",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:h-2/3">
        <div className="flex flex-col justify-center text-center lg:p-20 md:text-left">
          <p className="font-medium text-gray-800 uppercase opacity-40">
            Contact Us
          </p>
          <h1 className="text-4xl lg:text-6xl md:text-5xl">
            Let's talk about you
          </h1>
        </div>

        {/* Form */}
        <div className="p-5 pt-6 pb-4 bg-white rounded shadow-xl lg:mt-16 lg:mr-28">
          <form onSubmit={handleSubmit}>
            <h3 className="text-xl font-semibold text-gray-700 mb-7">
              Send us a message
            </h3>
            <div className="mb-5">
              <label className="text-sm text-gray-500" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                className="w-full h-10 px-2 text-gray-700 bg-gray-100 border-b-2 outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-5">
              <label className="text-sm text-gray-500" htmlFor="email">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full h-10 px-2 text-gray-700 bg-gray-100 border-b-2 outline-none"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="role" className="text-sm text-gray-800">
                Role
              </label>
              <select
                onChange={handleChange}
                defaultValue="role"
                name="role"
                className="w-full py-2 text-gray-800 border-b-2 outline-none"
              >
                <option value="role" disabled>
                  Choose Role
                </option>
                <option value="frontend" className="py-1">
                  Front End
                </option>
                <option value="backend" className="py-1">
                  Back End
                </option>
                <option value="qa" className="py-1">
                  QA
                </option>
              </select>
            </div>
            <div className="mb-5">
              <label className="text-sm text-gray-500" htmlFor="message">
                Your message here
              </label>
              <textarea
                value={values.message}
                onChange={handleChange}
                name="message"
                rows="4"
                className="w-full p-2 bg-gray-100 border-b-2 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-gray-200 bg-gray-900 rounded hover:bg-gray-700 focus:outline-none"
            >
              Send <FaChevronRight className="float-right w-6 mt-1 ml-2" />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactUsForm;

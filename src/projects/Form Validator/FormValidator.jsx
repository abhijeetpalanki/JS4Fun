import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";

const FormValidator = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
  });

  const handleForm = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    const isValid = await schema.isValid(formData);

    if (isValid) {
      toast.success("Form data successfully submitted!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error(
        "Form data has validation errors! Please correct them and try again.",
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleForm}
        className="flex flex-col items-center justify-center bg-white rounded shadow-md w-96 h-80"
      >
        <input
          type="text"
          placeholder="Name..."
          className="h-10 p-2 mb-5 border outline-none focus:border-green-500 w-60"
        />
        <input
          type="text"
          placeholder="example@email.com"
          className="h-10 p-2 mb-5 border outline-none focus:border-green-500 w-60"
        />
        <input
          type="text"
          placeholder="password123"
          className="h-10 p-2 mb-5 border outline-none focus:border-green-500 w-60"
        />
        <input
          type="submit"
          className="p-2 text-white scale-100 bg-black rounded cursor-pointer active:scale-95"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormValidator;

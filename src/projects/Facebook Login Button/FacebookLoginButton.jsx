import { useState } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookLoginButton = () => {
  const [details, setDetails] = useState({
    isLogged: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  });

  const componentClicked = () => {
    console.log("clicked");
  };

  const responseFacebook = (response) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      isLogged: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="uppercase text-xl font-['Oswald'] my-3">
        {details.isLogged
          ? "User Details"
          : "To get started, authenticate with Facebook."}
      </p>
      {details.isLogged ? (
        <div className="w-[400px] bg-[#f4f4f4] p-5 flex flex-col justify-center items-center">
          <img src={details.picture} alt={details.name} />
          <h2 className="text-xl font-bold">Welcome, {details.name}</h2>
          Email: {details.email}
        </div>
      ) : (
        <FacebookLogin
          appId="2232897926893714"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      )}
    </div>
  );
};

export default FacebookLoginButton;

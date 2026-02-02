import { GoogleLogin } from "google-login-react";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleLoginButton = () => {
  const [details, setDetails] = useState(null);
  const [isError, setIsError] = useState(false);

  const onSuccess = (response) => {
    console.log("LOGIN SUCCESS! Current User: ", response.name);
    setDetails(response);
  };

  const onFailure = (response) => {
    console.log("LOGIN FAILED! response: ", response);
    setIsError(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      >
        <div className="flex items-center justify-center gap-2 p-4 shadow-md cursor-pointer">
          <FaGoogle />
          {details !== null ? <span> </span> : <span> Login with Google</span>}
        </div>
      </GoogleLogin>

      <div className="flex flex-col items-center justify-center p-4 mt-4 shadow-md">
        {isError ? (
          <div className="flex">LOGIN FAILED!</div>
        ) : details !== null ? (
          <div className="flex flex-col items-center justify-center text-black">
            <h3>{details.name}</h3>
            <p>{details.email}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-white">
            <h2 className="w-full text-center">User Not Found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleLoginButton;

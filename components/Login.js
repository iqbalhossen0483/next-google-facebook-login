import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const Login = () => {
  const clientId =
    "484793000620-9o79p0cmhru9kucma8ri67hkd3h3i0mm.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        apiKey: "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",
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={(response) => console.log(response)}
        onFailure={(response) => console.log(response)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;

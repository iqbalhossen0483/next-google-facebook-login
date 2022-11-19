import dynamic from "next/dynamic";
import React from "react";
import FacebookLogin from "react-facebook-login";
const Login = dynamic(() => import("../components/Login"), { ssr: false });

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <Login />
      <FacebookLogin
        appId='438654467748573'
        fields='name,email,picture'
        onClick={(response) => console.log(response)}
        callback={(response) => console.log(response)}
        icon='fa-facebook'
        cssClass='facebook'
        textButton='Facebook'
      />
    </div>
  );
};

export default Home;

import React from "react";
import User from "../../components/User";

const authIndexPage = (props) => {
  return (
    <div>
      <h1>The auth page</h1>
      <h4>App name: {props.appName}</h4>
      <User name="Kunj" age={28} />
    </div>
  );
};

authIndexPage.getInitialProps = (context) => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ appName: "Kunjapp" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;

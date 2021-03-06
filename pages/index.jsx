import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

export default class IndexPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Kunjapp" });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <div>
        <h1>The main page {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
          <button onClick={() => Router.push("/auth")}>Go to auth</button>
        </p>
      </div>
    );
  }
}

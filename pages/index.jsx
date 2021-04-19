import React from "react";
import Link from "next/link";
import Router from "next/router";

export default function index() {
  return (
    <div>
      <h1>The main page</h1>
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

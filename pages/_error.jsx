import React from "react";
import Link from "next/link";

export default function errorPage() {
  return (
    <div>
      <h1>Blah blah something fishy</h1>
      <p>
        Go to
        <Link href="/">
          <a>home page</a>
        </Link>
      </p>
    </div>
  );
}

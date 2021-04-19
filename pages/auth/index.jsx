import React from "react";
import User from "../../components/User";

export default function authIndexPage() {
  return (
    <div>
      <h1>The auth page</h1>
      <User name="Kunj" age={28} />
    </div>
  );
}

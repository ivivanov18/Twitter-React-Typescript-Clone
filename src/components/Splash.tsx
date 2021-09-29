import React from "react";

export default function Splash() {
  return (
    <div
      className="splash"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img alt="logo" src="img/twitter-splash.png" width={75} height={75} />
    </div>
  );
}

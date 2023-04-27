import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      This is error page you can go to homepage by
      <Link to="/">clicking here</Link>
    </div>
  );
};

export default ErrorPage;

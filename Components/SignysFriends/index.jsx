import React from "react";
import Title from "../Title";
import SignysFriendsSlider from "./SignysFriendsSlider";

const SignysFriends = ({ title }) => {
  return (
    <div className="container mx-auto">
      <Title title={title} />
      <div className="px-4 py-5">
        <SignysFriendsSlider />
      </div>
    </div>
  );
};

export default SignysFriends;
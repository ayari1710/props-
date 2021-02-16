import React, { Children } from "react";
import PropsTypes from "prop-types";
const Profile = (props) => {
  return (
    <div className=" second">
              <button onClick={() => props.handleName(props.name)}>bienvenue</button>

      <h1 >Le Profile</h1>
      {props.children}
      <h2>{props.name}</h2>
      <h2>{props.bio}</h2>
      <h2>{props.profession}</h2>
    </div>
  );
};
Profile.defaultProps = {
  name: "rien ",
  bio: "rien ",
  profession: "rien",
};
Profile.PropsTypes = {
  name: PropsTypes.string,
};

export default Profile;

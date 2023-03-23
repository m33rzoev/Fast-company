import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import UserCard from "../../ui/userCard";
import QualitiesCard from "../../ui/qualitiesCard";
import MeetingsCard from "../../ui/meetingsCard";
import Comments from "../../ui/comments";

const UserPage = ({ userId }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  if (user) {
    return (
      // <div>
      //     <h1> {user.name}</h1>
      //     <h2>Профессия: {user.profession.name}</h2>
      //     <Qualities qualities={user.qualities} />
      //     <p>completedMeetings: {user.completedMeetings}</p>
      //     <h2>Rate: {user.rate}</h2>
      //     <button onClick={handleClick}>Изменить</button>
      // </div>
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard user={user} />
            <MeetingsCard value={user.completedMeetings} />
          </div>

          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
};

UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default UserPage;

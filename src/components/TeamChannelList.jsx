import React from "react";

import { AddChannel } from "../assets/AddChannel";

const TeamChannelList = ({
  children,
  error = false,
  loading,
  type,
  isCreating,
  setIsCreating,
  setCreateType,
  setIsEditing,
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection Error, please wait a moment and try again.
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"}
          loading...
        </p>
      </div>
    );
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {/*If the channel is of type team then add the channel to channels dashboard otherwise 
          send a direct message */}
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        {/*A Button to add a channel */}
        <AddChannel
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
          type={type === "team" ? "team" : "messaging"}
        />
      </div>
      {/*Everything thats past down to our teamchannellist will render below*/}
      {children}
    </div>
  );
};

export default TeamChannelList;

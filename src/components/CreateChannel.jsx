import React from "react";
import { useChatContext } from "stream-chat-react";
import { userList } from "./";
import { CloseCreateChannel } from "../assets/CloseCreateChannel";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const handleChange = (event) => {
    event.preventDefault();

    setChannelName(event.target.value);
  };

  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        value={channelName}
        placeholder="channel-name"
        onChange={handleChange}
      />
      <p>Add members</p>
    </div>
  );
};

function CreateChannel() {
  return <div className="create-channel__container"></div>;
}

export default CreateChannel;

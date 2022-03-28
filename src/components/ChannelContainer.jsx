import React from "react";
import { Channel, MessageTeam } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel } from "./";

//Destructure the props
const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  //get information about a  specfic channel
  //const { channel } = useChatContext();

  //Then we need to know are we creating that specific channel
  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }
  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  //This happens when we create a channel and there are no messages yet

  const EmptyState = () => {
    return (
      <div className="channel-empty__container">
        <p className="channel-empty__first">
          This is the beginning of your chat history.
        </p>
        <p className="channel-empty__second">
          Send messages, attachments, links, emojis and more!
        </p>
      </div>
    );
  };

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageTeam key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;

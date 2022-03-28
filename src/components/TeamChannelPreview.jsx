import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

function TeamChannelPreview({
  channel,
  type,
  setToogleContainer,
  setIsEditing,
  setIsCreating,
  setActiveChannel,
}) {
  const { activeChannel, client } = useChatContext();

  const ChannelPreview = () => (
    <p className="channel-preview__item">
      #{channel?.data?.name || channel?.data?.id}
    </p>
  );

  const DirectPreview = () => {
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user.image}
          name={members[0]?.user.fullName}
        />
        <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        //console.log(channel);
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);

        //This Toggle feature allows the ability to switch between channels in Mobile application platform
        if (setToogleContainer) {
          setToogleContainer((prev) => !prev);
        }
      }}
    >
      {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
}

export default TeamChannelPreview;

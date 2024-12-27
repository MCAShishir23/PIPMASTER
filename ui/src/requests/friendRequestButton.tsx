import { useState } from "react";

const FriendRequestButton = ({ userId, handleSendRequest }: any) => {
  const [requested, setRequested] = useState(false);

  const sendRequest = () => {
    handleSendRequest(userId);
    setRequested(true);
  };

  return (
    <button onClick={sendRequest} disabled={requested}>
      {requested ? "Request Sent" : "Add Friend"}
    </button>
  );
};

export default FriendRequestButton;

import FriendRequestButton from "./friendRequestButton";

const FriendsList = ({ friends, handleSendRequest }: any) => {
  return (
    <div>
      <h2>Friends</h2>
      {friends.map((friend: any) => (
        <div key={friend.id}>
          <span>{friend.name}</span>
          <FriendRequestButton
            userId={friend.id}
            handleSendRequest={handleSendRequest}
          />
        </div>
      ))}
    </div>
  );
};

export default FriendsList;

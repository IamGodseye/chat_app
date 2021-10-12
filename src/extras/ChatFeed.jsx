import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";
import Header from "./Header";
const ChatFeed = (props) => {
  // console.log(props);
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipts"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  //renderMessages();
  if (!chat) return "Loading.....";
  return (
    <>
      <Header />
      <div className="chat-feed" style={{ height: "90vh" }}>
        <div className="chat-title-container">
          {/*? in chat?.title will ensure that we have chat before accessing title
        of it else use if(!chat) before*/}

          <div className="chat-title">
            <h2>{chat?.title}</h2>
          </div>
          <div className="chat-subtitle">
            {chat.people.map((person) => `| ${person.person.username} | `)}
          </div>
        </div>
        {renderMessages()}
        <div style={{ height: "100px" }} />
        <div className="message-form-container">
          <MessageForm {...props} chatID={activeChat} />
        </div>
      </div>
    </>
  );
};

export default ChatFeed;

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image mine-img"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message mine"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
      }}
    >
      {message.text}
    </div>
  );
};
export default MyMessage;

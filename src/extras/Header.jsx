const handleSubmit = () => {
  localStorage.clear();
  window.location.href = "/";
};
const Header = () => {
  return (
    <div
      style={{
        background: "#202040",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleSubmit}
        className="logout"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span>
          <b> Logout </b>
        </span>
      </button>
    </div>
  );
};

export default Header;

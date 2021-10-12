import { useState } from "react";
import axios from "axios";
import Api from "./Api.js";
const Signup = () => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [firstname, Setfirstname] = useState("");
  const [lastname, Setlastname] = useState("");
  const [error, SetError] = useState("");
  console.log(process.env);
  // {
  //   //console.log(process.env.REACT_APP_API_KEY);
  //   var config = {
  //     method: "post",
  //     url: "https://api.chatengine.io/users/",
  //     headers: {
  //       'PRIVATE-KEY: Api',
  //     },
  //     data: autho,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">React-Chat-App</h1>
        <form>
          <input
            type="text"
            value={username}
            onChange={(event) => SetUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => SetPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <input
            type="text"
            value={firstname}
            onChange={(event) => Setfirstname(event.target.value)}
            className="input"
            placeholder="firstname"
            required
          />
          <input
            type="text"
            value={lastname}
            onChange={(event) => Setlastname(event.target.value)}
            className="input"
            placeholder="lastname"
            required
          />
          <div align="center">
            <button type="submit" className="glow-on-hover">
              <span> Register kar lo boi </span>
            </button>
          </div>
          <h3 className="error"> {error} </h3>
        </form>
      </div>
    </div>
  );
};
export default Signup;

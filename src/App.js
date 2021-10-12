import "./App.css";
//import ChatFeed from "./components/ChatFeed";
//import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import Chats from "./components/Chats";
import LoginForm from "./components/LoginForm";

const App = () => {
  // if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <>
      <div style={{ fontFamily: "Avenir" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/chats" component={Chats} />
              <Route path="/" component={LoginForm} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      {/* <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      /> */}
    </>
  );
};

export default App;

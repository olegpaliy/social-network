import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./componets/Dialogs/Dialogs";
import Header from "./componets/Header/Header";
import Navbar from "./componets/Navbar/Navbar";
import News from "./componets/News/News";
import Profile from "./componets/Profile/Profile";

const App = (props) => {

 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
          <Route path="/profile" render={() => <Profile posts={props.posts}/>} />
          <Route path="/news" render={() => <News />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

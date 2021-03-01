import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import NewPost from "./components/newPost";
import PostDetails from "./components/postDetails";
import DeletedPost from "./components/deletedPost";
import EditPost from "./components/editPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/newPost">
            <Navbar />
            <NewPost />
          </Route>
          <Route path="/editPost/:id" exact component={EditPost}>
            <Navbar />
            <EditPost />
          </Route>
          <Route path="/postDetails/:id" exact component={PostDetails}>
            <Navbar />
            <PostDetails />
          </Route>
          <Route path="/deletedPost/:id" exact component={DeletedPost}>
            <Navbar />
            <DeletedPost />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
      ;
    </Router>
  );
}

export default App;

import "./App.css";

const App = () => {
  return (
    <div className="Home">
      <div className="Navbar">
        <a href="/">
          <img className="logo" src={"tiktoklogo"} alt="TikTok" />
        </a>
        <div className="searchInputs">
          <input
            className="searchBar"
            type="text"
            placeholder="Search Accounts"
          ></input>
        </div>
        <div className="buttons">
          <input
            className="uploadButton"
            type="Button"
            value="+ Upload"
          ></input>

          <input className="loginButton" type="Button" value="Log in"></input>
        </div>
      </div>{" "}
      <div className="main">
        <div className="sideBar">
          <div className="topBar">
            <div className="topBarItems" id="fyp">
              <h2>For You</h2>
            </div>
            <div className="topBarItems">
              <h2>Following</h2>
            </div>
            <div className="topBarItems">
              <h2>LIVE</h2>
            </div>
          </div>
          <p>Popular Topics</p>
          <div className="bottomBar">
            <div className="bottomBarItems">
              <h3>Comedy</h3>
            </div>
            <div className="bottomBarItems">
              <h3>Gaming</h3>
            </div>
            <div className="bottomBarItems">
              <h3>Food</h3>
            </div>
            <div className="bottomBarItems">
              <h3>Dance</h3>
            </div>
            <div className="bottomBarItems">
              <h3>Beauty</h3>
            </div>
            <div className="bottomBarItems">
              <h3>Animals</h3>
            </div>
            <div className="bottomBarItems">
              <h3>Sports</h3>
            </div>
          </div>
        </div>
        <div className="feed">
          <div className="app_videos"></div>
        </div>
      </div>
    </div>
  );
};

export default App;

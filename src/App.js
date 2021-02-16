import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const name = "Ayari Mohamed rafik ";
  const bio = "Nee le 17/10/1993 et habite a carthage bysra ";
  const profession = "Pilot ";

  const handleName = (x) => {
    alert(`welcome ${x}`);
  };
  return (
    <div className="first">
      <Profile
        name={name}
        bio={bio}
        profession={profession}
        handleName={handleName}
      >
        <img src="./rafik.jpg" alt="" />
      </Profile>
    </div>
  );
}

export default App;

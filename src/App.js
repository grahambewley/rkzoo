import rambleman from './ramble-man.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={rambleman} className="ramble-man" alt="logo" />
      </div>
      <div className="content-wrapper">
        <p>Hi, I'm <a href="https://www.instagram.com/graham.bewley">Graham</a> 👋</p>
        <p>The Ramble is a new group bike ride that I'm organizing, kicking off in <strong>Spring of 2024</strong>.</p>
        <p>We won't be smashing PRs, shred singletrack, or really getting anywhere too fast. Each week will be a bit different, but routes will typically be <strong>15-20 miles</strong> in length, <strong>exploring unique terrain</strong> and <strong>avoiding busy roads</strong> wherever possible.</p>
        <p>If you're interested in coming along, click here to join The Ramble Strava club.</p>
      </div>
    </div>
  );
}

export default App;

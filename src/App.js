import rambleman from './ramble-man.png';
import './App.css';
import styled from 'styled-components';

const StravaButton = styled.a`

  background: #FC4C02;
  color: white;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  padding: 1rem 1.75rem;
  margin: 1rem 0;
  transition: all 200ms ease-in-out;
  
  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }
`;

function App() {
  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={rambleman} className="ramble-man" alt="logo" />
      </div>

      

      <div className="content-wrapper">
        
        <div className="button-wrapper">
          <StravaButton href="https://www.strava.com/clubs/ramblekzoo">Join Strava Club</StravaButton>
        </div>
        <h2>What is this?</h2>

        <p>Hi, I'm <a href="https://www.instagram.com/graham.bewley">Graham</a> 👋</p>
        <p>The Ramble is a new group bike ride that I'm organizing, kicking off in <strong>Spring of 2024</strong>.</p>
        <p>We won't be smashing PRs, shredding singletrack, or really getting anywhere too fast. Each week will be a bit different, but routes will typically be 15-20 miles in length, getting off the beaten path and exploring unique terrain whenever possible.</p>
        <p>If you're interested in coming along, join The Ramble Strava club or <a href="https://www.instagram.com/graham.bewley">follow me on Instagram</a>. More details will be shared as the season of warmth approaches and routes are finalized. Looking forward to rambling with you!</p>
        
      </div>
    </div>
  );
}

export default App;

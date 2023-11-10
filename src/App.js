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

const SignupForm = styled.form`
  background: #f9f6f2;
  padding: 1rem;
  margin: 4rem 0;
  position: relative;

  label {
    margin-bottom: 6px;
    margin-left: 4px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: .8rem;
    color: #666;
  }
  input {
    padding: .5rem;
    width: 100%;
    font-size: 24px;
    margin-bottom: .5rem;
  }
  p {
    font-size: .75rem;
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

        <SignupForm name="signup" netlify>
          <label for="email">Sign up for email alerts</label>
          <input type="hidden" name="form-name" value="signup" />
          <input type="email" name="email" placeholder="Email"/>
          <p><i>* I'm just one guy in Kalamazoo, this is a secure form. Your email will only be added to a private mailing list, and will not be shared.</i></p>
          <button type="submit">Send</button>
        </SignupForm>

        <h2>What is this?</h2>
        <p><i>The Ramble</i> is a new group bike ride kicking off in Kalamazoo in the <strong>Spring of 2024</strong>.</p>
        
        <h2>What kind of ride?</h2>
        <p>At it's core, this is just a bike ride with some friends you haven't met yet.</p>
        <p>We won't be smashing PRs, shredding singletrack, or really getting anywhere too fast. Each week will be a bit different, but routes will typically be 15-20 miles in length, getting off the beaten path and exploring unique terrain whenever possible.</p>

        <h2>What sort of bike do I need?</h2>
        <p>The spirit of <i>The Ramble</i> is that there are no real rules. If your bike can carry you the distance of the ride, and you enjoy riding it, you're on the right bike. We like steel frames, old mountain bikes, dusty garage klunkers, whatever.</p>
        <p>For context, I'll be riding a steel gravel/touring bike, but might switch to my 90's Hardrock basket bike from time to time. Baskets are cool.</p>
        <p>Finally, I'm definitely not a <i>lycra</i> guy, and is definitely not a <i>lycra</i> type of ride. Come as you are.</p>

        <h2>How do I get involved?</h2>
        <p>If you're on Strava, hit the button above to join <a href="https://www.strava.com/clubs/ramblekzoo">The Ramble Strava club</a>. Events will be created and routes will be shared here.</p>
        <p>Otherwise, you can add your email to the mailing list by submitting the form above. When events are created and routes are shared, I'll be sure to send them out via email as well.</p>

        <h2>Whose idea was this?</h2>
        <p>👋 Hi I'm Graham, I'm a metro Detroit native, but have called Kalamazoo home for the last 3 years. <i>The Ramble</i> represents the sort of rides that I most enjoy going on with friends back home</p>
        <p>If you'd like, you can <a href="https://www.instagram.com/graham.bewley">follow me on Instagram</a>, where I'll be sharing more details as the season of warmth approaches and routes are finalized.</p>
        <p>Looking forward to rambling with you!</p>
      </div>
    </div>
  );
}

export default App;

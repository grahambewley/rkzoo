import rambleman from './ramble-man.png';
import feathertwo from './feather2.png';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

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

const FormWrapper = styled.div`
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
  .helper-text {
    font-size: .75rem;
  }
  .thanks-text {
    margin-bottom: 0;
  }
`;

function App() {

  const [showFormSuccess, setShowFormSuccess] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submitted dat boi");
    setShowFormSuccess(true);
  }

  return (
    <div className="container">
      <div className="image-wrapper">
        <img src={rambleman} className="ramble-man" alt="logo" />
      </div>

      <div className="content-wrapper">
        
        <div className="button-wrapper">
          <StravaButton href="https://www.strava.com/clubs/ramblekzoo">Join Strava Club</StravaButton>
        </div>

        <FormWrapper>
          <form name="signup">
            <input type="hidden" name="form-name" value="signup" />
            <label htmlFor="email">Sign up for email alerts</label>
            
            { showFormSuccess ? <>
                <p className="thanks-text">Thanks for signing up! I'll reach out via email when there are more details to share</p>
              </> : <>
                
                <input type="email" name="email" placeholder="Email"/>
                <p className="helper-text"><i>* I'm just one guy in Kalamazoo, and this is a secure form. Your email address will be added to a private mailing list, and will not be shared.</i></p>
                <button type="submit">Send</button> 
              </>
            }
          </form>
        </FormWrapper>

        <h2>What is this?</h2>
        <p><i>The Ramble</i> is a group bike ride kicking off in Kalamazoo in the <strong>Spring of 2024</strong>.</p>
        
        <h2>What kind of ride?</h2>
        <p>At it's core, <i>The Ramble</i> is just a bike ride with some friends you haven't met yet.</p>
        <p>We won't be smashing PRs, shredding singletrack, or really getting anywhere too fast.</p>
        <p>Routes will typically be 15-20 miles in length, getting off the beaten path and exploring unique terrain whenever possible.</p>
        <p>Meet up, go for a ride, and finish with some refreshments. Simple.</p>

        <h2>What sort of bike do I need?</h2>
        <p>The spirit of <i>The Ramble</i> is that there are no real rules. If your bike can carry you the distance of the ride, and you enjoy riding it, then you're on the right bike.</p>
        <p>We like steel frames, old mountain bikes, gravel bikes, dusty garage klunkers, <i>whatever</i>.</p>
        <p>Finally, I'm definitely not a <i>lycra</i> guy, and this is certainly not a <i>lycra</i> type of ride. Come as you are.</p>

        <h2>How do I get involved?</h2>
        <p>If you're on Strava, hit the button above to join <a href="https://www.strava.com/clubs/ramblekzoo">The Ramble Strava club</a>. Events will be created and routes will be shared here.</p>
        <p>You can also add your email to the mailing list by submitting the form above. In case you're not a Strava user, I'll be sure to send out links to events and routes via email as well.</p>

        <h2>Whose idea was this?</h2>
        <p>Hi, I'm Graham 👋</p>
        <p>I'm a metro Detroit native, but have called Kalamazoo home for the last 3 years. <i>The Ramble</i> represents the sort of rides that I most enjoy going on with friends back home.</p>
        <p>If you'd like, you can <a href="https://www.instagram.com/graham.bewley">follow me on Instagram</a>, where I'll be sharing more details as the season of warmth approaches and routes are finalized.</p>
        <p>Looking forward to rambling with you!</p>
      </div>
      {/* <img src={featherone} className="feather-image" alt="feather"/> */}
      <img src={feathertwo} className="feather-image" alt="feather"/>
      
    </div>
  );
}

export default App;

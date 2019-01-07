
import React, { Component } from 'react';
import profileimg from './Blank-profile.png';
import './App.css';

function ContactCard(props) {
  return (
  <div className="ContactCard">
    <header className="cc-header">
      <img src={profileimg} className="cc-profile" alt="profile image" />
      <span className="cc-name">{props.name}</span>
      <div className="contact-info">
        <div className="contact-l">
          <p>number:</p>
          <p>email:</p>
        </div>
        <div className="contact-r">
          <p>{props.number}</p>
          <p>{props.email}</p>
        </div>
      </div>

    </header>
  </div>
  );
}
function App() {
  return (
    <div>
      <ContactCard name="David" number="431-765-8192" email="ullauridavid@gmail.com" />
      <ContactCard name="Sara" number="932-725-2356" email="sara@email.com" />
      <ContactCard name="Carlos" number="676-324-7361" email="carlos@email.com" />
    </div>
  );
}

export default App;

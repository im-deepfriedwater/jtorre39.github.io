import React from 'react';

function Home() {
  return (
    <div className="container">
      <br />
      <div className="row center">
        <h1>Current Projects:</h1>
        <ul>
          <li><a href="https://github.com/cazinge/college-schedule-helper">
            <h3>Schedule Helper</h3>
          </a></li>
          <li><a href="https://github.com/cazinge/GRNmap">
            <h3>GRNmap</h3>
          </a></li>
          <li><a href="https://github.com/cazinge/spotify-transition">
            <h3>Spotify Transition</h3>
          </a></li>
        </ul>
        <h1>Previous Projects:</h1>
        <ul>
          <li><a href="https://chrome.google.com/webstore/detail/atomic-css-helper/gpickgadladepnjlmaipnekafhpmangd">
            <h3>Atomic CSS Helper</h3>
          </a></li>
        </ul>
      </div>
      <br />
    </div>
  );
}

export default Home;

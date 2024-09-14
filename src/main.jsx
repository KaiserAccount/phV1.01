import { h, render } from 'preact';
import { Router, Route } from 'preact-router';

// import { Firestore, collection, addDoc } from '@firebase/firestore';

// // import firebase from 'firebase/app';
// // import { getAnalytics, logEvent, setCurrentScreen } from 'firebase/analytics'; // From the same source
// import { logEvent } from '@firebase/analytics'; // Assuming you exported 'analytics'
// import { analytics } from './firebase.js'; // Assuming you exported 'analytics'

// const firestore = new Firestore();

// logEvent(analytics, 'screen_view', { screen_name: 'doctor_profile' });

import Call from './Call.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/Call" component={Call} />

      </Router>
    </div>
  );
};

render(<App />, document.getElementById('app'));

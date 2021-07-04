import { BrowserRouter, Switch, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import { Provider } from 'react-redux';
import Router from "./router";
import i18n from "./translation";
import * as serviceWorker from "./serviceWorker";
import store from './redux/store';
import history from './history';
import React from 'react';
import ReactDOM from "react-dom";
import { useSelector } from 'react-redux'
import { isLoaded, ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/auth';


// import Home from './pages/Home'
// import Main from './pages/Home/Main';
// import Blocks from './components/Blocks';
// import ConductTransaction from './pages/ConductTransaction/ConductTransaction';
// import TransactionPool from './pages/TransactionPool/TransactionPool';
import './index.css';


var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
const firebaseProps = {
  userProfile: 'users'
}

firebase.initializeApp(firebaseConfig);
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children
}

const App = () =>{
  console.log("APP CALL")
  return (
    // <div>Hi</div>
    <ReactReduxFirebaseProvider {...firebaseProps} >
      <BrowserRouter>
      <AuthIsLoaded>
        <I18nextProvider i18n={i18n}>
          <Router history={history}/>
          
        </I18nextProvider>
        </AuthIsLoaded>
      </BrowserRouter>
      </ReactReduxFirebaseProvider>
    );
} 

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root"));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// import React from 'react';
// import { render } from 'react-dom';
// import { Router, Switch, Route } from 'react-router-dom';
// import history from './history';
// import App from './pages/Home';

// // import App from './pages/Home/Main';
// import Blocks from './pages/Blocks';
// import ConductTransaction from './pages/ConductTransaction';
// import TransactionPool from './pages/TransactionPool';
// import './index.css';

// render(
//   <Router history={history}>
//     <Switch>
//       <Route exact path='/' component={App} />
//       <Route path='/blocks' component={Blocks} />
//       <Route path='/conduct-transaction' component={ConductTransaction} />
//       <Route path='/transaction-pool' component={TransactionPool} />
//     </Switch>
//   </Router>,
//   document.getElementById('root')
// );
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { I18nextProvider } from "react-i18next";
// import "antd/dist/antd.css";
// import { Provider } from 'react-redux';
// import Router from "./router";
// import i18n from "./translation";
// import * as serviceWorker from "./serviceWorker";
// import store from './redux/store';
// import history from './history';
// import React from 'react';


// import Home from './pages/Home'
// import Main from './pages/Home/Main';
// import Blocks from './components/Blocks';
// import ConductTransaction from './pages/ConductTransaction/ConductTransaction';
// import TransactionPool from './pages/TransactionPool/TransactionPool';
// import './index.css';



// const App = () =>{
//   console.log("APP CALL")
//   return (
//     // <div>Hi</div>
//       <BrowserRouter>
//         <I18nextProvider i18n={i18n}>
//           <Router history={history}/>
          
//         </I18nextProvider>
//       </BrowserRouter>
//     );
// } 

// ReactDOM.render(

//   <Provider store={store}>
//     <App />
//   </Provider>,

//   document.getElementById("root"));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import App from './pages/Home/Main';
import Blocks from './pages/Blocks';
import ConductTransaction from './pages/ConductTransaction';
import TransactionPool from './pages/TransactionPool';
import './index.css';

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/blocks' component={Blocks} />
      <Route path='/conduct-transaction' component={ConductTransaction} />
      <Route path='/transaction-pool' component={TransactionPool} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
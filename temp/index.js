import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../client/src/history';



import App from '../client/src/pages/Home/Main';
import Blocks from '../client/src/components/Blocks';
import ConductTransaction from '../client/src/pages/ConductTransaction/index.js';
import TransactionPool from '../client/src/pages/TransactionPool/index.js';
import './index.css';

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
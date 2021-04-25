
import Home from '../pages/Home'



const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: Home,
  },
  {
    path: ["/blocks"],
    exact: false,
    component: "Blocks",
  },
  {
    path: ["/conduct-transaction"],
    exact: false,
    component: "ConductTransaction",
  },
  {
    path: ["/transaction-pool"],
    exact: false,
    component: "TransactionPool",
  },
];

export default routes;



/*<Switch>
<Route exact path='/' component={Home} />
 <Route path='/blocks' component={Blocks} />
<Route path='/conduct-transaction' component={ConductTransaction} />
<Route path='/transaction-pool' component={TransactionPool} /> 
</Switch> */

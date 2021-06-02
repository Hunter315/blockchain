import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import FakeCoin_Logo_Back from '../assets/FakeCoin_Logo_Back.png';

const  Main = () =>  {
  const [walletInfo, setWalletInfo] = React.useState({});


function fetchData(){
  // fetch(`http://localhost:3000/api/wallet-info`)

  fetch(`${document.location.origin}/api/wallet-info`)
  .then( async response => {
 
    let res = response.json();
    console.log(res)
  return res

  }
  )
  .then(json => {
    console.log(json)
    
    return setWalletInfo(json)})
  .catch(err => console.log(err));
}
  React.useEffect(() => {
  

  async function waiter() {


      await fetchData();

    }
    waiter();
  }, []) 
   
  

  
    const { address, balance } = walletInfo;

    return (
      <div className='App'>
        {/* <img className='logo' src={FakeCoin_Logo_Back}></img> */}
        <br />
        <div>
          Welcome to the blockchain...
        </div>
        <br />
        <div><Link to='/blocks'>Blocks</Link></div>
        <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
        <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
        <br />
        <div className='WalletInfo'>
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      </div>
    );
  
}

export default Main;
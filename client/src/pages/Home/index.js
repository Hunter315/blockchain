// import { lazy, useEffect } from "react";

// import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// // import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";
// // import Card from '@material-ui/core/Card';
// import Grid from '@material-ui/core/Grid'
// import { makeStyles } from '@material-ui/core/styles';
// import React from 'react';




// const ContactFrom = lazy(() => import("../../components/ContactForm"));
// const ContentBlock = lazy(() => import("../../components/ContentBlock"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
// const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 2,
//     margin: '8px'
//   },
//   card: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
//   search: {
//     marginBottom: '50px',
//     width: '50%',
//     Zindex: '100'
//   }
// }));

// const Home = () => {

//   // const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();

//   const [walletInfo, setWalletInfo] = React.useState({});

//   const { address, balance } = walletInfo;



//   const fetchData = async () => {
//     await fetch(`${document.location.origin}/api/wallet-info`)
//       .then(response => response.json())
//       .then(json => setWalletInfo({ json }));

//   }



//   useEffect(() => {
//     async function waiter() {


//       await fetchData();

//     }
//     waiter();
//   }, []);


//   return (
//     <Container>
//       <ScrollToTop />
//       <ContentBlock
//         type="right"
//         first="true"
//         title={IntroContent.title}
//         content={IntroContent.text}
//         button={IntroContent.button}
//         icon="brown-block.svg"
//         id="intro"
//       />
//       <MiddleBlock
//         title={MiddleBlockContent.title}
//         content={MiddleBlockContent.text}
//         button={MiddleBlockContent.button}
//       />



//       <ContentBlock
//         type="right"
//         title={MissionContent.title}
//         content={MissionContent.text}
//         icon="product-launch.svg"
//         id="mission"
//       />

//       <ContentBlock
//         type="left"
//         title={ProductContent.title}
//         content={ProductContent.text}
//         icon="waving.svg"
//         id="product"
//       />
//       <ContactFrom
//         title={ContactContent.title}
//         content={ContactContent.text}
//         id="contact"
//       />
//     </Container>
//   );
// };

// export default Home;






import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FakeCoin_Logo_Back from '../../assets/FakeCoin_Logo_Back.png';

const  Main = () =>  {
  const [walletInfo, setWalletInfo] = React.useState({});

  React.useEffect(() => {
    fetch(`${document.location.origin}/api/wallet-info`)
    .then(response => response.json())
    .then(json => setWalletInfo(json));


  }, []) 
   
  

  
    const { address, balance } = walletInfo;

    return (
      <div className='App'>
        <img className='logo' src={FakeCoin_Logo_Back}></img>
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
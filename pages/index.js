import React, { useEffect, useState } from 'react';
import Product from "../components/Product";
import HeadComponent from '../components/Head';

//web3 components
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';




const App = () => {
  

  // This will fetch the users' public key (wallet address) from any supported wallet 
  const { publicKey } = useWallet();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          console.log("##########")
          setProducts(data);
          console.log("Products", data);
        });
    //}
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>    
  );


  const renderItemBuyContainer = () => (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> A Solana Marketplace for Creative Content Selling </p>
          <p className="sub-text">It is like shutterstock but for web3</p>
        </header>

        <main>
       {/*publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()*/}
       {renderItemBuyContainer()}
        </main>

       
      </div>
    </div>
  );
};

export default App;

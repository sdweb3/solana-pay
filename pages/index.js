import React, { useState, useEffect} from "react";
import CreateProduct from "../components/CreateProduct";
import Product from "../components/Product";
import HeadComponent from '../components/Head';
import styles from "../styles/CreateProduct.module.css";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const App = () => {
  const { publicKey } = useWallet();
  const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        });
  }, [publicKey]);

  const renderItemBuyContainer = () => (
    <div className="products-row">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (
    <div className={styles.background_blur}>
      
      
      <HeadComponent/>
      
      <div className="container" >
        
        <header className="header-container">
          <p className="header"> OpenCorgi</p>
          <p className="sub-text">The World's First Solana Corgi Gif Marketplace</p>
          <p><b>The front-end is sloppy because the rockstar is the web3 solana-based payment</b></p>
          
          {isOwner && (
            <button className="button-wallet-connector" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Create Product"}
            </button>
          )}

          {!publicKey &&
          <div className="button-wallet-connector">
            <WalletMultiButton className="cta-button connect-wallet-button" />
          </div>
          }

          {creating && <CreateProduct />}

        </header>

        <main className="products-container">
          {publicKey ? renderItemBuyContainer() : "Connect your Solana wallet to get started. I am using Phantom."}
       </main>

        {publicKey &&
          <div className="products-container-footner">
            Your connected wallet public key is <b>{publicKey.toString()}</b>. 
            Every transaction you do to "fake purchasing" the corgi gifs is going back to it because,
            guess what, I don't own the rights to sell them.
            It is just for knowledge/entertainment purposes.  All the credits go to giphy.com.
          </div>
        }

        {/* coinbase snippet to buy me coffee */}
        <div className="centered">
          <a className="wallet-adapter-button cta-button connect-wallet-button"
            href="https://commerce.coinbase.com/checkout/d382b3df-1b95-4616-8bcd-9f008b96a4fe" target="_blank" rel="noopener noreferrer">
            Buy me a Crypto Coffee &nbsp; <FontAwesomeIcon icon={faCoffee} />
          </a>
          <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
          </script>
          <p className="footnote">
            Hey, did you enjoy the website and want to support my journey on sharing web3 knowledge? 
            <br />
            This is my <b>buy me a crypto coffee</b> page.
            Powered by Coinbase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
import Navigation from '../components/Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Image from 'next/image';
import Head from 'next/head';

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div style={{height:"100vh", width:"100vw"}}>
      <Head>
        <title>Daniel Li</title>
      </Head>
      <Navigation />
      <Jumbotron className={styles.mainInfo}>
        <div className="d-flex flex-row align-items-center">
          <Image src="/memeedit.png" width={300} height={300} className="col-4"/>
          <div className="col-8 ml-3">
            <h1>Hello</h1>
            <p>
              My Name is Daniel Li, software developer, hackerman, and an undergraduate Computer Science student at the University of Waterloo
            </p>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

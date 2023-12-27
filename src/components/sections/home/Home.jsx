// Home.jsx
import React from 'react';
import { ReactImg, WebpackImg } from '../../Images';
import Tutorial from '../how/Tutorial';
import Upper from '../how/Upper';
import './Home.css';

export default function Home() {

  return (
    <div className={`home`}>
      <div className="logo-div">
        <div className="logo">
          <a href="https://webpack.js.org"><img src={WebpackImg} alt="webpack" /></a>
        </div>
        <p>+</p>
        <div className="logo">
          <a href="https://react.dev"><img className='react' src={ReactImg} alt="react" /></a>
        </div>
      </div>
      <h2>Webpack + React</h2>
      <p>How to create a template app for React in Webpack?</p>
      <Upper />
      <Tutorial />
    </div>
  );
}

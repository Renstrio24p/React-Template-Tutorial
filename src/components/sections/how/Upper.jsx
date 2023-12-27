import { NodeJSImg, VScodeImg } from "../../Images";
import './Upper.css'

export default function Upper() {
  return (
    <div className="node">
      <h3>Install Tools</h3>
      <p>you need to install these required tools in your local machine 
      click on any of these icons to redirect you to their site.</p>

      <div className="logo-div">
        <div className="logo">
          <a href="https://nodejs.org">
            <img src={NodeJSImg} alt="node logo" />
          </a>
        </div>
        <br />
        <div className="logo">
          <a href="https://code.visualstudio.com">
            <img src={VScodeImg} alt="node logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

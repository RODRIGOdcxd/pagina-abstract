import svgLogo from "../Img/bxl-postgresql.svg"
import "../Styles/Nav.css"
export default function Head() {
  return (
    <nav>
        <div className="divLogo">
            <img className="imgLogoHead" src={svgLogo} alt="svg Logo" />
            <span>Abstract</span>
        </div>
        <div className="divSignIn">
            <span className="spanSignIn">Sign in</span>
        </div>
    </nav>
  )
}
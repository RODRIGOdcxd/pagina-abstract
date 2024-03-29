import Nav from "../Templates/Nav";
import Footer from "../Templates/Footer";
import "../Styles/Index.css";
import imgNav from "../Img/codigo.jpg";
import svgPrimero from "../Img/bx-time-five.svg";
import svgSegundo from "../Img/bx-leaf.svg";
import svgTercer from "../Img/bx-loader-alt.svg";
import cisco from "../Img/cisco.png";
import salesforce from "../Img/salesforce.png";
import bannerhealth from "../Img/bannerhealth.png";
import piña from "../Img/piña.jpg";
import estante from "../Img/estante.jpg";
import letrasluces from "../Img/letrasluces.jpg";

export default function Index() {
  const arrayDesign = [
    {
      design: [
        [
          cisco,
          "Design system management",
          "How Cisco built an enterprise global design system",
          "Read Cisco's Story",
        ],
        [
          salesforce,
          "Radical transparency",
          "How designers at Salesforce fostered trust and teamwork",
          "Read Salesforce's Story",
        ],
        [
          bannerhealth,
          "Remote collaboration",
          "How Banner Health is navigating the remote future no one planned for",
          "Read Banner Health's Story",
        ],
      ],
    },
  ];

  const arrayText = [
    {
      text: [
        [
          svgPrimero,
          "Less files. More flow.",
          "No more digging through Dropbox and Google Drive. Always know where to find “the latest,” so you can stay in your design flow.",
        ],
        [
          svgSegundo,
          "Less files. More flow.",
          "Explore and iterate in the same file at the same time, without losing the original. Simply create a branch, do your thing, then merge your changes when ready.",
        ],
        [
          svgTercer,
          "Less files. More flow.",
          "Know who made changes, when, and why. Compare changes side by side, resolve design conflicts, and merge work with precision.",
        ],
      ],
    },
  ];

  const arrayProductDesigners = [
    {
      product: [
        [
          piña,
          "Customer Spotlight",
          "Emporwering design teams and transforming workflows with Abstract",
          "Read their stories",
        ],
        [
          estante,
          "Design Inspiration",
          "Scaling design ops, collaboration, and the impact of design",
          "Get inspired",
        ],
        [
          letrasluces,
          "Our Blog",
          "Stories, news, and tips from behind the Artboards",
          "Browse Abstract's blog",
        ],
      ],
    },
  ];
  return (
    <>
      <Nav />
      <header>
        <div className="divVersion">
          <span className="spanHeader1">
            True version <br />
            control for
            <br /> Sketch files
          </span>
          <div className="divButtons">
            <button className="btn Start">Start Trial</button>
            <button className="btn Download">Download</button>
          </div>
          <img className="imgHeader" src={imgNav} alt="imgNav" />
          <span className="spanHeader2">
            1 in 3 Fortune 500 companies use Sketch + Abstract
          </span>
        </div>
        <div className="divSticky">
          <div className="divTexto">
            <div className="containerSticky">
              <p>Design collaboration</p>
              <p>shouldn’t be extra work</p>
            </div>
          </div>
          <div className="containerTexto">
            {arrayText.map((item) => {
              return item.text.map((subitem) => {
                return (
                  <div className="containerChild">
                    <img src={subitem[0]} alt="primer svg" />
                    <span>{subitem[1]}</span>
                    <p>{subitem[2]}</p>
                  </div>
                );
              });
            })}
          </div>
        </div>
        <div className="divDesign">
          <div className="divTexto">
            <div className="containerSticky De">
              <span>Why design teams love️ Abstract®</span>
            </div>
          </div>
          <div className="containerStickyDe">
            {arrayDesign.map((design) => {
              return design.design.map((subitem) => {
                return (
                  <div className="containerChildDe">
                    <div className="containerLogo">
                      <img src={subitem[0]} alt="imagen" />
                    </div>
                    <div className="containerTitulo">
                      <span>{subitem[1]}</span>
                    </div>
                    <div className="containerContenido">
                      <span>{subitem[2]}</span>
                    </div>
                    <div className="containerSubTitulo">
                      <a href="#" style={{ display: "inline" }}>
                        {subitem[3]}
                      </a>
                    </div>
                  </div>
                );
              });
            })}
          </div>
        </div>
      </header>
      <main className="ProductosDesigns">
        <div className="ProductDesignTitulo">
          <div className="ProductDesignChildTitulo">
            <span>Dedicated to product designers</span><br />
            <span>
              Get inspired by stories and resources from the best product design
              leadrs and teams
            </span>
          </div>
        </div>
        <div className="ProductDesignPaneles">
          {arrayProductDesigners.map((item) => {
            return item.product.map((subitem) => {
              return (
                <div className="ProductDesignChildPanel">
                  <div className="ProductDesignChildPanelImage">
                    <img src={subitem[0]} alt="imagen" />
                  </div>
                  <div className="ProductDesignChildPanelTitulo">
                    <span>{subitem[1]}</span>
                  </div>
                  <div className="ProductDesignChildPanelContent">
                    <span>{subitem[2]}</span>
                  </div>
                  <div className="ProductDesignChildPanelUrl">
                    <a href="#">{subitem[3]}</a>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </main>
      <div className="ProductDesignButton">
          <span>Level up your workflow</span>
          <button>View Pricing Plans</button>
        </div>
      <Footer />
    </>
  );
}

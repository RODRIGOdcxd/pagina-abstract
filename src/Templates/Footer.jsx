import svgLogo from "../Img/bxl-postgresql.svg";
import "../Styles/Footer.css";
export default function Footer() {
  const menufooter = [
    {
      menu: [
        [
          "Resources",
          "Blog",
          "Help Center",
          "Contact Support",
          "Release Notes",
          "Status",
        ],
        [
          "Company",
          "About Us",
          "Careers",
          "Legal",
          "Privacy",
          "Website Terms of Use",
        ],
        ["Social", "Twitter", "LinkeIn", "Facebook", "Dribbble"],
        ["Contact Us", "info@abstract.com"],
      ],
    },
  ];

  return (
    <footer>
      <div className="titulo">
        <div>
          <img className="imgLogoFooter" src={svgLogo} alt="svg Logo" />
          <span>Abstract</span>
        </div>
      </div>
      {menufooter.map((item) =>
        item.menu.map((subItem, index) => (
          <div key={index} className="divPanelesFooter">
            <ul className="ulPanelFooter">
              {subItem.map((rSubItem, iterador) => (
                <li>
                  <a href="#">{subItem[iterador]}</a>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
      <div className="copy">
        <ul className="ulCopy">
          <li>@Copyright 2022</li>
          <li>Abstract Studio Design, Inc.</li>
          <li>All rights reserved</li>
        </ul>
      </div>
    </footer>
  );
}

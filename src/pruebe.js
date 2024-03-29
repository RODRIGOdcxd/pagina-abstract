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

// menufooter.map((item) => (
//     item.menu.map((itemMenu,iteradorMenu) => (
//         itemMenu[iteradorMenu].map((subItem,iterador) => (
//             console.log(subItem[0])
//         ))
//     ))
// ))
// menufooter.forEach((item) => {
//   item.menu.forEach((itemMenu, ite) => {
//     itemMenu.forEach((subItem) => {
//       console.log(subItem); // Access the first element (text)
//     });
//   });
// });
// menufooter.forEach((item) => {
//   console.log(item.menu[0]);
// });
// menufooter.forEach((item) => {
//   item.menu.forEach((itemMenu, iterador) =>
//   console.log(itemMenu));
// });
// menufooter.forEach((item) => {
//   item.menu.forEach((itemMenu, iterador) => {
//     itemMenu.forEach((subItem, ite) => {
//       console.log(itemMenu[ite]);
//     });
//   });
// });
// menufooter.forEach((item) => {
//   item.menu.forEach((itemMenu) => {
//     console.log(itemMenu)
//   });
// });

const arrayDesign = [
  {
    imagen: ["image1", "image2", "image3"],
    titulo: [
      "Design system management",
      "Radical transparency",
      "Remote collaboration",
    ],
    contenido: [
      "How Cisco built an enterprise global design system",
      "How designers at Salesforce fostered trust and teamwork",
      "How Banner Health is navigating the remote future no one planned for",
    ],
    url: [
      "Read Cisco's Story",
      "Read Salesforce's Story",
      "Read Banner Health's Story",
    ],
  },
];

const arrayDesign1 = [
  {
    imagen: [
      ["image1",
      "Design system management",
      "How Cisco built an enterprise global design system",
      "Read Cisco's Story"],
      ["image2",
      "Radical transparency",
      "How designers at Salesforce fostered trust and teamwork",
      "Read Salesforce's Story"],
      ["image3",
      "Remote collaboration",
      "How Banner Health is navigating the remote future no one planned for",
      "Read Banner Health's Story"]
    ],
  },
];
arrayDesign1.map((item) => {
  item.imagen.map((subitem) => {
    console.log(subitem[0])
  })
})

// arrayDesign.map((item) => {
//   item.imagen.map((imagen) => {
//     console.log(imagen);
//   });
//   item.titulo.map((titulo, ite) => {
//     console.log(titulo);
//   });
// });

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imageurl:
      "https://www.pageworks.co.uk/client/assets/templates/palas/images/demo/Responsive-Laptop-iPads-iPhone-400x300.jpg",
    name: "my first website.",
    projectLink: "https://dev-musaddik.github.io/musaddik/",
    description:
      "CreatingCreating my first responsive website was an exciting and challenging endeavor."},
  {
    id: 2,
    imageurl:
      "https://mgsmarttech.com/wp-content/uploads/2020/05/Reasons-Why-Everyone-Love-WordPress-for-Website-Development-1140x694-1.jpg",
    name: "my wordpress website",
    projectLink: "https://dev-mdmusaddik.pantheonsite.io/",
    description: "I'm created this website using only mobile phone. i'm spend a lot of time for creating this site (all most six hours)",
  },
  {
    id: 3,
    imageurl:
      "data:data:image/jpeg;base64,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",
    name: "iWatch",
    projectLink: "https://dev-musaddik.github.io/css-project-one/",
    description: "A beautiful Css project . CSS 3D Glowing Cube Animation Effects - Ambient Light Effects",
  },
  {
    id: 4,
    imageurl:
      "data:image/png;base64,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",
    name: "Stopwatch ",
    projectLink: "https://dev-musaddik.github.io/stopwatch-/",
    description: " is a timepiece designed to measure the amount of time that elapses between its activation and deactivation. A mechanical ",
  },
  { id: 5,
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIRp8Ut1lXF02e6YT7Rs1BVA_N8e1aA0XJg&usqp=CAU",
    name: "PasswordChecker",
    projectLink: "https://dev-musaddik.github.io/PasswordChecker/",
    description: "It is important to choose passwords wisely. Check how strong and secure is your password. Improve the strength of your password to stay safe.",
  },
  {
    id: 6,
    imageurl:
      "data:image/jpeg;base64,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",
    name: "Friend Love Money?",
    projectLink: "https://dev-musaddik.github.io/relationship-between-frinds-love-money/",
    description: "The title of this volume is aptly Love, Money and Friendships.",
  },
  
   
  {
    id: 7,
    imageurl:
      "data:image/jpeg;base64,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",
    name: "My bank",
    projectLink: "https://dev-musaddik.github.io/MusaddikBank/",
    description: "A web application used to tranfer virtual money between multiple users and also record the banking transactions",
  },
  {
    id: 8,
    imageurl:
      "data:image/jpeg;base64,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",
    name: "Iphone project",
    projectLink: "https://dev-musaddik.github.io/iphones/",
    description: "I'm going to create an Apple iPhone like User Interface (UI) design using HTML and CSS.",
  },
];
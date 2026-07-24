export const asset = (filename) => `${import.meta.env.BASE_URL}assets/${encodeURI(filename)}`;

export const navigation = [
  { label: 'VIS DEV.', to: '/vis-dev' },
  { label: 'PERSONAL.', to: '/personal' },
  { label: 'ANIMATIONS!', to: '/animations' },
  { label: 'PHOTOGRAPHY.', to: '/photography' },
  { label: 'ABOUT ME.', to: '/about' },
];

export const homeCovers = [
  { label: 'VIS DEV.', to: '/vis-dev', image: 'cover1.png' },
  { label: 'PERSONAL.', to: '/personal', image: 'cover2.png' },
  { label: 'ANIMATIONS!', to: '/animations', image: 'cover3.png' },
  { label: 'PHOTOGRAPHY.', to: '/photography', image: 'cover4.png' },
];

export const visualProjects = [
  {
    title: "TAIWAN’S EAST COAST",
    slug: 'taiwans-east-coast',
    date: '2023-01-03',
    layout: 'east-coast',
    images: [
      { src: 'A1.png', alt: "Taiwan’s East Coast artwork 1" },
      { src: 'A2.png', alt: "Taiwan’s East Coast artwork 2" },
      { src: 'A3.png', alt: "Taiwan’s East Coast artwork 3" },
      { src: 'A4.png', alt: "Taiwan’s East Coast artwork 4" },
      { src: 'A5.png', alt: "Taiwan’s East Coast artwork 5" },
      { src: 'A6.png', alt: "Taiwan’s East Coast artwork 6" },
      { src: 'A7.png', alt: "Taiwan’s East Coast artwork 7" },
      { src: 'A8.png', alt: "Taiwan’s East Coast artwork 8" },
      { src: 'A9.png', alt: "Taiwan’s East Coast artwork 9" },
    ],
  },
  {
    title: 'COLORS OF TAIWAN.',
    slug: 'colors-of-taiwan',
    date: '2023-01-02',
    layout: 'colors',
    images: [
      { src: 'B1 - Jiaming Hu, Gaomei Wetlands, Alishan.png', alt: 'Colors of Taiwan artwork 1', hoverLabel: 'Jiaming Hu, Gaomei Wetlands, Alishan' },
      { src: 'B2 - Taimali, Jianming Hu, Taimali.png', alt: 'Colors of Taiwan artwork 2', hoverLabel: 'Taimali, Jianming Hu, Taimali' },
      { src: 'B3 - Taitung Country.png', alt: 'Colors of Taiwan artwork 3', hoverLabel: 'Taitung Country' },
    ],
  },
  {
    title: 'THE DRESSMAKER.',
    slug: 'the-dressmaker',
    date: '2021-11-27',
    layout: 'dressmaker',
    images: [
      { src: 'C1.png', alt: 'The Dressmaker artwork 1' },
      { src: 'C2.png', alt: 'The Dressmaker artwork 2' },
      { src: 'C3.png', alt: 'The Dressmaker artwork 3' },
      { src: 'C4.png', alt: 'The Dressmaker artwork 4' },
      { src: 'C5.png', alt: 'The Dressmaker artwork 5' },
      { src: 'C6.png', alt: 'The Dressmaker artwork 6' },
    ],
  },
  {
    title: 'GROWING UP WITH GRANDPA',
    slug: 'growing-up-with-grandpa',
    date: '2021-07-24',
    layout: 'grandpa',
    description: 'Explorations of the Shui Village Library and Wawa Village. Here are some of the sketches and illustrations I made as part of the environmental visual development team! Story: Growing Up With Grandpa is about a girl who goes on a journey to find a cure for her dying grandpa. The girl is a Shui who travels to various other worlds in order to find said cure and makes new friends while doing so.',
    disclaimer: 'Based on the Intellectual Property of Shad Bradbury | Do not use or redistribute',
    images: [
      { src: 'D1.png', alt: 'Growing Up with Grandpa artwork 1' },
      { src: 'D2.png', alt: 'Growing Up with Grandpa artwork 2' },
      { src: 'D3.png', alt: 'Growing Up with Grandpa artwork 3' },
      { src: 'D4.png', alt: 'Growing Up with Grandpa artwork 4' },
      { src: 'D5.png', alt: 'Growing Up with Grandpa artwork 5' },
      { src: 'D6.png', alt: 'Growing Up with Grandpa artwork 6' },
    ],
  },
  {
    title: 'PYGMALION AND GALATEA.',
    slug: 'pygmalion-and-galatea',
    date: '2021-06-21',
    layout: 'pygmalion',
    images: [
      { src: 'E1.png', alt: 'Pygmalion and Galatea artwork 1' },
      { src: 'E2.png', alt: 'Pygmalion and Galatea artwork 2' },
      { src: 'E3.png', alt: 'Pygmalion and Galatea artwork 3' },
      { src: 'E4.png', alt: 'Pygmalion and Galatea artwork 4' },
      { src: 'E5.png', alt: 'Pygmalion and Galatea artwork 5' },
      { src: 'E6.png', alt: 'Pygmalion and Galatea artwork 6' },
    ],
  },
];

export const personalImages = [
  { src: 'P1.png', alt: 'Personal artwork 1' },
  { src: 'P2.png', alt: 'Personal artwork 2' },
  { src: 'P3.png', alt: 'Personal artwork 3' },
  { src: 'P4.png', alt: 'Personal artwork 4' },
];

export const animationData = {
  title: 'ANIMATIC SEQUENCES',
  intro: 'Practicing dynamic poses and movement with references to sequences in television and film (not my own original sequences).',
  sectionTitle: 'ACTION SEQUENCES.',
  images: [
    { src: 'animated1.gif', alt: 'Action sequence animation 1', type: 'gif' },
    { src: 'animated2.gif', alt: 'Action sequence animation 2', type: 'gif' },
    { src: 'animated3.gif', alt: 'Action sequence animation 3', type: 'gif' },
  ],
};

export const photographyData = {
  title: 'PHOTOS!',
  intro: 'When I worked in Taiwan, three of my former coworkers each did some photography as a hobby outside of work. They all inspired me so much that I bought myself a second-hand digital camera for fun (plus I wanted to be cool like them)! Here are some of my favorites :)',
  images: [
    { src: 'X1.png', alt: 'Photography image 1' },
    { src: 'X2.png', alt: 'Photography image 2' },
    { src: 'X3.png', alt: 'Photography image 3' },
    { src: 'X4.png', alt: 'Photography image 4' },
    { src: 'X5.png', alt: 'Photography image 5' },
    { src: 'X6.png', alt: 'Photography image 6' },
    { src: 'X7.png', alt: 'Photography image 7' },
    { src: 'X8.png', alt: 'Photography image 8' },
    { src: 'X9.png', alt: 'Photography image 9' },
    { src: 'X10.png', alt: 'Photography image 10' },
    { src: 'X11.png', alt: 'Photography image 11' },
  ],
};

export const aboutData = {
  image: 'circle.png',
  bio: ["Hi, I'm Candace - An artist working in the film industry in NYC.", "During the day you'll often find me running around midtown, and in my free time I enjoy making things for the people around me."],
  quote: '“It’s hard to be mad when you feel like you’re part of something big.” — Hoppers, 2026 🦫',
  contacts: [
    { label: 'Email:', text: 'candaceytang@gmail.com', href: 'mailto:candaceytang@gmail.com' },
    { label: 'Instagram:', text: '@whaletang', href: 'https://www.instagram.com/whaletang/' },
    { label: 'LinkedIn:', text: 'candacetang', href: 'https://www.linkedin.com/in/candaceytang/' },
  ],
};

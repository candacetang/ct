export const asset = (filename) => `/assets/${filename}`;

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

const numbered = (prefix, total) => Array.from({ length: total }, (_, index) => ({
  src: `${prefix}${index + 1}.png`,
  alt: `${prefix} artwork ${index + 1}`,
}));

export const visualProjects = [
  {
    title: "TAIWAN’S EAST COAST",
    slug: 'taiwans-east-coast',
    date: '2023-01-03',
    layout: 'east-coast',
    images: numbered('A', 9),
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
    images: numbered('C', 6),
  },
  {
    title: 'GROWING UP WITH GRANDPA',
    slug: 'growing-up-with-grandpa',
    date: '2021-07-24',
    layout: 'grandpa',
    description: 'Explorations of the Shui Village Library and Wawa Village. Here are some of the sketches and illustrations I made as part of the environmental visual development team! Story: Growing Up With Grandpa is about a girl who goes on a journey to find a cure for her dying grandpa. The girl is a Shui who travels to various other worlds in order to find said cure and makes new friends while doing so.',
    disclaimer: 'Based on the Intellectual Property of Shad Bradbury | Do not use or redistribute',
    images: numbered('D', 6),
  },
  {
    title: 'PYGMALION AND GALATEA.',
    slug: 'pygmalion-and-galatea',
    date: '2021-06-21',
    layout: 'pygmalion',
    images: numbered('E', 6),
  },
];

export const personalImages = numbered('P', 4).map((image) => ({ ...image, alt: `Personal artwork ${image.src.match(/\d+/)[0]}` }));

export const animationData = {
  title: 'ANIMATIC SEQUENCES',
  intro: 'Practicing dynamic poses and movement with references to sequences in television and film (not my own original sequences).',
  sectionTitle: 'ACTION SEQUENCES.',
  images: ['animated1.gif', 'animated2.gif', 'animated3.gif'].map((src, index) => ({ src, alt: `Action sequence animation ${index + 1}`, type: 'gif' })),
};

export const photographyData = {
  title: 'PHOTOS!',
  intro: 'When I worked in Taiwan, three of my former coworkers each did some photography as a hobby outside of work. They all inspired me so much that I bought myself a second-hand digital camera for fun (plus I wanted to be cool like them)! Here are some of my favorites :)',
  images: numbered('X', 11).map((image) => ({ ...image, alt: `Photography image ${image.src.match(/\d+/)[0]}` })),
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

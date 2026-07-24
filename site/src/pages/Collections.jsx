import { animationData, photographyData, personalImages } from '../data/siteData';
import Gallery from '../components/Gallery';
export function Personal() { return <main className="collection personal"><Gallery images={personalImages} className="personal-grid" priority /></main>; }
export function Animations() { return <main className="collection animations"><h1>{animationData.title}</h1><p className="intro">{animationData.intro}</p><h2>{animationData.sectionTitle}</h2><Gallery images={animationData.images} className="animation-grid" priority /></main>; }
export function Photography() { return <main className="collection photography"><h1>{photographyData.title}</h1><p className="intro">{photographyData.intro}</p><Gallery images={photographyData.images} className="photo-grid" priority /></main>; }

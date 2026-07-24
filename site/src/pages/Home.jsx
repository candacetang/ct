import { Link } from 'react-router-dom';
import { asset, homeCovers } from '../data/siteData';
export default function Home() { return <main className="home"><section className="cover-grid">{homeCovers.map((cover) => <Link key={cover.to} to={cover.to} className="cover"><img src={asset(cover.image)} alt="" /><span>{cover.label}</span></Link>)}</section></main>; }

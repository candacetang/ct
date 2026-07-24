import { Link, useParams } from 'react-router-dom';
import { visualProjects } from '../data/siteData';
import Gallery from '../components/Gallery';

function Project({ project, standalone = false }) { return <article className={`project project-${project.layout}`}>
  {standalone ? <h1>{project.title}</h1> : <h2><Link to={`/vis-dev/${project.slug}`}>{project.title}</Link></h2>}
  {project.description && <p className="project-description">{project.description}</p>}
  {project.disclaimer && <p className="disclaimer">{project.disclaimer}</p>}
  <Gallery images={project.images} className={`layout-${project.layout}`} priority={standalone} />
  <p className="date">{project.date}</p>
</article> }

export function VisualDevOverview() { return <main className="vis-overview">{visualProjects.map((project) => <Project project={project} key={project.slug} />)}</main>; }
export function VisualDevProject() { const { slug } = useParams(); const project = visualProjects.find((item) => item.slug === slug); return project ? <main className="vis-project"><Project project={project} standalone /></main> : <main><h1>Page not found</h1></main>; }

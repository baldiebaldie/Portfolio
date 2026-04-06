import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'
import bgProjects from '../bg-projects.png'

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" className="bg-surface/30" bgImage={bgProjects}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}

import { Card } from '@/components/ui/card'
import { ExternalLink, Folder } from 'lucide-react'

const projects = [
	{
		name: 'NeuroAcademy',
		url: 'neuroacademy.uz',
		description:
			'Educational platform with modern learning management features',
		tags: ['React', 'REST API', 'UI/UX'],
	},
	{
		name: 'Mercury Consulting',
		url: 'mercuryconsulting.uz',
		description:
			'Corporate website for consulting services with dynamic content',
		tags: ['React', 'Vite', 'Responsive'],
	},
	{
		name: 'Qayiq',
		url: 'qayiq.uz',
		description: 'Main platform with comprehensive user interface',
		tags: ['React', 'JavaScript', 'API'],
	},
	{
		name: 'Qayiq Control',
		url: 'control.qayiq.uz',
		description: 'Admin dashboard for platform management and analytics',
		tags: ['React', 'Dashboard', 'Admin'],
	},
]

export function ProjectsSection() {
	return (
		<section className='py-20 px-4'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex items-center gap-4 mb-12'>
					<Folder className='w-8 h-8 text-primary' />
					<h2 className='text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-orbitron)]'>
						PROJECTS
					</h2>
				</div>

				<div className='grid md:grid-cols-2 gap-6'>
					{projects.map(project => (
						<Card
							key={project.name}
							className='bg-card/50 backdrop-blur-sm border-primary/30 p-6 hover:border-primary/60 hover:bg-card/70 transition-all duration-300 group'
						>
							<div className='space-y-4'>
								<div className='flex items-start justify-between'>
									<Folder className='w-10 h-10 text-secondary' />
									<a
										href={`https://${project.url}`}
										target='_blank'
										rel='noopener noreferrer'
										className='text-muted-foreground hover:text-primary transition-colors'
									>
										<ExternalLink className='w-5 h-5' />
									</a>
								</div>

								<div>
									<h3 className='text-xl font-bold text-foreground font-[family-name:var(--font-orbitron)] mb-2'>
										{project.name}
									</h3>
									<p className='text-sm text-primary font-mono mb-3'>
										{project.url}
									</p>
									<p className='text-muted-foreground text-sm leading-relaxed'>
										{project.description}
									</p>
								</div>

								<div className='flex flex-wrap gap-2'>
									{project.tags.map(tag => (
										<span
											key={tag}
											className='px-2 py-1 bg-secondary/10 border border-secondary/30 text-secondary text-xs font-semibold rounded'
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

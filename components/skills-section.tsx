import { Code2 } from 'lucide-react'

const skills = [
	{ name: 'React', level: 90 },
	{ name: 'JavaScript', level: 85 },
	{ name: 'HTML/CSS', level: 95 },
	{ name: 'Git', level: 80 },
	{ name: 'Vite', level: 85 },
	{ name: 'REST API', level: 80 },
	{ name: 'Figma', level: 75 },
]

export function SkillsSection() {
	return (
		<section className='py-20 px-4 bg-muted/20'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex items-center gap-4 mb-12'>
					<Code2 className='w-8 h-8 text-secondary' />
					<h2 className='text-4xl md:text-5xl font-bold text-secondary font-[family-name:var(--font-orbitron)]'>
						TECH_STACK
					</h2>
				</div>

				<div className='grid md:grid-cols-2 gap-6'>
					{skills.map(skill => (
						<div key={skill.name} className='space-y-2'>
							<div className='flex justify-between items-center'>
								<span className='text-foreground font-semibold'>
									{skill.name}
								</span>
								<span className='text-primary text-sm font-semibold'>
									{skill.level}%
								</span>
							</div>
							<div className='h-2 bg-muted rounded-full overflow-hidden'>
								<div
									className='h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out'
									style={{ width: `${skill.level}%` }}
								/>
							</div>
						</div>
					))}
				</div>

				<div className='mt-12 p-6 border border-primary/30 bg-card/30 backdrop-blur-sm rounded'>
					<p className='text-muted-foreground text-sm leading-relaxed'>
						<span className='text-primary'>{'// '}</span>
						Constantly learning and adapting to new technologies.
						<br />
						<span className='text-primary'>{'// '}</span>
						Focused on writing clean, maintainable, and performant code.
					</p>
				</div>
			</div>
		</section>
	)
}

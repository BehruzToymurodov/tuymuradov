import { Card } from '@/components/ui/card'
import { Briefcase } from 'lucide-react'

export function ExperienceSection() {
	return (
		<section id='experience' className='py-20 px-4'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex items-center gap-4 mb-12'>
					<Briefcase className='w-8 h-8 text-primary' />
					<h2 className='text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-orbitron)]'>
						EXPERIENCE
					</h2>
				</div>

				<Card className='bg-card/50 backdrop-blur-sm border-primary/30 p-8 hover:border-primary/60 transition-all duration-300'>
					<div className='space-y-4'>
						<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
							<div>
								<h3 className='text-2xl font-bold text-foreground font-[family-name:var(--font-orbitron)]'>
									Frontend Developer
								</h3>
								<p className='text-xl text-primary mt-1 font-semibold'>
									KEMA FUTURE
								</p>
							</div>
							<div className='flex items-center gap-2 text-muted-foreground'>
								<span className='w-2 h-2 bg-secondary rounded-full' />
								<span className='font-semibold'>1 YEAR</span>
							</div>
						</div>

						<div className='h-px bg-border' />

						<p className='text-muted-foreground leading-relaxed'>
							Developing modern web applications using React and cutting-edge
							frontend technologies. Collaborating with cross-functional teams
							to deliver high-quality, scalable solutions that enhance user
							experience and drive business growth.
						</p>

						<div className='flex flex-wrap gap-2 pt-4'>
							{[
								'React',
								'JavaScript',
								'HTML/CSS',
								'REST API',
								'Git',
								'Vite',
							].map(tech => (
								<span
									key={tech}
									className='px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold rounded'
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</Card>
			</div>
		</section>
	)
}

import { Card } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'

export function EducationSection() {
	return (
		<section className='py-20 px-4 bg-muted/20'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex items-center gap-4 mb-12'>
					<GraduationCap className='w-8 h-8 text-secondary' />
					<h2 className='text-4xl md:text-5xl font-bold text-secondary font-[family-name:var(--font-orbitron)]'>
						EDUCATION
					</h2>
				</div>

				<Card className='bg-card/50 backdrop-blur-sm border-secondary/30 p-8 hover:border-secondary/60 transition-all duration-300'>
					<div className='space-y-4'>
						<div className='flex items-center gap-3'>
							<div className='w-3 h-3 bg-secondary rounded-full animate-pulse' />
							<h3 className='text-2xl font-bold text-foreground font-[family-name:var(--font-orbitron)]'>
								Bachelor's Degree
							</h3>
						</div>

						<p className='text-xl text-secondary font-semibold'>
							INHA University in Tashkent
						</p>

						<div className='h-px bg-border' />

						<p className='text-muted-foreground leading-relaxed'>
							Pursuing comprehensive education in computer science and software
							engineering, with focus on modern web development technologies and
							best practices.
						</p>
					</div>
				</Card>
			</div>
		</section>
	)
}

'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
	const [text, setText] = useState('')
	const fullText = 'FRONTEND_DEVELOPER'

	useEffect(() => {
		let index = 0
		const interval = setInterval(() => {
			if (index <= fullText.length) {
				setText(fullText.slice(0, index))
				index++
			} else {
				clearInterval(interval)
			}
		}, 100)

		return () => clearInterval(interval)
	}, [])

	const scrollToNext = () => {
		const target = document.getElementById('experience')
		if (target) target.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<section className='min-h-screen flex items-center justify-center px-4 relative'>
			<div className='max-w-5xl w-full'>
				<div className='space-y-8'>
					{/* Glitch name effect */}
					<div className='relative'>
						<h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-primary neon-text font-[family-name:var(--font-orbitron)]'>
							TO'YMURODOV
						</h1>
						<h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-secondary neon-text font-[family-name:var(--font-orbitron)] mt-2'>
							BEHRUZ
						</h1>
					</div>

					{/* Typing effect */}
					<div className='flex items-center gap-2 text-2xl md:text-3xl text-muted-foreground font-mono'>
						<span className='text-primary'>{'>'}</span>
						<span>{text}</span>
						<span className='animate-pulse'>_</span>
					</div>

					{/* Bio */}
					<div className='max-w-2xl space-y-4 text-muted-foreground leading-relaxed'>
						<p className='text-lg'>
							Crafting digital experiences with modern web technologies.
							Specialized in building responsive, performant applications that
							push the boundaries of what's possible on the web.
						</p>
						<div className='flex items-center gap-2 text-primary font-mono'>
							<span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
							<span>AVAILABLE FOR PROJECTS</span>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<button
				type='button'
				onClick={scrollToNext}
				className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full p-2 text-primary transition hover:text-secondary focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/60'
				aria-label='Scroll to experience section'
			>
				<ChevronDown className='w-8 h-8' />
			</button>
		</section>
	)
}

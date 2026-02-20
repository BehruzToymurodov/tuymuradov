'use client'

import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
	const [open, setOpen] = useState(false)
	const [form, setForm] = useState({ name: '', phone: '', message: '' })

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const name = form.name.trim()
		const phone = form.phone.trim()
		const message = form.message.trim()

		if (!name || !phone || !message) return

		const subject = encodeURIComponent('New portfolio inquiry')
		const body = encodeURIComponent(
			`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
		)

		window.location.href = `mailto:i.yuji2312@mail.com?subject=${subject}&body=${body}`
		setOpen(false)
	}

	const updateField =
		(key: keyof typeof form) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setForm(prev => ({ ...prev, [key]: event.target.value }))
		}

	return (
		<section className='py-20 px-4'>
			<div className='max-w-5xl mx-auto'>
				<div className='flex items-center gap-4 mb-12'>
					<Terminal className='w-8 h-8 text-primary' />
					<h2 className='text-4xl md:text-5xl font-bold text-primary font-[family-name:var(--font-orbitron)]'>
						CONNECT
					</h2>
				</div>

				<div className='bg-card/50 backdrop-blur-sm border border-primary/30 p-8 md:p-12 rounded'>
					<div className='space-y-8'>
						<div className='space-y-4'>
							<p className='text-2xl md:text-3xl text-foreground font-[family-name:var(--font-orbitron)] font-bold'>
								Let's Build Something Amazing
							</p>
							<p className='text-muted-foreground leading-relaxed max-w-2xl'>
								I'm always interested in hearing about new projects and
								opportunities. Whether you have a question or just want to say
								hi, feel free to reach out!
							</p>
						</div>

						<div className='flex flex-wrap gap-4'>
							<Dialog open={open} onOpenChange={setOpen}>
								<DialogTrigger asChild>
									<Button
										size='lg'
										className='bg-primary hover:bg-primary/80 text-primary-foreground font-bold w-full sm:w-auto'
									>
										<Mail className='w-5 h-5 mr-2' />
										GET IN TOUCH
									</Button>
								</DialogTrigger>

								<DialogContent>
									<DialogHeader>
										<DialogTitle>Reach Out</DialogTitle>
										<DialogDescription className='font-medium'>
											Share your details and I'll get back to you via email.
										</DialogDescription>
									</DialogHeader>

									<form className='space-y-4' onSubmit={handleSubmit}>
										<div className='space-y-2'>
											<Label htmlFor='contact-name'>Name</Label>
											<Input
												id='contact-name'
												value={form.name}
												onChange={updateField('name')}
												placeholder='Your name'
												required
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='contact-phone'>Phone number</Label>
											<Input
												id='contact-phone'
												value={form.phone}
												onChange={updateField('phone')}
												placeholder='+998 99 123 45 67'
												required
											/>
										</div>

										<div className='space-y-2'>
											<Label htmlFor='contact-message'>How can I help?</Label>
											<Textarea
												id='contact-message'
												value={form.message}
												onChange={updateField('message')}
												placeholder='Tell me about your project or question'
												rows={4}
												required
											/>
										</div>

										<DialogFooter>
											<Button
												type='submit'
												className='w-full sm:w-auto font-semibold'
											>
												Send to Email
											</Button>
										</DialogFooter>
									</form>
								</DialogContent>
							</Dialog>

							<Button
								asChild
								size='lg'
								variant='outline'
								className='border-primary/30 hover:border-primary hover:bg-primary/10 hover:text-white transition-colors bg-transparent w-full sm:w-auto font-semibold'
							>
								<Link
									href='https://github.com/BehruzToymurodov'
									target='_blank'
									rel='noreferrer noopener'
								>
									<Github className='w-5 h-5 mr-2' />
									GITHUB
								</Link>
							</Button>

							<Button
								asChild
								size='lg'
								variant='outline'
								className='border-secondary/30 hover:border-secondary hover:bg-secondary/10 hover:text-white transition-colors bg-transparent w-full sm:w-auto font-semibold'
							>
								<Link
									href='https://www.linkedin.com/in/bekhruz-tuymuradov?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
									target='_blank'
									rel='noreferrer noopener'
								>
									<Linkedin className='w-5 h-5 mr-2' />
									LINKEDIN
								</Link>
							</Button>
						</div>
					</div>
				</div>

				<div className='mt-12 text-center text-muted-foreground text-sm'>
					<p>© 2025 TO'YMURODOV BEHRUZ. ALL RIGHTS RESERVED.</p>
					<p className='mt-2 text-primary'>BUILT WITH NEXT.JS & TAILWIND CSS</p>
				</div>
			</div>
		</section>
	)
}

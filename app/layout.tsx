import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Orbitron, Poppins, Space_Mono } from 'next/font/google'
import type React from 'react'
import './globals.css'

const orbitron = Orbitron({
	subsets: ['latin'],
	variable: '--font-orbitron',
	display: 'swap',
})

const spaceMono = Space_Mono({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-space-mono',
	display: 'swap',
})

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
})

export const metadata: Metadata = {
	title: "To'ymurodov Behruz | Frontend Developer",
	description:
		'Cyberpunk-styled portfolio of Frontend Developer specializing in React and modern web technologies',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${orbitron.variable} ${spaceMono.variable} ${poppins.variable}`}
		>
			<body className='font-[family-name:var(--font-poppins)] antialiased'>
				<div className='scan-line' />
				{children}
				<Analytics />
			</body>
		</html>
	)
}

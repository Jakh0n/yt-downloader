import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Youtube Downloader',
	description: 'Download Youtube videos with ease and speed',
	icons: {
		icon: '/favicon.ico',
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				<Toaster position='top-right' />
			</body>
		</html>
	)
}

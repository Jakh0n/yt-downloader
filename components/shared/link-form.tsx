'use client'

import { VideoInfo as VideoInfoType } from '@/types'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import DetailedVideo from './detailed-video'
import VideoLoader from './detailed.video-loader'
export default function LinkForm() {
	const [url, setUrl] = useState('')
	const [info, setInfo] = useState<VideoInfoType | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const getInfo = async () => {
		setIsLoading(true)
		const res = await fetch(`/api/info?url=${url}`)
		const data = await res.json()
		setInfo(data)
		setIsLoading(false)
	}

	const download = async (format: 'mp3' | 'mp4') => {
		try {
			const res = await fetch('/api/download', {
				method: 'POST',
				body: JSON.stringify({ url, format }),
				headers: { 'Content-Type': 'application/json' },
			})
			const blob = await res.blob()
			const a = document.createElement('a')
			a.href = URL.createObjectURL(blob)
			a.download = `video.${format}`
			a.click()
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className='bg-white p-6 rounded shadow w-full max-w-md'>
			<input
				type='text'
				value={url}
				onChange={e => setUrl(e.target.value)}
				placeholder='YouTube URL'
				className='w-full border p-2 rounded mb-4'
			/>
			<button
				onClick={getInfo}
				className='w-full bg-blue-600 text-white py-2 rounded mb-4'
				disabled={isLoading}
			>
				{isLoading ? (
					<div className='flex items-center justify-center gap-2'>
						Getting info
						<Loader2 className='animate-spin' />
					</div>
				) : (
					'Get Info'
				)}
			</button>

			{isLoading && <VideoLoader />}
			{info && (
				<>
					<DetailedVideo info={info} download={download} />
				</>
			)}
		</div>
	)
}

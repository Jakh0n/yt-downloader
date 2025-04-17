import { VideoInfo as VideoInfoType } from '@/types'
import { toast } from 'sonner'
import VideoInfo from './video-info'

interface DetailedVideoProps {
	info: VideoInfoType
	download: (format: 'mp4' | 'mp3') => void
}

const DetailedVideo = ({ info, download }: DetailedVideoProps) => {
	return (
		<div>
			<VideoInfo info={info} />
			<div className='flex gap-2 mt-4'>
				<button
					onClick={() => {
						toast.promise(Promise.resolve(download('mp4')), {
							loading: 'Started downloading...',
							success: 'Downloaded!',
							error: 'Error downloading!',
						})
					}}
					className='flex-1 bg-green-600 text-white py-2 rounded'
				>
					Download MP4
				</button>
				<button
					onClick={() => {
						toast.promise(Promise.resolve(download('mp3')), {
							loading: 'Started downloading...',
							success: 'Downloaded!',
							error: 'Error downloading!',
						})
					}}
					className='flex-1 bg-purple-600 text-white py-2 rounded'
				>
					Download MP3
				</button>
			</div>
		</div>
	)
}

export default DetailedVideo

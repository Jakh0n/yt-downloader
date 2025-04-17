import { Skeleton } from '@/components/ui/skeleton'

const VideoLoader = () => {
	return (
		<div>
			<div className=' space-y-2'>
				<Skeleton className='h-6 w-3/4' />
				<Skeleton className='h-4 w-1/2' />
				<Skeleton className='h-64 w-full rounded-md' />
			</div>

			<div className='flex gap-2 mt-4'>
				<Skeleton className='flex-1 h-10 rounded bg-green-600/30' />{' '}
				<Skeleton className='flex-1 h-10 rounded bg-purple-600/30' />{' '}
			</div>
		</div>
	)
}

export default VideoLoader

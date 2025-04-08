export default function VideoInfo({ info }: { info: any }) {
	return (
		<div>
			<img src={info.thumbnail} className='rounded mb-2' alt='thumbnail' />
			<h2 className='text-lg font-bold'>{info.title}</h2>
			<p className='text-sm text-gray-600'>{info.channel}</p>
		</div>
	)
}

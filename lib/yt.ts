import { execSync } from 'child_process'

export const getVideoInfo = (url: string) => {
	try {
		const result = execSync(`yt-dlp --dump-json "${url}"`, {
			encoding: 'utf-8',
		})
		const json = JSON.parse(result)
		return {
			title: json.title,
			thumbnail: json.thumbnail,
			channel: json.channel,
		}
	} catch {
		return null
	}
}

export const getDownloadCommand = (url: string, format: 'mp4' | 'mp3') => {
	const file = `/tmp/video_${Date.now()}.${format}`
	const command = `yt-dlp ${
		format === 'mp3' ? '--extract-audio --audio-format mp3' : ''
	} -o "${file}" "${url}"`
	return { command, outputPath: file }
}

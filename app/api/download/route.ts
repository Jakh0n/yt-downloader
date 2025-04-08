import { getDownloadCommand } from '@/lib/yt'
import { execSync } from 'child_process'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { url, format } = await req.json()
	const { command, outputPath } = getDownloadCommand(url, format)

	try {
		// Download video
		execSync(command)

		// Check file exists
		if (!fs.existsSync(outputPath)) {
			return NextResponse.json({ error: 'File not found' }, { status: 500 })
		}

		// Create file response
		const file = await fs.promises.readFile(outputPath)
		const res = new NextResponse(file)
		res.headers.set('Content-Type', 'application/octet-stream')
		res.headers.set(
			'Content-Disposition',
			`attachment; filename="video.${format}"`
		)

		return res
	} catch (err) {
		console.error('Download error:', err)
		return NextResponse.json({ error: 'Download failed' }, { status: 500 })
	}
}

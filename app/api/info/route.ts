import { getVideoInfo } from '@/lib/yt'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const url = req.nextUrl.searchParams.get('url')
	if (!url) return NextResponse.json({ error: 'URL missing' }, { status: 400 })

	const info = getVideoInfo(url)
	if (!info)
		return NextResponse.json({ error: 'Fetch failed' }, { status: 500 })

	return NextResponse.json(info)
}

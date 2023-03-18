export interface PageLink {
	url: string | null
	label: string
	active: boolean
}

export interface PaginationResponse<T> {
	current_page: number
	data: T[]
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	links: PageLink[]
	next_page_url: string | null
	path: string
	per_page: number
	prev_page_url: string | null
	to: number
	total: number
}

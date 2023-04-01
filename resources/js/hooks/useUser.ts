import {
	ErrorBag,
	Errors,
	Page,
	PageProps
} from '@inertiajs/core'
import { User } from '@/types/user.type'
import { usePage } from '@inertiajs/react'

interface InertiaPage extends Page<PageProps> {
	props: {
		errors: Errors & ErrorBag
		auth: {
			user: User
		}
	}
}

export const useUser = () =>
	usePage<InertiaPage & { [key: string]: any }>().props.auth
		.user

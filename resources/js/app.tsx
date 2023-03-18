import '../css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { MetaMaskProvider } from 'metamask-react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
	title: title => `${title} - ArtBits`,
	resolve: name =>
		resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob('./Pages/**/*.tsx')
		),
	setup({ el, App, props }) {
		const root = createRoot(el)

		root.render(
			<MetaMaskProvider>
				<App {...props} />
			</MetaMaskProvider>
		)
	},
	progress: {
		delay: 250,
		color: '#384bca',
		includeCSS: true,
		showSpinner: false
	}
})

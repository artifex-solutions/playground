import { defineCollection } from '#pruvious'

export default defineCollection({
	name: 'settings',
	mode: 'single',
	apiRoutes: { read: 'public' },
	dashboard: {
		fieldLayout: [
			{
				Header: ['headerMenu'],
				Footer: ['copyrightText', 'socialMedia'],
			},
		],
	},
	fields: {
		headerMenu: {
			type: 'repeater',
			options: {
				addLabel: 'Add menu item',
				subfields: {
					link: { type: 'link', options: { required: true } },
					label: { type: 'text', options: { required: true } },
				},
				fieldLayout: [['link', 'label']],
			},
		},
		copyrightText: {
			type: 'text',
			options: {
				required: true,
			},
		},
		socialMedia: {
			type: 'repeater',
			options: {
				addLabel: 'Add social media link',
				subfields: {
					link: { type: 'link', options: { required: true } },
				},
				fieldLayout: [['link']],
			},
		},
	},
})

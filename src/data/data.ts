export interface ILinks {
	name: string
	href: string
	title: string
}

export interface IInfoItem {
	icon: string
	text: string
}

export const navLinks: ILinks[] = [
	{ name: 'Домашняя страница', href: '/', title: 'Домашняя страница' },
	{ name: 'Цены', href: '/price', title: 'Цены' },
	{ name: 'Работы', href: '/works', title: 'Работы' },
	{ name: 'Обо мне', href: '/about', title: 'Обо мне' },
	{ name: 'Отзывы', href: '/reviews', title: 'Отзывы' },
]

export const services: ILinks[] = [
	{ name: 'Терапия', href: '/price', title: 'Терапия' },
	{ name: 'Хирургия', href: '/price', title: 'Хирургия' },
	{
		name: 'Профилактическая стоматология',
		href: '/price',
		title: 'Гигиена',
	},
]

export const contacts: string[] = [
	'Телефон: +995 595 000 849',
	'Почта: drchernenkonikita@gmail.com',
	'Telegram: @Dr_Black_Golub',
]

export const info: IInfoItem[] = [
	{ icon: '/warranty.svg', text: 'Гарантия качества 1 год' },
	{
		icon: '/phone.svg',
		text: 'Личный номер телефона. Всегда на связи с пациентом',
	},
	{ icon: '/cash.svg', text: 'Фиксированная цена' },
	{
		icon: '/calendar.svg',
		text: 'Прием ведется Пн-Сб, с 15:00 до 19:00',
	},
	{ icon: '/like.svg', text: 'Более 1000 довольных пациентов' },
]

export const facts: string[] = [
	`Возраст: ${calculateAge()} лет`,
	`Опыт работы: ${calculateAge() - 22} лет`,
	'Обучался стоматологии в России и Чехии',
	'Опыт работы в челюстно-лицевой хирургии',
	'Факт 4',
	'Факт 5',
]

export function calculateAge(): number {
	const birthDate = new Date('1996-12-06')
	const today = new Date()
	const age = today.getFullYear() - birthDate.getFullYear()
	const isBeforeBirthday =
		today <
		new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
	return age - (isBeforeBirthday ? 1 : 0)
}

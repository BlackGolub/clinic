export interface Currency {
	imgSrc: string
	alt: string
}

export const currency: Currency[] = [
	{
		imgSrc: '/lari.svg',
		alt: 'GEL',
	},
	{
		imgSrc: '/dollar.svg',
		alt: 'USD',
	},
	{
		imgSrc: '/ruble.svg',
		alt: 'RUB',
	},
]

export interface Service {
	name: string
	price: number
}

export const therapy: Service[] = [
	{ name: 'Консультация', price: 0 },
	{
		name: 'Лечение поверхностного кариеса/пломбирование зубов центральной и жевательной групп в комплекте со светоотверждаемой пломбой',
		price: 100,
	},
	{
		name: 'Лечение среднего, глубокого кариеса зубов центральной и жевательной групп, в комплекте с пломбой из композита',
		price: 120,
	},
	{ name: 'Изменение формы зуба', price: 150 },
	{ name: 'Лечение пульпита', price: 300 },
	{
		name: 'Лечение зубов (пародонтит/повторное лечение)',
		price: 350,
	},
]

export const prevention: Service[] = [
	{ name: 'Профессиональная гигиена полости рта и зубов', price: 150 },
	{
		name: 'Профессиональное отбеливание зубов',
		price: 500,
	},
]

export const surgery: Service[] = [
	{ name: 'Удаление зуба', price: 100 },
	{
		name: 'Удаление зуба мудрости',
		price: 150,
	},
	{ name: 'Пластика уздечки губы', price: 170 },
	{
		name: 'Удаление ретенированного дистопированного зуба',
		price: 200,
	},
	{
		name: 'Пластика уздечки языка',
		price: 250,
	},
]

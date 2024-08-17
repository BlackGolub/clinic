import { Dropdown } from '@/components/dropdown'
import Layout from '@/components/layout'
import Image from 'next/image'
import { ReactNode } from 'react'
import { prevention, surgery, therapy } from '../../data/data_price'

interface Currency {
	img: ReactNode
}

const currency: Currency[] = [
	{
		img: (
			<Image
				src={`${process.env.BASE_PATH}/favicon.ico`}
				alt='GEL'
				width={40}
				height={40}
			/>
		),
	},
	{
		img: (
			<Image
				src={`${process.env.BASE_PATH}/favicon.ico`}
				alt='USD'
				width={40}
				height={40}
			/>
		),
	},
	{
		img: (
			<Image
				src={`${process.env.BASE_PATH}/favicon.ico`}
				alt='RUB'
				width={40}
				height={40}
			/>
		),
	},
]

export default function PrisePages() {
	return (
		<Layout>
			<>
				<h1 className='text-4xl font-bold text-center my-10'>Цены</h1>
				<div className='flex justify-center items-center gap-5'>
					{currency.map((el, key) => (
						<div key={key}>{el.img}</div>
					))}
				</div>
			</>
			<Dropdown title='Терапия' items={therapy} />
			<Dropdown title='Хирургия' items={surgery} />
			<Dropdown title='Профилактическая стоматология' items={prevention} />
		</Layout>
	)
}

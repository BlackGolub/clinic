'use client'

import Dropdown from '@/components/dropdown'
import Layout from '@/components/layout'
import Image from 'next/image'
import { useState } from 'react'
import { currency, prevention, surgery, therapy } from '../../data/data_price'

export default function PrisePages() {
	const [activeCurrency, setActiveCurrency] = useState(currency[0].alt)

	const handleCurrencyClick = (alt: string) => {
		setActiveCurrency(alt)
	}

	const activeCurrencyData = currency.find(c => c.alt === activeCurrency) || {
		alt: '',
		imgSrc: '',
	}

	return (
		<Layout>
			<>
				<h1 className='text-6xl font-bold text-center my-10'>Цены</h1>
				<div className='flex justify-center items-center gap-5'>
					{currency.map((el, index) => (
						<div
							key={index}
							className={`p-2 m-2 rounded-full cursor-pointer border-2 shadow-lg ${
								activeCurrency === el.alt
									? 'bg-[#B0B0B0] border-black'
									: 'bg-gray-100 border-transparent'
							}`}
							onClick={() => handleCurrencyClick(el.alt)}
						>
							<Image src={el.imgSrc} alt={el.alt} width={40} height={40} />
						</div>
					))}
				</div>
			</>
			<Dropdown
				title='Терапия'
				items={therapy}
				currencyData={activeCurrencyData}
			/>
			<Dropdown
				title='Хирургия'
				items={surgery}
				currencyData={activeCurrencyData}
			/>
			<Dropdown
				title='Профилактическая стоматология'
				items={prevention}
				currencyData={activeCurrencyData}
			/>
		</Layout>
	)
}

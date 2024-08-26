'use client'

import Layout from '@/components/layout'
import MySlider from '@/components/swiper'
import { experience } from '@/data/data_experience'
import { diplomas } from '@/data/data_slides'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function AboutPages() {
	const [totalExperience, setTotalExperience] = useState(0)

	const calculateTotalExperience = () => {
		let total = 0

		experience.forEach(exp => {
			if (typeof exp.experience === 'string') {
				total += parseInt(exp.experience)
			} else if (exp.experience instanceof Date) {
				const startDate = exp.experience
				const today = new Date()
				const years = today.getFullYear() - startDate.getFullYear()
				const months = today.getMonth() - startDate.getMonth()

				total += years + (months > 0 ? months / 12 : 0) * 2
			}
		})

		setTotalExperience(total)
	}

	useEffect(() => {
		calculateTotalExperience()
	}, [])

	return (
		<Layout>
			<div className='flex flex-col p-10'>
				<div className='flex w-full mb-16'>
					<Image
						src={`/doctor.jpg`}
						alt='Фото доктора'
						height={750}
						width={400}
					/>
					<div className='px-5'>
						<h1 className='text-4xl mb-5'>Опыт работы</h1>
						{experience.map((exp, index) => (
							<div key={index} className='mb-4'>
								<p className='font-bold'>{exp.year}</p>
								<ul>
									{exp.text.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							</div>
						))}
						<p className='mt-10 text-2xl'>
							<strong>Опыт работы по трудовой:</strong>
							{totalExperience.toFixed(1)} лет
						</p>
					</div>
				</div>
				<div className='flex flex-col items-center content-center'>
					<h2 className='mb-6 text-4xl'>
						<strong>Дипломы и сертификаты</strong>
					</h2>
					<MySlider slides={diplomas} simple />
				</div>
			</div>
		</Layout>
	)
}

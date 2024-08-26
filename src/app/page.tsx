import Layout from '@/components/layout'
import MySlider from '@/components/swiper'
import { slides } from '@/data/data_slides'
import Image from 'next/image'
import { facts, info } from '../data/data'

export default function HomePage() {
	return (
		<Layout>
			<div
				className='relative h-[50vh] bg-cover bg-center bg-overlay'
				style={{
					backgroundImage: `url(${process.env.BASE_PATH}/background.jpg)`,
				}}
			>
				<div className='absolute bottom-[100px] flex flex-col items-center justify-center p-8 bg-transparent w-full h-1/2 text-black'>
					<h1 className='text-2xl mb-2 w-full'>Хирург-Терапевт</h1>
					<h1 className='text-4xl mb-8 w-full'>Черненко Никита Романович</h1>
					<ul className='w-full'>
						{info.map((el, index) => (
							<li key={index} className='flex items-center text-2xl mb-5'>
								<Image src={el.icon} alt={'Иконка'} width={35} height={35} />
								<span className='ml-2'>{el.text}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<MySlider slides={slides} />
			<div className='flex flex-row items-center justify-center p-8'>
				<Image
					src={`${process.env.BASE_PATH}/doctor.jpg`}
					alt='Photo of the doctor'
					width={400}
					height={750}
					className='mr-8'
				/>
				<section className='p-[30px] text-left'>
					<h1 className='font-bold text-3xl mb-[30px]'>Обо мне</h1>
					<ul className='text-2xl'>
						{facts.map((fact: string, index: number) => (
							<li key={index} className='mb-[10px] mt-[10px]'>
								{fact}
							</li>
						))}
					</ul>
				</section>
			</div>
		</Layout>
	)
}

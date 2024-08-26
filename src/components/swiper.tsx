'use client'
import Image from 'next/image'
import { useState } from 'react'

interface ISlide {
	src: string
	header?: string
	text?: string
}

interface MySliderProps {
	slides: ISlide[]
	simple?: boolean
}

const MySlider: React.FC<MySliderProps> = ({ slides, simple = false }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const nextSlide = () => {
		setCurrentSlide(prev => (prev + 1) % slides.length)
	}

	const prevSlide = () => {
		setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
	}

	if (simple) {
		return (
			<div className='flex items-center bg-gray-800 overflow-x-auto space-x-6'>
				{slides.map((slide, index) => (
					<div key={index} className='flex-none p-10'>
						<Image
							src={slide.src}
							alt={`Слайд ${index}`}
							height={300}
							width={300}
						/>
					</div>
				))}
			</div>
		)
	}

	const getSlideClass = (index: number) => {
		const isCurrent = index === currentSlide
		const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
		const isNext = index === (currentSlide + 1) % slides.length

		return `absolute flex flex-col items-center justify-center transition-all duration-300 ${
			isCurrent
				? 'w-full h-full text-3xl font-bold z-20'
				: 'w-[250px] h-[300px] text-xl text-gray-800'
		} ${isPrev || isNext ? 'opacity-50' : 'opacity-100'}`
	}

	const getSlideStyle = (index: number) => {
		const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
		const isNext = index === (currentSlide + 1) % slides.length

		return {
			transform: `translateX(${isPrev ? '-60%' : isNext ? '60%' : '0'})`,
			zIndex: index === currentSlide ? 20 : 10,
		}
	}

	return (
		<div className='relative flex items-center p-6 w-full bg-gray-800'>
			<div className='relative w-[60%] flex items-center justify-center h-[800px]'>
				<button
					onClick={prevSlide}
					className='absolute left-0 p-2 bg-gray-800 text-white rounded-full z-30 border-2 border-white'
				>
					&#8249;
				</button>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={getSlideClass(index)}
						style={getSlideStyle(index)}
					>
						<Image src={slide.src} alt='Слайд' height={750} width={400} />
					</div>
				))}
				<button
					onClick={nextSlide}
					className='absolute right-0 p-2 bg-gray-800 text-white rounded-full z-30 border-2 border-white'
				>
					&#8250;
				</button>
			</div>
			<div className='w-[40%] ml-4 flex flex-col items-center justify-center h-[800px]'>
				<h1 className='text-4xl p-2 mb-5 bg-white text-black'>
					{slides[currentSlide].header}
				</h1>
				<p className='mt-3 p-2 text-2xl bg-white text-black'>
					{slides[currentSlide].text}
				</p>
			</div>
		</div>
	)
}

export default MySlider

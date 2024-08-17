import dynamic from 'next/dynamic'
import Image from 'next/image'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

const Carousel: React.FC = () => {
	const settings = {
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		infinite: true,
		speed: 500,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<div className='relative w-full max-w-screen-lg mx-auto'>
			<Slider {...settings}>
				<div className='p-2'>
					<div className='relative bg-gray-300 h-64 rounded-lg overflow-hidden shadow-lg'>
						<Image
							src={`${process.env.BASE_PATH}/doctor.jpg`}
							alt='Photo of the doctor'
							width={400}
							height={750}
							className='mr-8'
						/>
					</div>
				</div>
				<div className='p-2'>
					<div className='relative bg-gray-300 h-64 rounded-lg overflow-hidden shadow-lg'>
						<Image
							src={`${process.env.BASE_PATH}/doctor.jpg`}
							alt='Photo of the doctor'
							width={400}
							height={750}
							className='mr-8'
						/>
					</div>
				</div>
				<div className='p-2'>
					<div className='relative bg-gray-300 h-64 rounded-lg overflow-hidden shadow-lg'>
						<Image
							src={`${process.env.BASE_PATH}/doctor.jpg`}
							alt='Photo of the doctor'
							width={400}
							height={750}
							className='mr-8'
						/>
					</div>
				</div>
			</Slider>
		</div>
	)
}

export default Carousel

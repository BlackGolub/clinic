import Image from 'next/image'
import Link from 'next/link'
import { ILinks, navLinks } from '../data/data'

const Header: React.FC = () => {
	return (
		<header className='w-full h-48 border-b border-[#edeeef] bg-white sticky top-0 left-0 z-50'>
			<div className='mx-auto px-[30px] p-2 flex flex-row items-center justify-between'>
				<Link href='/'>
					<Image
						src={`${process.env.BASE_PATH}/logo_transparent.png`}
						alt='Logo'
						width={150}
						height={150}
					/>
				</Link>
				<nav className='flex space-x-4 justify-between'>
					{navLinks.map((el: ILinks, index: number) => (
						<Link
							key={index}
							className='inline-flex items-center justify-center bg-transparent border-none hover:opacity-60 hover:border-black border-gray-300 transition-all duration-300 py-3 px-4 text-2xl cursor-pointer'
							href={el.href}
							title={el.title}
						>
							<span className='text-sm md:text-xl'>{el.name}</span>
						</Link>
					))}
				</nav>
				<Link
					className='bg-black text-white h-[70px] flex items-center justify-center rounded-md px-6 text-2xl'
					href='/appointment'
					title='Записаться'
				>
					Записаться
				</Link>
			</div>
		</header>
	)
}

export default Header

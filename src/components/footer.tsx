import Link from 'next/link'
import { contacts, ILinks, navLinks, services } from '../data/data'

const Footer: React.FC = () => {
	const sections = [
		{
			title: 'Услуги',
			items: services,
		},
		{
			title: 'Навигация',
			items: navLinks,
		},
		{
			title: 'Контакты',
			items: contacts,
		},
	]

	return (
		<footer className='bg-gray-800 text-white p-8'>
			<div className='container mx-auto flex justify-between'>
				{sections.map((section, index) => (
					<div key={index} className='flex-1'>
						<h2 className='text-xl font-bold mb-4'>{section.title}</h2>
						<ul>
							{section.items.map((item: ILinks | string, itemIndex) => (
								<li key={itemIndex} className='mb-2'>
									{typeof item === 'string' ? (
										item
									) : (
										<Link
											href={item.href}
											title={item.title}
											className='hover:underline'
										>
											{item.name}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	)
}

export default Footer

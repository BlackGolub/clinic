import { useState } from 'react'
import PriceDisplay from './price_display'

interface Item {
	name: string
	price?: number
	imgSrc?: string
}

interface CurrencyData {
	alt: string
	imgSrc: string
}

interface DropdownProps {
	title: string
	items: Item[]
	currencyData: CurrencyData
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, currencyData }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='w-[80%] mx-auto my-8'>
			<div
				className='flex justify-between items-center p-8 bg-[rgba(125,185,179,1)] text-white text-2xl font-bold cursor-pointer transition-all duration-300'
				onClick={toggleDropdown}
			>
				<span>{title}</span>
			</div>
			<div
				className={`overflow-hidden transition-all duration-600 ${
					isOpen ? 'h-auto' : 'max-h-0'
				}`}
			>
				<ul className='bg-[rgba(125,185,179,0.9)] text-white p-8 space-y-2'>
					{items.map((item, index) => (
						<li
							key={index}
							className='flex justify-between items-center border-b border-white pb-2 text-lg'
						>
							<span className='flex-1 mr-4 break-words'>{item.name}</span>
							{item.price !== undefined && (
								<PriceDisplay price={item.price} currencyData={currencyData} />
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown

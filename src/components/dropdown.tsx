'use client'

import { useState } from 'react'

interface Item {
	name: string
	price?: number
}

interface DropdownProps {
	title: string
	items: Item[]
}

export const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
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
					isOpen ? 'max-h-96' : 'max-h-0'
				}`}
			>
				<ul className='bg-[rgba(125,185,179,0.9)] text-white p-8 space-y-2'>
					{items.map((item, index) => (
						<li
							key={index}
							className='flex justify-between border-b border-white pb-2 text-lg'
						>
							<span>{item.name}</span>
							{item.price !== undefined && (
								<span className='ml-4'>{item.price}</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

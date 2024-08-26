import Image from 'next/image'

interface PriceDisplayProps {
	price: number
	currencyData: {
		alt: string
		imgSrc: string
	}
}

const convertPrice = (price: number, currency: string) => {
	let convertedPrice: number
	switch (currency) {
		case 'USD':
			convertedPrice = price * 0.4
			break
		case 'RUB':
			convertedPrice = price * 33
			break
		default:
			convertedPrice = price
	}

	return Math.floor(convertedPrice).toLocaleString('ru-RU')
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, currencyData }) => {
	return (
		<div className='flex items-center'>
			<span className='ml-4'>{convertPrice(price, currencyData.alt)}</span>
			{currencyData.imgSrc && (
				<Image
					className='ml-2 white-color'
					src={currencyData.imgSrc}
					alt={currencyData.alt}
					width={20}
					height={20}
				/>
			)}
		</div>
	)
}

export default PriceDisplay

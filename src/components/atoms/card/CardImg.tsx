import { ImgHTMLAttributes } from 'react'

interface CardImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	variant?: 'top' | 'bottom'
}

const CardImg = ({ variant = 'top', ...rest }: CardImgProps) => {
	return <img className={`card-img-${variant}`} {...rest} />
}

export default CardImg

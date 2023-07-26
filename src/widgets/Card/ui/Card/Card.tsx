import React from 'react'
import classNames from 'classnames'
import cls from './Card.module.scss'
import ShortText, {
	ShortTextTheme,
} from '../../../../shared/ui/ShortText/ShortText'
import imgIcon from '../../../../shared/assets/23615491-1668532305.webp.png'
import { CardAuthor } from '../../../BigCard/ui/BigCardAuthor/CardAuthor'
import CardDetails from '../../../BigCard/ui/BigCardDetails/CardDetails'

interface CardProps {
	className?: string
	img?: string
	price?: number
}

export const Card = (props: CardProps) => {
	const { className, img, price } = props
	return (
		<div className={classNames(cls.card, {}, [className])}>
			<div className={cls.img}>
				{!img ? <img src={imgIcon} alt='' /> : <img src={img} alt='' />}
			</div>
			<div className={cls.content}>
				<div className={cls.info}>
					<ShortText
						text={'Репетитор по сольфеджио онлайн. Подготовка к экзамену'}
						theme={ShortTextTheme.WITHATTENUATION}
					/>
				</div>
				<div className={cls.author}>
					<CardAuthor />
				</div>
				<div className={cls.details}>
					<CardDetails cost={price} />
				</div>
			</div>
		</div>
	)
}

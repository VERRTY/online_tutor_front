import classNames from 'classnames'
import cls from './BigCard.module.scss'
import imgIcon from '../../../../shared/assets/23615491-1668532305.webp.png'
import ShortText, {
	ShortTextTheme,
} from '../../../../shared/ui/ShortText/ShortText'
import { CardAuthor } from '../../../Card/ui/CardAuthor/CardAuthor'
import CardDetails from '../../../Card/ui/CardDetails/CardDetails'

interface BigCardProps {
	className?: string
	id?: number
	description?: string
	img?: string
	finishDateTime?: string
	createdDate?: string
	price?: number
	title?: string
	startDateTime?: string
}

export const BigCard = (props: BigCardProps) => {
	const {
		className,
		img,
		price,
		createdDate,
		description,
		finishDateTime,
		id,
		startDateTime,
		title,
	} = props

	return (
		<div className={classNames(cls.card, {}, [className])}>
			<div className={cls.img}>
				{!img ? (
					<img src={imgIcon} alt='' className={cls.defaultImage} />
				) : (
					<img src={img} alt='' />
				)}
			</div>
			<div className={cls.content}>
				<div className={cls.info}>английсий А2</div>
				<div className={cls.data}>чт, 12:00 – 12:55</div>
				<div className={cls.author}>
					<CardAuthor />
				</div>
				<div className={cls.details}>
					<CardDetails cost={price || 1000} />
				</div>
			</div>
		</div>
	)
}

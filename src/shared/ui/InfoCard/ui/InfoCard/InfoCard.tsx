import cls from './InfoCard.module.scss'
import { ReactComponent as IO } from '../../../../assets/svg/i.svg'
import { ReactComponent as IOGREEN } from '../../../../assets/svg/i green.svg'
import { ReactComponent as IORED } from '../../../../assets/svg/i red.svg'
import { ReactComponent as TeacherAvatar } from '../../../../assets/svg/teacherAvatar.svg'
import { ReactComponent as ArrowLeft } from '../../../../assets/svg/arrowLeft.svg'

interface InfoCardProps {
	name?: string
	email?: string
	title?: string
	id?: number
}

export const InfoCard = (props: InfoCardProps) => {
	const { name, email, title, id } = props
	return (
		<div className={cls.teacherInfo}>
			<div style={{ display: 'flex', gap: 15 }}>
				<TeacherAvatar />
				<div className={cls.shortInfo}>
					<p>{email || 'ggg@mail.ru'}</p>
					<p>{name || 'Артем'}</p>
					<div
						style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
						className={cls.opacity}
					>
						<p>Профессионал</p>
						<IO />
						<p>Офлайн</p>
					</div>
				</div>
			</div>
			<button className={cls.goButton}>
				<ArrowLeft />
				Связаться с продавцом
			</button>
			<ul>
				<li>
					Репутация
					<label style={{ color: '#FFA800' }}>5.0</label>
				</li>
				<li>
					Выполнено заказов
					<label>50</label>
				</li>
				<li>
					5 оценок в заказах
					<label>
						<IOGREEN /> 5 <IORED /> 0
					</label>
				</li>
				<li>На сайте с 3 ноября 2021</li>
			</ul>
		</div>
	)
}

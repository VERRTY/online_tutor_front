import cls from './Category.module.scss'
import { ReactComponent as HomeSVG } from '../../../images/svg/home.svg'
import { ReactComponent as PesonSVG } from '../../../images/svg/person.svg'
import { ReactComponent as GroupPerson } from '../../../images/svg/groupOfPerson.svg'

const CategoryPage = () => {
	const items = [
		{
			id: 1,
			title: 'Hello',
			status: 3,
		},
		{
			id: 2,
			title: 'Hello',
			status: 3,
		},
		{
			id: 3,
			title: 'Hello',
			status: 3,
		},
		{
			id: 4,
			title: 'Hello',
			status: 5,
		},
		{
			id: 5,
			title: 'Hello',
			status: 5,
		},
	]
	return (
		<div className={cls.Category}>
			<div className={cls.mainInfo}>
				<div className={cls.text}>
					<h1>Английский язык</h1>
					<p>Изучить английский язык с нуля до TOEFL</p>
				</div>
				<div className={cls.image}>
					<HomeSVG />
				</div>
			</div>
			<div className={cls.undeLine}></div>
			<div className={cls.choseCategory}>
				<p className={cls.text}>Выберите тип обучения</p>
				<div className={cls.buttonsBlock}>
					<button>
						<PesonSVG />
						Индивидуальные уроки
					</button>
					<button>
						<GroupPerson />
						Групповые занятия
					</button>
				</div>
			</div>
			<div className={cls.topIndividual}>
				<h1>Лучшие индивидуальные занятия</h1>
				<div className={cls.itemsBlock}>
					{items.map(item => (
						<div className={cls.item}>
							<div>{item.title}</div>
						</div>
					))}
				</div>
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}
				>
					<button className={cls.seeAll}>Посмотреть все</button>
				</div>
			</div>
			<div className={cls.topIndividual}>
				<h1>Лучшие индивидуальные занятия</h1>
				<div className={cls.itemsBlock}>
					{items
						.filter(item => item.status === 3)
						.map(item => (
							<div key={item.id} className={cls.groupItem}>
								<div>{item.title}</div>
							</div>
						))}
				</div>
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}
				>
					<button className={cls.seeAll}>Посмотреть все</button>
				</div>
			</div>
		</div>
	)
}

export default CategoryPage

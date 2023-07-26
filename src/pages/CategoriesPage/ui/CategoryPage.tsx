import cls from './Category.module.scss'
import { ReactComponent as HomeSVG } from '../../../shared/assets/svg/home.svg'
import { ReactComponent as PesonSVG } from '../../../shared/assets/svg/person.svg'
import { ReactComponent as GroupPerson } from '../../../shared/assets/svg/groupOfPerson.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useHttp } from '../../../app/providers/axios/api'
import { Card } from '../../../widgets/Card'
import { useSelector } from 'react-redux'
import { BigCard } from '../../../widgets/BigCard'

interface Data {
	id: number
	description: string
	coverUrl: string
	finishDateTime: string
	createdDate: string
	price: number
	title: string
	startDateTime: string
}

const CategoryPage = () => {
	const [uploadData, setUploadData] = useState<Data[]>()

	const { loading, request } = useHttp()

	const getData = async () => {
		try {
			const data: any = await request('classes/groups', 'get')
			console.log(data)
			setUploadData(data)
		} catch (error) {
			console.error('Error fetching courses:', error)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	console.log(uploadData)

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
			<div style={{ position: 'relative' }}>
				<span className={cls.undeLine}></span>
			</div>
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
					{uploadData &&
						uploadData.map(item => <Card key={item.id} price={item.price} />)}
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
					<BigCard />
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

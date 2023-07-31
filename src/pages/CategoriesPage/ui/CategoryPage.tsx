import cls from './Category.module.scss'
import { ReactComponent as HomeSVG } from '../../../images/svg/home.svg'
import { ReactComponent as PesonSVG } from '../../../images/svg/person.svg'
import { ReactComponent as GroupPerson } from '../../../images/svg/groupOfPerson.svg'
import { useEffect } from 'react'
import { IndividualCourseBlock } from '../../../features/IndividualCourseBlick'
import { GroupCourseBlock } from '../../../features/GroupCourseBlick'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCategories} from '../../../features/Categories'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch/useAppDispatch'
import { fetchCategories } from '../../../features/Categories/model/services/fetchCategories'
import {courseIndividualActions} from "../../../entitise/CourseIndividual";
import {courseGroupActions} from "../../../entitise/CourseGroupe";

const CategoryPage = () => {
	const params = useParams()
	const { id } = params

	const dispatch = useAppDispatch()
	// const isLoading = useSelector(getCategoriesLoading)
	const categories = useSelector(getCategories)
	dispatch(courseIndividualActions.setLimit(5))
	dispatch(courseGroupActions.setLimit(3))

	useEffect(() => {
		const getCategories = async () => {
			await dispatch(fetchCategories())
		}
		getCategories()
	}, [])


	const myCategory = categories.find(item => item.id === parseInt(id))

	return (
		<div className={cls.Category}>
			<div className={cls.mainInfo}>
				<div className={cls.text}>
					{myCategory && <h1>{myCategory.name}</h1>}
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
				<IndividualCourseBlock categoryId={id} />
			</div>
			<div className={cls.topIndividual}>
				<GroupCourseBlock categoryId={id} />
			</div>
		</div>
	)
}

export default CategoryPage

import cls from './GroupCourseBlock.module.scss'
import { CourseList } from '../../CourseList/CourseList'
import Button, { ButtonTheme } from '../../../shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'
import { memo, useEffect } from 'react'
import {
	getGroupCourses,
	getGroupCoursesLoading,
} from '../../../entitise/CourseGroupe/model/selectors/GroupCoursesSelectors'
import { fetchGroupCourses } from '../../../entitise/CourseGroupe/model/services/fetchGroupCourses'
import { courseGroupActions } from '../../../entitise/CourseGroupe'
import { CardType } from '../../Card/ui/Card/Card'
import {courseIndividualActions} from "../../../entitise/CourseIndividual";

interface IndividualCourseProps {
	className?: string
	categoryId?: string
}

export const GroupCourseBlock = memo((props: IndividualCourseProps) => {
	const { className, categoryId } = props

	const dispatch = useAppDispatch()
	const GroupCourses = useSelector(getGroupCourses)
	const isLoading = useSelector(getGroupCoursesLoading)

	const handleAddCourse = async () => {
		dispatch(courseGroupActions.incrementPage())
		await dispatch(fetchGroupCourses({}))
	}

	useEffect(() => {
		dispatch(courseGroupActions.clear())
		const getIndividuals = async () => {
			await dispatch(fetchGroupCourses({}))
		}
		getIndividuals()

		return () => {
			dispatch(courseGroupActions.setPage(0))
		}

	}, [dispatch])

	return (
		<div className={classNames(cls.individualCourse, {}, [className])}>
			<h2 className={cls.title}>Лучшие групповые занятия</h2>
			<CourseList
				isLoading={isLoading}
				courses={GroupCourses}
				type={CardType.GROUPS}
				categoryId={categoryId}
			/>
			<Button
				className={cls.btnText}
				theme={ButtonTheme.DEFAULT}
				onClick={handleAddCourse}
			>
				Посмотреть все
			</Button>
		</div>
	)
})

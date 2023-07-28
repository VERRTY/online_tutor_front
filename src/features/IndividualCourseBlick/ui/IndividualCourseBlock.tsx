import cls from './IndividualCourseBlick.module.scss'
import { CourseList } from '../../CourseList/CourseList'
import Button, { ButtonTheme } from '../../../shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { fetchIndividualsCourses } from '../../../entitise/CourseIndividual/model/services/fetchIndividualsCourses'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'classnames'
import { memo, useEffect } from 'react'
import {
	courseIndividualActions,
	getIndividualsCourses,
	getIndividualsCoursesLoading,
} from '../../../entitise/CourseIndividual'

interface IndividualCourseProps {
	className?: string
	categoryId?: string
}

export const IndividualCourseBlock = memo((props: IndividualCourseProps) => {
	const { className, categoryId } = props

	const dispatch = useAppDispatch()
	const individualsCourses = useSelector(getIndividualsCourses)
	const isLoading = useSelector(getIndividualsCoursesLoading)

	const handleAddCourse = async () => {
		dispatch(courseIndividualActions.incrementPage())
		await dispatch(fetchIndividualsCourses({}))
	}

	useEffect(() => {
		const getIndividuals = async () => {
			await dispatch(fetchIndividualsCourses({}))
		}
		getIndividuals()

		return () => {
			dispatch(courseIndividualActions.clear())
		}
	}, [dispatch])

	return (
		<div className={classNames(cls.individualCourse, {}, [className])}>
			<h2 className={cls.title}>Лучшие индивидуальные занятия</h2>
			<CourseList
				isLoading={isLoading}
				courses={individualsCourses}
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

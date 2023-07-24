import cls from './Category.module.scss'

const CategoryPage = () => {
	return (
		<div className={cls.Category}>
			<div className={cls.mainInfo}>
				<div className={cls.text}>
					<h1>Английский язык</h1>
					<p>Изучить английский язык с нуля до TOEFL</p>
				</div>
				<div></div>
			</div>
		</div>
	)
}

export default CategoryPage

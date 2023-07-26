import cls from './Course.module.scss'
import { ReactComponent as StudyImage } from '../../../shared/assets/svg/studyImage.svg'
import { InfoCard } from '../../../widgets/InfoCard'

const CoursePage = () => {
	return (
		<div className={cls.coursePage}>
			<div className={cls.mainInfo}>
				<div className={cls.text}>
					<p>Онлайн репетитор по математике. Подготовка к орт первая часть</p>
					<div className={cls.shortInfoBlock}>
						<StudyImage className={cls.svgImage} />
						<div className={cls.description}>
							<h2 className={cls.about}>Об этом кворке</h2>
							<p className={cls.descriptInfo}>
								Доброго времени суток. Я являюсь онлайн репетитором по
								математике. Учусь на втором курсе математического факультета.
								Близок к подросткам и легко нахожу нужный подход. Сдал огэ на 5,
								егэ на 86. Имею за плечами один год репетиторсва: пара детишек
								из 7 класса, трое готовились к огэ и с нулевого уровня за год
								дошли до оценки хорошо-отлично. Кратенький экскурс по стажу моей
								работе провели, перейдем к формату занятий:
							</p>
							<p className={cls.descriptInfo}>
								Весь процесс проходит в дискорде.
							</p>
							<p className={cls.descriptInfo}>1. Даю теорию ребенку </p>
							<p className={cls.descriptInfo}>
								2. Рассматриваю парочку примеров
							</p>
							<p className={cls.descriptInfo}>
								3. Разбираемся с тем, что не понятно и затем даю пару заданий на
								закрепление.{' '}
							</p>
							<p className={cls.descriptInfo}>Занятие длится полтора часа. </p>
							<p className={cls.descriptInfo}>
								<strong>Вид науки:</strong> Технические науки
							</p>
							<p className={cls.descriptInfo}>
								<strong>Объем услуги в кворке:</strong> 1 час(60 мин)
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className={cls.detailsBlock}>
				<InfoCard />
				<div className={cls.shortDetails}></div>
			</div>
		</div>
	)
}

export default CoursePage

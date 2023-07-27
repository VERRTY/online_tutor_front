import { RoutePath } from '../../../shared/config/routeConfig/routeConfig'
import AppLink, { AppLinkTheme } from '../../../shared/ui/AppLink/AppLink'
import { ReactComponent as LogoIcon } from '../../../shared/assets/logo white.svg'

import cls from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={cls.footer}>
			<div className={cls.blocks}>
				<div className={cls.logo}>
					<AppLink
						className={cls.authBtn}
						to={RoutePath.main}
						theme={AppLinkTheme.PRIMARY}
					>
						<LogoIcon />
					</AppLink>
				</div>
				<div className={cls.links}>
					<AppLink className={cls.link} to={RoutePath.main}>
						Главная
					</AppLink>
					<AppLink className={cls.link} to={RoutePath.main}>
						Индивидуальные уроки
					</AppLink>
					<AppLink className={cls.link} to={RoutePath.main}>
						Групповые занятия
					</AppLink>
				</div>
				<div className={cls.contacts}>
					Служба поддержки: <br />
					8 800 333-45-45 <br />
					Будни: с 6 до 22 <br />
					Выходные: с 8 до 22
				</div>
			</div>
		</div>
	)
}

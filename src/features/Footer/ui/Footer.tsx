import { PoweredBy } from '@shared/assets/png'
import { Flex } from 'antd'
import cls from './Footer.module.scss'

export const Footer = () => {
    return (
        <Flex
            vertical
            gap={24}
            className={cls.footerContainer}
        >
            <Flex
                align='center'
                justify='space-between'
            >
                <span className={cls.footerLink}>Log In</span>
                <span className={cls.footerLink}>About Us</span>
                <span className={cls.footerLink}>Publishers</span>
                <span className={cls.footerLink}>Sitemap</span>
            </Flex>

            <img
                className={cls.poweredByImg}
                src={PoweredBy}
            />

            <span className={cls.copywright}>© 2023 Besider. Inspired by Insider</span>
        </Flex>
    )
}

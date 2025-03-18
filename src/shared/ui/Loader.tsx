import { LoadingIcon } from '@shared/assets/svg'
import cls from './Loader.module.scss'

export const Loader = () => {
    return (
        <div className={cls.loader}>
            <img src={LoadingIcon} />
        </div>

    )
}

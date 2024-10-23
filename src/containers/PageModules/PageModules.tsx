import cn from 'classnames'

import styles from './styles/PageModules.module.scss'

export default function PageModules({ className, children }: Props) {
    return (
        <div
            className={cn(styles.wrapper, {
                [className]: !!className,
            })}
        >
            {children}
        </div>
    )
}
export { PageModules }

type Props = {
    className?: string
    children?: React.ReactNode
}

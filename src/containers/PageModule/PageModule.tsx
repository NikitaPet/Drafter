import cn from 'classnames'

import styles from './styles/PageModule.module.scss'

export default function PageModule({ children, className }: Props) {
    return (
        <section
            className={cn(styles.wrapper, {
                [className]: !!className,
            })}
        >
            {children}
        </section>
    )
}
export { PageModule }

type Props = {
    className?: string
    children?: React.ReactNode
}

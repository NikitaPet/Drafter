import classNames from 'classnames'
import { FiFilter } from 'react-icons/fi'

import styles from './Filter.module.scss'

export default function Filter({
    styleClass = 'blue',
    className,
}: {
    styleClass?: string
    className?: string
}) {
    const outerClassName: string = className
    return (
        <div className={styles.wrapper}>
            <FiFilter
                className={classNames([
                    styles[styleClass],
                    { [outerClassName]: !!outerClassName },
                ])}
            />
        </div>
    )
}
export { Filter }

import cn from 'classnames'
import Header from '@layout/Header'
import Inter from '@/global/styles/fonts/Inter'
import WorkSans from '@/global/styles/fonts/WorkSans'

import 'global/styles/global-styles.scss'
import styles from '@layout/styles/layout.module.scss'

export default function RootLayout({ children }) {
    return (
        <html lang="ru" className={cn(Inter.variable, WorkSans.variable)}>
            <body>
                <div id={'layout'} className={styles.wrapper}>
                    <Header />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    )
}

import cn from 'classnames'
import Providers from '@layout/modules/Providers'
import Header from '@layout/modules/Header'
import { Inter } from '@global-styles/fonts'

import 'global/styles/global-styles.scss'
import styles from '@layout/styles/layout.module.scss'

export default function RootLayout({ children }) {
    return (
        <html lang="ru" className={cn(Inter.variable)}>
            <body>
                <Providers>
                    <div id={'layout'} className={styles.wrapper}>
                        <Header />
                        <main>{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    )
}

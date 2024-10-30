'use client'

import { Provider as StoreProvider } from 'store'
import store from 'store'


function LayoutProviders({ children }: Props) {
    return <StoreProvider store={store}>{children}</StoreProvider>
}
export default LayoutProviders
export { LayoutProviders as Providers }

type Props = {
    children?: React.ReactNode
}

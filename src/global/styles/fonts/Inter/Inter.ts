import { Inter as InterFont } from 'next/font/google'

const Inter = InterFont({
    subsets: ['latin', 'cyrillic'],
    variable: '--font-inter',
    display: 'swap',
    adjustFontFallback: false,
})

export default Inter
export { Inter }

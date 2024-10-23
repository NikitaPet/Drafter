import { Work_Sans as Font } from 'next/font/google'

const WorkSans = Font({
    subsets: ['latin'],
    variable: '--font-worksans',
    display: 'swap',
    adjustFontFallback: false,
})

export default WorkSans
export { WorkSans }

import { type FormSettings } from './components'

export const getNewPassword = (settings: FormSettings) => {
    const length = settings.length
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '%*()?@#$~'

    const characters = []
    if (settings.lowercase) characters.push(...alphabet.split(''))
    if (settings.uppercase) characters.push(...alphabet.toUpperCase().split(''))
    if (settings.numbers) characters.push(...numbers.split(''))
    if (settings.symbols) characters.push(...symbols.split(''))

    if (!characters.length || !settings.length) return

    let result = ''
    let counter = 0
    while (counter < length && characters.length > 0) {
        const charNum = Math.floor(Math.random() * characters.length)
        result += characters[charNum]
        if (settings.unrepeatable) characters.splice(charNum, 1)
        counter += 1
    }

    return result
}

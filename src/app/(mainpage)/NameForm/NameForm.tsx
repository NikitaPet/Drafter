import Module from '@/containers/PageModule'
import { Window, Input, Button } from './components'

import styles from './NameForm.module.scss'

export default function NameForm() {
    return (
        <Module className={styles['wrapper']}>
            <Window>
                <div className={styles.form}>
                    <h1>Начать</h1>
                    <div className={styles['input-section']}>
                        <h3>Напишите ваше имя</h3>
                        <Input placeholder="Ваше имя" />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button href={'/calculator'}>Открыть калькулятор</Button>
                    <Button href={'/password-generator'}>Открыть генератор</Button>
                </div>
            </Window>
        </Module>
    )
}
export { NameForm }

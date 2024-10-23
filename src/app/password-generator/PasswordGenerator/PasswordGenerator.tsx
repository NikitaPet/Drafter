import Module from '@/containers/PageModule'
import { Window, Form, List, Input, Checkbox, Button } from './components'

import styles from './PasswordGenerator.module.scss'

export default function PasswordGenerator() {
    return (
        <Module className={styles['wrapper']}>
            <Window>
                <h1 className={styles.title}>Генератор паролей</h1>
                <div className={styles.content}>
                    <Form>
                        <div className={styles['input-section']}>
                            <h3>Длина пароля:</h3>
                            <Input />
                        </div>

                        <div className={styles['checkbox-section']}>
                            <Checkbox name={'uppercase'} title={'Использовать прописные буквы'} />
                            <Checkbox name={'lowercase'} title={'Использовать строчные буквы'} />
                            <Checkbox name={'numbers'} title={'Использовать цифры'} />
                            <Checkbox
                                name={'symbols'}
                                title={'Использовать символы: %, *, ), ?, @, #, $, ~'}
                            />
                            <Checkbox
                                name={'unrepeatable'}
                                title={'Избегать повторения символов'}
                            />
                        </div>

                        <div className={styles.buttons}>
                            <Button>Сгенерировать пароль</Button>
                        </div>
                    </Form>

                    <List />
                </div>
            </Window>
        </Module>
    )
}
export { PasswordGenerator }

'use client'

import { useState } from 'react'
import evalExpression from 'eval-math-expression'
import Module from '@/containers/PageModule'
import { Window, Button } from './components'
import { Context } from './components'

import styles from './Calculator.module.scss'

export default function Calculator() {
    const [expression, setExpression] = useState('')
    const [result, setResult] = useState('')

    const getResult = () => {
        const round = (a: number, b: number) => Math.floor(a * b) / b
        try {
            const newResult = round(evalExpression(expression), 1000)
            setResult(String(newResult))
        } catch (error) {}
    }

    const addSign = (sign: string) => {
        setExpression(String(expression) + String(sign))
    }

    return (
        <Context.Provider value={{ expression, setExpression }}>
            <Module className={styles['wrapper']}>
                <Window>
                    <h3 className={styles['expression']}>{expression}</h3>
                    <h3 className={styles['result']}>{result}</h3>

                    <div className={styles.buttons}>
                        <div className={styles.signs}>
                            <Button
                                sign={'C'}
                                keyboard={'Delete'}
                                act={() => {
                                    setExpression('')
                                    setResult('')
                                }}
                            />
                            <Button
                                sign={'±'}
                                act={() => setExpression(String(-1 * evalExpression(expression)))}
                            />
                            <Button
                                sign={'%'}
                                keyboard={'%'}
                                act={() => setExpression(String(0.01 * evalExpression(expression)))}
                            />
                        </div>

                        <div className={styles.nums}>
                            <Button sign={'7'} keyboard={'7'} act={() => addSign('7')} />
                            <Button sign={'8'} keyboard={'8'} act={() => addSign('8')} />
                            <Button sign={'9'} keyboard={'9'} act={() => addSign('9')} />
                            <Button sign={'4'} keyboard={'4'} act={() => addSign('4')} />
                            <Button sign={'5'} keyboard={'5'} act={() => addSign('5')} />
                            <Button sign={'6'} keyboard={'6'} act={() => addSign('6')} />
                            <Button sign={'1'} keyboard={'1'} act={() => addSign('1')} />
                            <Button sign={'2'} keyboard={'2'} act={() => addSign('2')} />
                            <Button sign={'3'} keyboard={'3'} act={() => addSign('3')} />
                            <Button sign={'.'} keyboard={'.'} act={() => addSign('.')} />
                            <Button sign={'0'} keyboard={'0'} act={() => addSign('0')} />
                            <Button
                                sign={'⌫'}
                                keyboard={'Backspace'}
                                act={() => {
                                    setExpression(expression.substring(0, expression.length - 1))
                                }}
                            />
                        </div>

                        <div className={styles.operations}>
                            <Button sign={'÷'} keyboard={'/'} act={() => addSign('/')} />
                            <Button sign={'×'} keyboard={'*'} act={() => addSign('*')} />
                            <Button sign={'-'} keyboard={'-'} act={() => addSign('-')} />
                            <Button sign={'+'} keyboard={'+'} act={() => addSign('+')} />
                            <Button sign={'='} keyboard={'Enter'} act={() => getResult()} />
                        </div>
                    </div>
                </Window>
            </Module>
        </Context.Provider>
    )
}
export { Calculator }

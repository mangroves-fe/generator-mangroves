import React, { FC } from 'react'

import { HelloWorld } from '../src/index'

import styles from './style.module.css'

export interface IProps {
  prop: string
}

const App: FC<IProps> = () => {
  return (
    <div className={styles.app}>
      <HelloWorld/>
    </div>
  )
}

export default App

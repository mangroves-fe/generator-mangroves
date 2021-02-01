import React, { FC } from 'react'

export interface IProps {
  prop: string
}

const HelloWorld: FC<IProps> = () => {
  return (
    <>Start your component.</>
  )
}

export default HelloWorld

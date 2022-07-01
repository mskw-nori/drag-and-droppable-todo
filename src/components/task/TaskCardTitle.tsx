import React, { ChangeEvent, FormEvent, useState } from 'react'

import styles from '@/styles/home.module.css'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false)
  const [inputCardTitle, setInputCardTitle] = useState('ToDay')
  const handleClick = () => {
    setIsClick(true)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsClick(false)
  }
  return (
    <div className={styles.taskCardTitleArea} onClick={handleClick}>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input className={styles.taskCardTitleInput} autoFocus type="text" onChange={handleChange} maxLength={10} />
        </form>
      ) : (
        <p>{inputCardTitle}</p>
      )}
    </div>
  )
}

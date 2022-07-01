import React, { ChangeEvent, FormEvent } from 'react'
import { v4 as uuid } from 'uuid'

import styles from '@/styles/home.module.css'

export const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }: any) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const taskId = uuid()
    e.preventDefault()
    if (inputText === '') {
      return
    }
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task${taskId}`,
        text: inputText
      }
    ])
    setInputText('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={styles.taskAddInput} type="text" placeholder="タスクを入力" onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}

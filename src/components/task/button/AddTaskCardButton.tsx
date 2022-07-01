import React from 'react'
import { v4 as uuid } from 'uuid'

import styles from '@/styles/home.module.css'

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }: any) => {
  const addTaskCard = () => {
    const taskCardId = uuid()
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`
      }
    ])
  }
  return (
    <div className={styles.addTaskCardButtonArea}>
      <button className={styles.addTaskCardButton} onClick={addTaskCard}>
        +
      </button>
    </div>
  )
}

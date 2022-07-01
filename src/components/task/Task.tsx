import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { FaTrash } from 'react-icons/fa'

import styles from '@/styles/home.module.css'

export const Task = ({ task, taskList, setTaskList, index }: any) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task: any) => task.id !== id))
  }
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {provided => (
        <div className={styles.taskContainer} key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p className={styles.taskText}>{task.text}</p>
          <button className={styles.taskTrashButton} onClick={() => handleDelete(task.id)}>
            <FaTrash />
          </button>
        </div>
      )}
    </Draggable>
  )
}

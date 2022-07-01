import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { TaskCardTitle } from '@/components/task/TaskCardTitle'
import { Tasks } from '@/components/task/Tasks'
import { TaskAddInput } from '@/components/task/button/TaskAddInput'
import { TaskCardDeleteButton } from '@/components/task/button/TaskCardDeleteButton'
import styles from '@/styles/home.module.css'

export const TaskCard = ({ task, taskCardsList, setTaskCardsList, index }: any) => {
  const [inputText, setInputText] = useState<string>('')
  const [taskList, setTaskList] = useState<string[]>([])
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div className={styles.taskCard} ref={provided.innerRef} {...provided.draggableProps}>
          <div className={styles.taskTitleContainer} {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton task={task} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
          <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList} />
          <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  )
}

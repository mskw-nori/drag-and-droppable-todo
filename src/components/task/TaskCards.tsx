import React, { useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import styles from '@/styles/home.module.css'

import { TaskCard } from './TaskCard'
import { AddTaskCardButton } from './button/AddTaskCardButton'

type list = {
  id: string
  draggableId: string
}

const reorder = (taskCardsList: list[], startIndex: number, endIndex: any) => {
  // タスクを並び替える
  const remove = taskCardsList.splice(startIndex, 1)
  taskCardsList.splice(endIndex, 0, remove[0])
}
export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{ id: '0', draggableId: 'item0' }])

  const handleDragEnd = (result: DropResult) => {
    reorder(taskCardsList, result.source.index, result.destination?.index)
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {provided => (
          <div className={styles.taskCardsArea} {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardsList.map((task, index): any => (
              <TaskCard key={task.id} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} task={task} index={index} />
            ))}
            {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

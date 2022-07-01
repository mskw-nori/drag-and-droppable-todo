import React from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'

import { Task } from './Task'

const reorder = (taskList: [], startIndex: number, endIndex: any) => {
  // タスクを並び替える
  const remove = taskList.splice(startIndex, 1)
  taskList.splice(endIndex, 0, remove[0])
}

export const Tasks = ({ taskList, setTaskList }: any) => {
  const handleDragEnd = (result: DropResult) => {
    reorder(taskList, result.source.index, result.destination?.index)
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task: any, index: number) => (
                <div key={task.id}>
                  <Task task={task} taskList={taskList} setTaskList={setTaskList} index={index} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

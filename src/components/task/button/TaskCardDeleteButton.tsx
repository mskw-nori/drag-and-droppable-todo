import { FaTimes } from 'react-icons/fa'

import styles from '@/styles/home.module.css'

export const TaskCardDeleteButton = ({ task, taskCardsList, setTaskCardsList }: any) => {
  const taskCardDeleteButton = (id: any) => {
    setTaskCardsList(taskCardsList.filter((e: any) => e.id !== id))
  }
  return (
    <div>
      <button className={styles.taskCardDeleteButton} onClick={() => taskCardDeleteButton(task.id)}>
        <FaTimes />
      </button>
    </div>
  )
}

import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

export interface ITaskProps {
  id: number
  content: string
  isComplete: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<ITaskProps[]>([
    {
      id: 1,
      content: 'Task de test',
      isComplete: true,
    },
  ])

  function addNewTask(newContent: string) {
    if (newContent === '') {
      alert('Informe a task!')
    } else {
      const idRandom = (num: number) => Math.floor(Math.random() * num)

      const newTask = {
        id: idRandom(10),
        content: newContent,
        isComplete: false,
      }

      if (tasks.map((task) => task.content).includes(newTask.content)) {
        alert('Task existente!')
      } else {
        setTasks([...tasks, newTask])
      }
    }
  }

  function deleteTaskById(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <main className="flex items-center flex-col bg-base-gray-600 min-h-screen font-sans">
      <Header addNewTask={addNewTask} />
      <Tasks tasks={tasks} onDelete={deleteTaskById} />
    </main>
  )
}

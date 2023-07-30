import { PlusCircle } from 'phosphor-react'
import logoToDo from '../../public/todoLogo.svg'
import { useState, FormEvent } from 'react'

interface HeaderProps {
  addNewTask: (newContent: string) => void
}

export function Header({ addNewTask }: HeaderProps) {
  const [newContent, setNewContent] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event?.preventDefault()

    addNewTask(newContent)

    setNewContent('')
  }

  return (
    <>
      <header className="w-screen h-[12.5rem] bg-base-gray-700 flex items-center justify-center relative">
        <img src={logoToDo} alt="Logo todo list" />

        <form
          className="h-[3.375rem] 
          w-full 
          max-w-[46rem]
          flex 
          gap-2 
          absolute 
          bottom-[calc(-3.375rem/2)]
          py-0
          px-4"
          onSubmit={handleCreateNewTask}
        >
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="w-full 
            flex-1 
            text-base-gray-100 
            bg-base-gray-500 
            border 
            border-solid 
            border-base-gray-700 
            rounded-lg
            py-0
            px-4 
            text-16 
            outline-none
            focus:outline-product-purple-dark"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            className="h-full 
          py-0 
          px-4 
          bg-product-blue-dark 
          text-base-gray-100 
          border-none 
          rounded-lg 
          flex 
          items-center
          gap-2
          font-bold
          text-14 
          hover:bg-product-blue"
          >
            Criar
            <PlusCircle size={16} color="#F2F2F2" weight="bold" />
          </button>
        </form>
      </header>
    </>
  )
}

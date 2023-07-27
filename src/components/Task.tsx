import { Trash } from 'phosphor-react'
import { ITaskProps } from '../App'

interface Props {
  task: ITaskProps
  onDelete: (taskId: number) => void
  onCompleted: (taskId: number) => void
}

export function Task({ task, onDelete, onCompleted }: Props) {
  return (
    <>
      <div className="flex items-center gap-3 p-4 border border-solid rounded-lg bg-base-gray-500">
        <input
          type="checkbox"
          className="cursor-pointer outline-none"
          onClick={() => onCompleted(task.id)}
        />
        <>
          {task.isComplete ? (
            <>
              <p className="text-base-gray-100 font-normal text-sm mr-auto line-through">
                {task.content}
              </p>
            </>
          ) : (
            <p className="text-base-gray-100 font-normal text-sm mr-auto">
              {task.content}
            </p>
          )}
        </>
        <button
          className="rounded w-6 h-6 flex items-center justify-center"
          onClick={() => onDelete(task.id)}
        >
          <Trash size={16} color="#808080" weight="bold" />
        </button>
      </div>
    </>
  )
}

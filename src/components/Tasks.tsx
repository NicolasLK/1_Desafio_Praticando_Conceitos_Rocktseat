import { ClipboardText } from 'phosphor-react'
import { Task } from './Task'

export function Tasks() {
  return (
    <>
      <section className="my-0 mx-auto max-w-[46rem] w-full mt-[5.625rem] py-0 px-4">
        <header className="flex items-center justify-between mb-[1.5rem]">
          <div className="flex items-center gap-2">
            <p className="text-product-blue text-sm font-bold">
              Tarefas criadas
            </p>
            <span className="bg-base-gray-400 px-2 py-0.5 text-base-gray-200 rounded-full font-bold text-xs">
              0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-product-purple text-sm font-bold">Concluídas</p>
            <span className="bg-base-gray-400 px-2 py-0.5 text-base-gray-200 rounded-full font-bold text-xs">
              1 de 10
            </span>
          </div>
        </header>
        <article>
          {/* <Task /> */}
          <section className="flex items-center justify-center flex-col gap-4">
            <ClipboardText
              size={56}
              color="#808080"
              weight="bold"
              opacity={0.5}
            />
            <div>
              <span className="text-base text-base-gray-300 font-extrabold">
                Você ainda não tem tarefas cadastradas
              </span>
              <p className="text-base text-base-gray-300 font-normal">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </section>
        </article>
      </section>
    </>
  )
}

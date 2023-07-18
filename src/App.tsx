import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

export default function App() {
  return (
    <>
      <main className="flex items-center justify-center flex-col bg-feedback-danger">
        <Header />
        <form className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="rounded-lg 
            w-640
            font-sans 
            text-16 
            leading-140 
            font-normal
            p-4 
            text-base-gray-300 
            bg-base-gray-500 
            border 
            border-base-gray-700
            outline-0"
          />
          <button
            className="w-90
          bg-product-blue-dark 
          font-sans 
          text-14 
          text-base-gray-100 
          font-bold
          rounded-lg
          h-52
          p-4
          flex
          gap-2 
          items-center
          outline-0"
          >
            Criar
            <PlusCircle size={16} color="#F2F2F2" weight="bold" />
          </button>
        </form>
      </main>
    </>
  );
}

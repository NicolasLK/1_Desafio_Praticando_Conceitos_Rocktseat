import { PlusCircle } from "phosphor-react";
import logoToDo from "../../public/todoLogo.svg";

export function Header() {
  return (
    <>
      <header className="w-screen h-200 bg-base-gray-700 flex items-center justify-center relative">
        <img src={logoToDo} alt="Logo todo list" />

        <form
          className="h-54 
          w-full 
          max-w-736 
          flex 
          gap-2 
          absolute bottom-[calc(-3.375rem/2)]
          py-0
          px-4"
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
            outline-none"
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
          text-14"
          >
            Criar
            <PlusCircle size={16} color="#F2F2F2" weight="bold" />
          </button>
        </form>
      </header>
    </>
  );
}

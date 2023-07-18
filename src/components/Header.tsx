import logoToDo from "../../public/todoLogo.svg";

export function Header() {
  return (
    <>
      <header className="w-screen h-200 bg-base-gray-700 flex items-center justify-center">
        <img src={logoToDo} alt="Logo todo list" />
      </header>
    </>
  );
}

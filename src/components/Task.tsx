import { Trash } from 'phosphor-react'

export function Task() {
  return (
    <>
      <div className="flex items-center gap-3 p-4 border border-solid rounded-lg bg-base-gray-500">
        <input type="checkbox" className="cursor-pointer outline-none" />
        <p className="text-base-gray-100 font-normal text-sm">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <button className="rounded w-6 h-6 flex items-center justify-center">
          <Trash size={16} color="#808080" weight="bold" />
        </button>
      </div>
    </>
  )
}

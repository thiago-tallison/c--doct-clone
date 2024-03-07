import { ReactNode } from "react";

type NavItemProps = {
  icon?: ReactNode
  text: string
  active?: boolean
}

export function NavItem({ text, icon, active = false }: NavItemProps) {
  return (
    <li className={`w-full rounded-md ${active ? 'bg-dark text-white' : 'hover:bg-dark/5'}`}>
      <a href="#" className='flex gap-3 items-center w-full h-full p-3'>
        {icon && icon} {text}
      </a>
    </li>
  )
}
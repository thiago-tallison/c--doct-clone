import { Bell, ChevronDown, HelpCircle, Search } from "lucide-react";
import Image from 'next/image';

export function Header() {
  return (
    <header className="pt-4 w-full flex justify-between">
      <div className="flex gap-2 items-center text-text-secondary">
        <Search size={20} className="text-text-placeholder" />
        <input type="text" name="search" id="search" className="border-0 bg-muted outline-none text-sm w-full" placeholder="Search Appointment, Patient or etc" />
      </div>

      <div className="flex items-center text-text-secondary gap-6 justify-end">
        <HelpCircle className="hover:cursor-pointer hover:brightness-75 hover:scale-105" size={20} />
        <Bell className="hover:cursor-pointer hover:brightness-75 hover:scale-105" size={20} />

        <div className="flex items-center gap-3 group hover:cursor-pointer">
          <Image
            className='w-7 h-7 object-cover rounded-full'
            src="https://github.com/thiago-tallison.png"
            width={280}
            height={280}
            alt='Logo'
          />

          <div className="flex flex-col ">
            <strong className="text-sm text-text-primary">Thiago Tallison</strong>
            <span className="text-xs text-text-secondary">Cardiologist</span>
          </div>

          <ChevronDown size={12} />
        </div>
      </div>
    </header>
  )
}
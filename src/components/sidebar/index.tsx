import { Calendar, Clock5, CreditCard, FileText, LayoutGrid, Mail, Settings, User } from 'lucide-react'
import Image from 'next/image'
import { NavItem } from './nav-item'

export function Sidebar() {
  return (
    <aside className="w-56 bg-white flex flex-col">
      <header className='p-6'>
        <Image
          className='w-auto h-9 object-cover'
          src="/logo.png"
          width={200}
          height={200}
          alt='Logo'
        />
      </header>

      <main className="px-3">
        <nav className='text-text-secondary'>
          <ul className='space-y-2'>
            <NavItem
              text="Overview"
              icon={<LayoutGrid />}
              active
            />

            <NavItem
              text="Appointment"
              icon={<Calendar />}
            />

            <NavItem
              text="My Patients"
              icon={<User />}
            />

            <NavItem
              text="Schedule Timings"
              icon={<Clock5 />}
            />

            <NavItem
              text="Payments"
              icon={<CreditCard />}
            />

            <NavItem
              text="Message"
              icon={<Mail />}
            />

            <NavItem
              text="Blog"
              icon={<FileText />}
            />

            <NavItem
              text="Setings"
              icon={<Settings />}
            />
          </ul>
        </nav>
      </main>
    </aside>
  )
}
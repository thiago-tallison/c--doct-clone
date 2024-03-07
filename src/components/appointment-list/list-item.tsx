import { formatDate } from '@/utils/format-date';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

function getStatusBadge(status: Status) {
  if (status === "declined") {
    return (
      <span className="select-none h-8 w-20 text-xs text-red-400 font-semibold rounded-md bg-red-100 flex items-center justify-center">Declined</span>
    )
  } else if (status === "confirmed") {
    return <span className="select-none h-8 w-20 text-xs text-blue-400 font-semibold rounded-md bg-blue-100 flex items-center justify-center">Confirmed</span>
  }

  return <div className='flex gap-3'>
    <button className='text-red-500 rounded-md border-2 border-red-500' type='button'>
      <X size={18} />
    </button>
    <button className='cursor-pointer text-blue-500 rounded-md border-2 border-blue-500' type='button'>
      <Check size={18} />
    </button>
  </div>
}

export type Status = "pending" | "confirmed" | "declined"

export type AppointmentListItemProps = {
  userName: string
  gender: string
  age: number
  ISODate: string
  imageURL: string
  status: Status
}

export function AppointmentListItem(props: AppointmentListItemProps) {
  const { ISODate, status = "pending", gender, imageURL, userName, age } = props

  return (
    <li className="items-center flex hover:bg-muted py-2 px-5">
      <Image
        className='w-12 h-12 object-cover rounded-full mr-4'
        src={imageURL}
        width={280}
        height={280}
        alt={`${userName}'s avatar`}
      />

      <div className="flex flex-1 flex-col">
        <strong className="text-base font-semibold text-text-primary line-clamp-1">{userName}</strong>
        <span className="text-xs text-text-secondary">{age}, {gender}, {formatDate(ISODate)}</span>
      </div>

      {getStatusBadge(status)}
    </li>
  )
}
import { toHumanReadableDate } from '@/utils/format-date'
import { createRandomPatient } from '@/utils/get-random-user'
import { MoreVertical } from 'lucide-react'
import Image from 'next/image'

export type RecentPatientType = {
  userName: string
  vistId: string
  ISODate: string
  gender: string
  diseases: string
  imageURL: string
  status: string
}

export function RecentPatients() {
  return (
    <table className='mt-6 border-separate border-spacing-y-2'>
      <thead>
        <tr className='bg-gray-200 text-left'>
          <th className='rounded-tl-md rounded-bl-md py-4 pl-5'>
            Patient name
          </th>
          <th className='py-4 pl-5'>Vist Id</th>
          <th className='py-4 pl-5'>Date</th>
          <th className='py-4 pl-5'>Gender</th>
          <th className='py-4 pl-5'>Diseases</th>
          <th className='py-4 pl-5'>Status</th>
          <th className='rounded-tr-md rounded-br-md py-4'></th>
        </tr>
      </thead>

      <tbody className='text-sm text-text-secondary'>
        {Array.from({ length: 5 }).map(() => {
          const patient = createRandomPatient()
          const { ISODate, diseases, gender, imageURL, status, userName, vistId } = patient

          return (
            <tr
              key={vistId}
              className='bg-white shadow-md hover:bg-muted'>
              <td className='!rounded-tl-md !rounded-bl-md py-4 pl-5 flex items-center gap-2'>
                <Image
                  className='w-7 h-7 object-cover rounded-full'
                  src={imageURL}
                  width={280}
                  height={280}
                  alt={`${userName}'s avatar`}
                />
                <span>{userName}</span>
              </td>
              <td className='py-4 pl-5'>{vistId}</td>
              <td className='py-4 pl-5'>{toHumanReadableDate(ISODate)}</td>
              <td className='py-4 pl-5'>{gender}</td>
              <td className='py-4 pl-5'>{diseases}</td>
              <td className='py-4 pl-5'>{status}</td>
              <td className='rounded-tr-md rounded-br-md py-4'>
                <button type='button'>
                  <MoreVertical size={20} />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

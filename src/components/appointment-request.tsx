import { createRandomUser } from "@/utils/get-random-user"
import { ChevronRight } from "lucide-react"
import { AppointmentListItem } from "./appointment-list/list-item"

export function AppointmentRequest() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <strong>Appointment Request</strong>
        <a href="#" className="flex items-center text-blue-500 font-semibold text-sm hover:underline">View All <ChevronRight size={20} /></a>
      </div>

      <ul className="bg-white py-3 shadow-md rounded-lg">
        {Array.from({ length: 5 }).map(() => {
          const person = createRandomUser()

          return (
            <AppointmentListItem
              key={Math.random().toString(10).substring(2)}
              ISODate={person.ISODate}
              age={person.age}
              status={person.status}
              gender={person.gender}
              imageURL={person.imageURL}
              userName={person.userName}
            />
          )
        })}
      </ul>
    </div>
  )
}
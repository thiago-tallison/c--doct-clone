import { Calendar, Church, User, Video } from "lucide-react"

export function Sumary() {
  return (
    <div className="flex w-full justify-between gap-4">
      <div className="flex items-center justify-center bg-violet-500 px-2 flex-1 py-4 rounded-lg">
        <div className="bg-violet-400 rounded-full text-white p-4">
          <Calendar size={32} />
        </div>
        <div className="flex flex-col pl-4 flex-1">
          <strong className="text-lg text-white/90">24.4k</strong>
          <span className="text-xs font-semibold text-white/85">Appointments</span>
        </div>
      </div>

      <div className="flex items-center justify-center bg-red-500 px-2 flex-1 py-4 rounded-lg">
        <div className="bg-red-400 rounded-full text-white p-4">
          <User size={32} />
        </div>
        <div className="flex flex-col pl-4 flex-1">
          <strong className="text-lg text-white/90">24.4k</strong>
          <span className="text-xs font-semibold text-white/85">Total Patient</span>
        </div>
      </div>

      <div className="flex items-center justify-center bg-yellow-500 px-5 flex-1 py-2 rounded-lg">
        <div className="bg-yellow-400 rounded-full text-white p-4">
          <Church size={32} />
        </div>
        <div className="flex flex-col pl-4 flex-1">
          <strong className="text-lg text-white/90">24.4k</strong>
          <span className="text-xs font-semibold text-white/85">Clinic Consulting</span>
        </div>
      </div>

      <div className="flex items-center justify-center bg-sky-500 px-5 flex-1 py-2 rounded-lg">
        <div className="bg-sky-400 rounded-full text-white p-4">
          <Video size={32} />
        </div>
        <div className="flex flex-col pl-4 flex-1">
          <strong className="text-lg text-white/90">24.4k</strong>
          <span className="text-xs font-semibold text-white/85">Video Consulting</span>
        </div>
      </div>
    </div>
  )
}
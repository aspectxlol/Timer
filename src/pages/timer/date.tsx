import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Tauri } from 'next/font/google'
import dayjs from "dayjs";
import 'dayjs/locale/id'

const font = Tauri({ weight: ['400'], subsets: ['latin'] })
export default function DateDisplay() {
  const router = useRouter()
  const [Countdown, setCountdown] = useState('');

  useEffect(() => {
    const query = parseInt(router.query.data as string)
    setCountdown(formatTime(query))
  }, [router.query.data])
  return (  
    <div
      className={`flex text-center items-center justify-center min-h-screen m-auto font-bold text-wrap text-9xl bg-greenkey ${font.className}`}
    >
      {Countdown}
      {}
    </div>
  )
}

function formatTime(query: number): string {
  const queryTime = dayjs(query).locale('id').format(`dddd, D MMMM, YYYY`)
  return `${queryTime}`
}
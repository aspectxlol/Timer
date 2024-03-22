import { useRouter } from "next/router";
import { useState } from "react";
import { Tauri } from 'next/font/google'

const font = Tauri({ weight: ['400'], subsets: ['latin'] })
export default function ClockCountdown() {
  const router = useRouter()
  const [Countdown, setCountdown] = useState('');
  const query = router.query.data as string

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = parseInt(query) - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
  }, 1000); 

  return (  
    <div
      className={`flex text-center items-center justify-center min-h-screen m-auto font-bold text-wrap text-9xl bg-greenkey ${font.className}`}
    >
      {Countdown}
    </div>
  )
}
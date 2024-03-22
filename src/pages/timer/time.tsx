import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Noto_Sans_Mono} from 'next/font/google'

const font = Noto_Sans_Mono({ weight: ['400'], subsets: ['latin'] })
export default function ClockCountdown() {
  const router = useRouter()
  const [Countdown, setCountdown] = useState('');

  useEffect(() => {
    let remainingTime = parseInt(router.query.data as string)

    const interval = setInterval(() => {
      remainingTime -= 1
      const hours = Math.floor(remainingTime / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime / 60));
      const seconds = Math.floor((remainingTime % (60)));
      
      if (remainingTime <= 0) remainingTime = 1
      
      console.log(minutes, seconds)


      setCountdown(`${minutes}:${seconds}`)
    }, 1000)
  }, [router.query.data])
 
  return (
    <div
      className={`flex text-center items-center justify-center min-h-screen m-auto font-bold text-wrap text-5xl bg-greenkey ${font.className}`}
    >
      {Countdown}
    </div>
  )
}
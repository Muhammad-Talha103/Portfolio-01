'use client'
import { AnimatePresence , motion} from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs'
const StairTransition = () => {
    const pathname = usePathname()
  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>
            <div className='h-screen w-screen fixed top-0 left-0 flex right-0'>
                <Stairs/>
            </div>
        </div>
    </AnimatePresence>
  )
}

export default StairTransition
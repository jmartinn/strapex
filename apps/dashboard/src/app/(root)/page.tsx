import Image from 'next/image'
import Header from '../ui/Header'
import Main from '../ui/Main'
import Footer from '../ui/Footer'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-between items-center bg-main-light'>
      <Main  />
    </div>
  )
}

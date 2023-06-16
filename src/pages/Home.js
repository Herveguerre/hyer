import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import './Style.css'
import Section1 from '@/components/element_home/section1'
import Section2 from '@/components/element_home/section2'

export default function Home() {
  return (
    <div>
        <Header/>
        <Section1/>
        <Section2/>
        <Footer/>
    </div>
  )
}

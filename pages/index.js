import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const[state, setState] = useState(1)
  function click(){
    setState(Math.random()*10)
  }

  return (
    <div className={styles.container}>

      <button onClick={click}>Button</button>

      {state}
      
    </div>
  )
}

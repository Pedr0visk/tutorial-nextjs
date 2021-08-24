import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
    src="/nvg-icon-w.svg" // Route of the image file
    height={32} // Desired size with correct aspect ratio
    width={32} // Desired size with correct aspect ratio
    alt="Navegg"
  />
  )
}

export default Logo

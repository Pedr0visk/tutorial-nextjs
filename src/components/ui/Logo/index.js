import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
    src="/nvg-icon-b.svg" // Route of the image file
    height={16} // Desired size with correct aspect ratio
    width={16} // Desired size with correct aspect ratio
    alt="Navegg"
  />
  )
}

export default Logo

import React from 'react'
import { Container } from '@/components/Container'
import { LineWobble } from 'ldrs/react'
import 'ldrs/react/LineWobble.css'

import logoImage from '@/images/logo.png'
import Image from 'next/image'

export default function MaintenancePage() {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
    //   <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
    //     <h1 className="mb-6 text-3xl font-bold text-gray-800">
    //       Valami készül...
    //     </h1>

    //     <div className="mb-6">
    //       <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
    //     </div>

    //     <p className="mb-4 text-gray-600">
    //       Az oldalunk átmenetileg karbantartás alatt áll. Hamarosan
    //       visszatérünk!
    //     </p>

    //     <p className="text-sm text-gray-500">Köszönjük a türelmét!</p>
    //   </div>
    // </div>
    <>
      <Container className="mt-36 text-center">
        <Image
          src={logoImage}
          alt="Fővárosi Diákönkormányzat"
          className="mx-auto mb-1 h-25 w-32 object-cover"
          priority
        />
        <LineWobble
          size="120"
          stroke="5"
          bgOpacity="0.1"
          speed="1.75"
          color="black"
        />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Valami készül...
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Az oldalunk átmenetileg karbantartás alatt áll. Hamarosan
          visszatérünk!
        </p>
      </Container>
    </>
  )
}

import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Dokumentumok',
  description: '',
} // TODO: add description

export default function Dokumentumok() {
  return (
    <SimpleLayout
      title="Dokumentumok"
      intro="Itt találod a Diákparlamenthez kapcsolódó fontos dokumentumokat, mint például az Alkotmányt, jegyzőkönyveket és egyéb hasznos anyagokat."
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-zinc-100 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://res.cloudinary.com/dqi8dotxx/image/upload/v1749805780/alkotmany_jz5l2z.png"
                className="h-80 bg-white object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-red-600">
                  Állandó
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800 dark:text-zinc-100">
                  Alkotmány
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-zinc-600 dark:text-zinc-400">
                  A Diákparlament Alkotmánya határozza meg a szervezet működését
                  és céljait. Itt találod az aktuális verzióját.
                </p>
                <a
                  href="https://docs.google.com/document/d/1-2eHgpI7nVs8DtpH6fb4GUDFbAV_dGqo/edit?usp=drive_link&ouid=105407767835958044628&rtpof=true&sd=true"
                  className="text-sm/4 text-red-500 hover:underline"
                >
                  Megnézem
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-zinc-100 lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://res.cloudinary.com/dqi8dotxx/image/upload/v1749806242/hazszabaly_iohieo.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-red-600">
                  Állandó
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-zinc-800">
                  Házszabály
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-zinc-600">
                  A Diákparlament Házszabálya szabályozza a gyűlések menetét és
                  a döntéshozatali folyamatokat. Itt találod az aktuális
                  verzióját.
                </p>
                <a
                  href="https://docs.google.com/document/d/1RJGvh2J1BdNGvzLp0N2IqI1F39co4lCceNZ6uUTjezU/edit?usp=drive_link"
                  className="text-sm/4 text-red-500 hover:underline"
                >
                  Megnézem
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Speed
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Built for power users
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Sed congue eros non finibus molestie. Vestibulum euismod
                  augue.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-bl-4xl" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Integrations
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam
                  maximus arcu.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">
                  Network
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Globally distributed CDN
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Aenean vulputate justo commodo auctor vehicula in malesuada
                  semper.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}

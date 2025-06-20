import { type Metadata } from 'next'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Fővárosi Diákönkormányzat',
    default: 'Fővárosi Diákönkormányzat', // TODO: add subtitle
  },
  description:
    'Fővárosi Diákönkormányzat - A Fővárosi Diákönkormányzat célja, hogy a diákok érdekeit képviselje és támogassa a diákéletet Budapesten.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
              </div>
            </div>
            <div className="relative flex w-full flex-col">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}

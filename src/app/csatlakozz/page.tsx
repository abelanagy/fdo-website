import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'
import Form from 'next/form'


export const metadata: Metadata = {
  title: 'Csatlakozz!',
  description:
    '',
} // TODO: add description

export default function Csatlakozz() {
  return (
    <SimpleLayout
      title="Csatlakozz!"
      intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
    >
        <form>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Név
                </label>
                <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Csatlakozz!
            </button>
        </form>
    </SimpleLayout>
  )
}

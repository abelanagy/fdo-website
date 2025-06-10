'use client'

import { useEffect } from 'react'
import Script from 'next/script'

/**
 *  Renders an Instagram post given its URL (permalink).
 *
 *  Usage:
 *    <InstagramEmbed url="https://www.instagram.com/p/DKpnsUuNuAP/" />
 */
export function InstagramEmbed({ url }: { url: string }) {
  // kick Instagram’s JS parser every time the URL changes
  useEffect(() => {
    // @ts-ignore – global injected by the script
    if (window.instgrm) window.instgrm.Embeds.process()
  }, [url])

  return (
    <>
      {/* loads Instagram’s embed SDK once, lazily */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          if (window.instgrm) window.instgrm.Embeds.process()
        }}
      />

      {/* the minimal markup the SDK needs */}
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#fff',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px rgba(0,0,0,.5),0 1px 10px rgba(0,0,0,.15)',
          margin: '1rem auto',
          maxWidth: 540,
          width: '100%',
        }}
      />
    </>
  )
}

// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect } from 'react'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import { RichText } from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()

//   useEffect(() => {
//     setHeaderTheme('dark')
//   })

//   return (
//     <div
//       className="relative mt-[-10.4rem] flex items-center justify-center text-white"
//       data-theme="dark"
//     >
//       <div className="container mb-8 z-10 relative flex items-center justify-center">
//         <div className="max-w-146 md:text-center">
//           {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
//           {Array.isArray(links) && links.length > 0 && (
//             <ul className="flex md:justify-center gap-4">
//               {links.map(({ link }, i) => {
//                 return (
//                   <li key={i}>
//                     <CMSLink {...link} />
//                   </li>
//                 )
//               })}
//             </ul>
//           )}
//         </div>
//       </div>
//       <div className="min-h-[80vh] select-none">
//         {media && typeof media === 'object' && (
//           <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
//         )}
//       </div>
//     </div>
//   )
// }

import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { RichText } from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div>
          {richText && <RichText className="mb-8" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image column */}
        {media && typeof media === 'object' && (
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl">
            <Media fill imgClassName="object-cover" priority resource={media} />
          </div>
        )}
      </div>
    </div>
  )
}

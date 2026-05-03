import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { LogoIcon } from '@/components/icons/logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import { Suspense } from 'react'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded bg-muted dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    <footer className=" text-muted-foreground">
      <div className="container">
        <div className="flex w-full flex-col gap-6 border-t border-border py-12 text-sm md:flex-row md:gap-12 ">
          <div>
            <Link className="flex items-center gap-2 text-foreground" href="/">
              <LogoIcon className="w-6" />
              <span className="sr-only">{SITE_NAME}</span>
            </Link>
          </div>
          <Suspense
            fallback={
              <div className="flex h-47 w-50 flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>
          <div className="md:ml-auto flex flex-col gap-4 items-end">
            <ThemeSelector />
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="container mx-auto flex w-full flex-col items-center gap-1 md:flex-row md:gap-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-px border-l border-border md:inline-block" />
          <p>Designed in Habiganj, Bangladesh</p>
          <p className="md:ml-auto">
            Crafted by{' '}
            <a
              className="text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit ThirdBracket - Web Development Agency"
              href="https://thirdbracket.co.uk"
            >
              ThirdBracket
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { LogoIcon } from '@/components/icons/logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { Mail, MapPin, Phone } from 'lucide-react'
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
              <div className="flex items-center justify-center w-10 h-10 p-1 rounded-full bg-[#140b07]">
                <LogoIcon className="w-7 h-auto text-primary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-semibold uppercase">Blackpool</span>
                <span className="text-xl font-bold tracking-tight leading-none">Brew</span>
              </div>
            </Link>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground mt-4">
              <a
                href="tel:+447432654441"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +44 7432 654441
              </a>
              <a
                href="mailto:info@blackpoolbrew.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@blackpoolbrew.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>7-9 Topping Street, Blackpool, FY1 3AX</span>
              </div>
            </div>
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

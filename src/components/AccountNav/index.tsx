'use client'

import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  className?: string
}

export const AccountNav: React.FC<Props> = ({ className }) => {
  const pathname = usePathname()

  return (
    <div className={clsx(className)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Button asChild variant="link">
            <Link
              href="/account"
              // Swapped primary/50 for muted-foreground to fix the blurry/light text
              className={clsx(
                'text-muted-foreground hover:text-primary hover:no-underline transition-colors',
                {
                  'text-primary': pathname === '/account',
                },
              )}
            >
              Account settings
            </Link>
          </Button>
        </li>

        <li>
          <Button asChild variant="link">
            <Link
              href="/account/addresses"
              className={clsx(
                'text-muted-foreground hover:text-primary hover:no-underline transition-colors',
                {
                  'text-primary': pathname === '/account/addresses',
                },
              )}
            >
              Addresses
            </Link>
          </Button>
        </li>

        <li>
          <Button
            asChild
            variant="link"
            className={clsx(
              'text-muted-foreground hover:text-primary hover:no-underline transition-colors',
              {
                'text-primary': pathname === '/orders' || pathname.includes('/orders'),
              },
            )}
          >
            <Link href="/orders">Orders</Link>
          </Button>
        </li>
      </ul>

      {/* Swapped border-white/5 for border-border to ensure visibility in both themes */}
      <hr className="w-full border-border my-4" />

      <Button
        asChild
        variant="link"
        className={clsx(
          'text-muted-foreground hover:text-primary hover:no-underline transition-colors',
          {
            'text-primary': pathname === '/logout',
          },
        )}
      >
        <Link href="/logout">Log out</Link>
      </Button>
    </div>
  )
}

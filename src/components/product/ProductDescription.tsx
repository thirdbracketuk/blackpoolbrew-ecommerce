'use client'
import type { Product, Variant } from '@/payload-types'

import { AddToCart } from '@/components/Cart/AddToCart'
import { Price } from '@/components/Price'
import { RichText } from '@/components/RichText'
import { Suspense } from 'react'

import { StockIndicator } from '@/components/product/StockIndicator'
import { useCurrency } from '@payloadcms/plugin-ecommerce/client/react'
import { VariantSelector } from './VariantSelector'

export function ProductDescription({ product }: { product: Product }) {
  const { currency } = useCurrency()
  let amount = 0,
    lowestAmount = 0,
    highestAmount = 0
  const priceField = `priceIn${currency.code}` as keyof Product
  const hasVariants = product.enableVariants && Boolean(product.variants?.docs?.length)

  if (hasVariants) {
    const priceField = `priceIn${currency.code}` as keyof Variant
    const variantsOrderedByPrice = product.variants?.docs
      ?.filter((variant) => variant && typeof variant === 'object')
      .sort((a, b) => {
        if (
          typeof a === 'object' &&
          typeof b === 'object' &&
          priceField in a &&
          priceField in b &&
          typeof a[priceField] === 'number' &&
          typeof b[priceField] === 'number'
        ) {
          return a[priceField] - b[priceField]
        }

        return 0
      }) as Variant[]

    const lowestVariant = variantsOrderedByPrice[0][priceField]
    const highestVariant = variantsOrderedByPrice[variantsOrderedByPrice.length - 1][priceField]
    if (
      variantsOrderedByPrice &&
      typeof lowestVariant === 'number' &&
      typeof highestVariant === 'number'
    ) {
      lowestAmount = lowestVariant
      highestAmount = highestVariant
    }
  } else if (product[priceField] && typeof product[priceField] === 'number') {
    amount = product[priceField]
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* text-foreground ensures sharp contrast for the product title */}
        <h1 className="text-3xl font-bold text-foreground">{product.title}</h1>

        {/* text-primary applies the brand orange to the price */}
        <div className="uppercase font-mono text-primary">
          {hasVariants ? (
            <Price highestAmount={highestAmount} lowestAmount={lowestAmount} />
          ) : (
            <Price amount={amount} />
          )}
        </div>
      </div>

      {product.description ? (
        /* text-muted-foreground ensures readable description text */
        <RichText
          className="text-muted-foreground"
          data={product.description}
          enableGutter={false}
        />
      ) : null}

      <hr className="border-border" />

      {hasVariants && (
        <>
          <Suspense fallback={null}>
            <VariantSelector product={product} />
          </Suspense>

          <hr className="border-border" />
        </>
      )}

      <div className="flex items-center justify-between">
        <Suspense fallback={null}>
          {/* Wrapped in span to fix TS Error 2322 while still applying brand orange */}
          <span className="text-primary">
            <StockIndicator product={product} />
          </span>
        </Suspense>
      </div>

      <div className="flex items-center justify-between">
        <Suspense fallback={null}>
          <AddToCart product={product} />
        </Suspense>
      </div>
    </div>
  )
}

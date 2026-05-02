# ThirdBracket Ecommerce Engine

This project is a high-performance, enterprise-ready ecommerce solution developed and maintained by **[ThirdBracket](https://thirdbracket.com)**.

Built upon the robust **Payload Ecommerce Template (BETA)**, we have customized this engine to provide a seamless, scalable, and secure shopping experience right out of the box. While we leverage the official Payload foundation, this repository contains our agency-specific configurations and production optimizations.

## Core Features

Our engine integrates the best of Payload CMS with ThirdBracket’s deployment standards:

- **Full-Stack Performance**: A beautifully designed, production-ready frontend paired with a powerful Node.js backend.
- **Dynamic Layout Builder**: Create unique landing pages using our pre-designed UI blocks (Hero, Content, Media, CTA, Archive).
- **Product Management**: Support for complex products, variants, categories, and real-time inventory tracking.
- **Secure Checkout**: Integrated Stripe payments with support for guest checkouts and multiple currencies.
- **User Dashboard**: Comprehensive account management for customers to track orders and save addresses.
- **SEO & Search**: Deeply integrated SEO fields and high-speed search/filtering capabilities.
- **Live Preview**: Real-time content editing with Payload’s Draft and Live Preview features.

---

## Quick Start

To spin up the ThirdBracket Ecommerce instance locally:

### 1. Clone & Setup

Ensure you have the repository cloned to your local machine.

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
```

### 2. Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application. Follow the on-screen prompts to create your first admin user within the ThirdBracket dashboard.

---

## Technical Architecture

### The Payload Foundation

We utilize the [Official Payload Ecommerce Template](https://github.com) as our core framework. This ensures we stay aligned with the latest security patches and feature updates from the Payload team while layering our agency's custom logic on top.

### Managed Collections

- **Users**: Differentiated access for `admin` (Agency/Store owners) and `customer` roles.
- **Products & Variants**: Advanced data structures for retail, including pricing per currency.
- **Orders & Transactions**: Automated tracking from checkout initiation to fulfillment via the ecommerce plugin.
- **Media**: Centralized asset management with automated focal point resizing and pre-configured sizes.

### Access Control

We implement strict security protocols:

- **Admins**: Full access to the backend, orders, and system configurations.
- **Customers**: Access limited to their own order history, profile, and active carts.
- **Guests**: Secure, token-based order lookups via `/find-order` to prevent data enumeration attacks.

---

## Content Management

### Lexical Editor

Our engine utilizes the Lexical rich-text editor, providing a "writer-first" experience. Embed ThirdBracket blocks, media, and links directly into your product descriptions or blog posts without leaving the workflow.

### Automated Revalidation

Using on-demand revalidation, your frontend stays updated instantly when content changes in the CMS, maintaining the speed of a static site with the flexibility of a dynamic one.

### Draft Preview

All products and pages are draft-enabled. Use the "Versions" feature to save progress and preview content securely on the frontend before hitting publish.

---

## Deployment

This engine is optimized for modern CI/CD pipelines. For production deployment instructions or to learn more about how **ThirdBracket** can help scale your digital storefront, visit our website.

---

_Maintained by the Engineering Team at **ThirdBracket**._

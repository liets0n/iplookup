import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    additionalData: `@use '@/styles/theme/_palette' as *;`
  },
  experimental: {
    globalNotFound: true
  }
}

export default withNextIntl(nextConfig)

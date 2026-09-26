import type { NextConfig } from 'next';
// GitHub Pages supplies /repository-name; root/custom-domain deployments use ''.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
if (basePath && !/^\/[A-Za-z0-9._-]+$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or /repository-name.');
}
const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
};
export default config;

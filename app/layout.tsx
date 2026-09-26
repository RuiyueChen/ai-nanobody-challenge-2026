import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import './globals.css';
import './institutional.css';
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
export const metadata: Metadata = {title:'AI-Designed Nanobody Challenge 2026',description:'An open benchmark for AI-driven microbial nanobody discovery with experimental validation.',icons:{icon:`${basePath}/favicon.svg`}};
const assetPaths = {
  '--protein-hero-dark': `url("${basePath}/protein-hero.png")`,
  '--protein-hero-light': `url("${basePath}/protein-hero-light.webp")`,
} as CSSProperties;
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en" style={assetPaths}><body>{children}</body></html>}

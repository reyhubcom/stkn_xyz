import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'What is Staking?',
          href: getPermalink('/home/staking'),
        },
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/home/btc'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'DeFi',
      links: [
        {
          text: 'Solana DeFi ',
          href: getPermalink('/home/sol'),
        },
        {
          text: 'Ethereum DeFi',
          href: getPermalink('/home/eth'),
        },
        {
          text: 'Binance DeFi',
          href: getPermalink('/home/bnb'),
        },
        {
          text: 'Polygon DeFi',
          href: getPermalink('/home/pol'),
        },
        {
          text: 'Avalanche DeFi',
          href: getPermalink('/home/avax'),
        },
        {
          text: 'Arbitrum DeFi',
          href: getPermalink('/home/arb'),
        },
        {
          text: 'View All DeFi',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Bridge',
      links: [
        {
          text: 'Crypto Bridge',
          href: getPermalink('/home/bridge'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Crypto',
      links: [
        {
          text: 'Crypto Bubbles',
          href: getPermalink( '/home/bubble'),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Lending',
      href: 'https://fluid.io/smart-lending/1' ,target: ' _blank',
    },
  ],
  actions: [{ text: 'APP STAKING', href: 'https://linktr.ee/reystaking', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Networks',
      links: [
        { text: 'Ethereum', href: '#' },
        { text: 'Solana', href: '#' },
        { text: 'Binance', href: '#' },
        { text: 'BASE', href: '#' },
        { text: 'Polygon', href: '#' },
        { text: 'Cosmos', href: '#' },
        { text: 'All Networks', href: '/home/crypto' },
      ],
    },
    {
      title: 'MEME Coins',
      links: [
        { text: 'Staking BONKS', href: '#' },
        { text: 'Staking PEPE', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '#'},
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://reyhub.com"> Rey</a> 2025 STKN.xyz All Rights Reserved.
  `,
};

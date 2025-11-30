import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/bitcoin/btc.1'),
        },
        {
          text: 'Stake ETH',
          href: getPermalink('/ethereum/eth.1'),
        },
        {
          text: 'Stake SOL',
          href: getPermalink('/solana/sol.1'),
        },
        {
          text: 'Stake STRK',
          href: getPermalink('/starknet/strk.1'),
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
          text: 'Stablecoins',
          href: getPermalink( '/home/stable'),
        },
        {
          text: 'MEME Coins',
          href: getPermalink('/home/meme'),
        },
        {
          text: 'Lite Lend',
          href: getPermalink('/home/lite'),
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
  actions: [{ text: 'EXCHANGE', href: '/home/exchange', target: '' }],
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
        { text: 'Staking BONKS', href: '/home/meme' },
        { text: 'Staking PEPE', href: '/home/meme' },
        { text: 'Staking FLOKI', href: '/home/meme' },
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

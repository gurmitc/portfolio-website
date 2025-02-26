import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { JSX, SVGProps } from 'react'


const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gurmit-chauhan/',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill='currentColor' viewBox='0 0 448 512' {...props}>
        <path
          fill='currentColor'
          d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
        ></path>
      </svg>
    )
  }]


export default function Header() {
    return (
      <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
        <nav className='container flex max-w-3xl items-center justify-between'>
          <div>
            <Link href='/' className='font-serif text-2xl font-bold'>
              GC
            </Link>
          </div>
  
          <ul className='flex items-center gap-6 text-sm font-bold text-muted-foreground sm:gap-10'>            
            <li className='transition-colors hover:text-foreground'>
              <Link href='/projects'>Projects</Link>
            </li>
          </ul>

          
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer noopener'
                className='text-muted-foreground hover:text-foreground'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon aria-hidden='true' className='h-5 w-5' />
              </a>
            ))}
          

          <div>
          <ThemeToggle />
          </div>

        </nav>
      </header>
    )
  }
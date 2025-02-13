'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import path from 'path'

const SideBar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href="/" className='mb-12 flex cursor-pointer items-center gap-2'>
                    <Image
                       src="/icons/logo.svg" 
                        width={34}
                        height={34}
                        alt='NexBank'
                        className='size-[24px] max-xl:size-14'
                    />
                    <h1 className='sidebar-logo'>NexBank</h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link href={item.route} key={item.label} 
                        className={cn('sidebar-link', {'bg-bank-gradient': isActive})}>
                            <div className='relative'>
                                <Image
                                src={item.imgURL}
                                alt={item.label}
                                width={24}
                                height={24}
                                className={cn({'brightness-[3] invert-0': isActive})}
                                />
                            </div>
                            <p className={cn('sidebar-label', {'!text-white': isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    );
                })}  
                USer
            </nav>
            User
        </section>
    )
}

export default SideBar
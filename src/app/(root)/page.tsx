import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'

function Home() {
    const loggedIn = {firstname:'rukshan'}
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                <HeaderBox
                type='greeting'
                title='welcome'
                user={loggedIn?.firstname || 'Guest'}
                subtext='Access And Manage Your Account'

                />
                </header>
            </div>
        </section>
    )
}

export default Home
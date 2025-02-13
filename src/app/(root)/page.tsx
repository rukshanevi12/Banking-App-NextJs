import React, { use } from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

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

                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250}
                />
                </header>
            </div>
        </section>
    )
}

export default Home
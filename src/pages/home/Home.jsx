import React from 'react'
import HomeHero from '../../components/home/HomeHero'
import HomeAbout from '../../components/home/HomeAbout'
import HomeAboutCtd from '../../components/home/HomeAboutCtd'
import WhyUs from '../../components/home/WhyUs'
import WhyUsTitle from '../../components/home/WhyUsTitle'
import HomeAccordion from '../../components/home/HomeAccordion'
import HomeTitle from '../../components/home/HomeTitle'

const Home = () =>
{
    return (
        <>
            <section>
                <HomeHero />
            </section>
            <section>
                <HomeAbout />
            </section>
            <section>
                <HomeAboutCtd />
            </section>
            <section>
                <WhyUsTitle />
            </section>
            <section>
                <WhyUs />
            </section>
            <section>
                <HomeAccordion />
            </section>
            <section>
                <HomeTitle />
            </section>
        </>

    )
}

export default Home

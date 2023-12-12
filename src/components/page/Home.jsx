import Heading from '../sections/heading/Heading'
import Special from '../sections/heading/Special'
import Testimonials from '../sections/heading/Testimonials'
import About from '../sections/heading/About'

const Home = () => {
    return (
        <>
            <Heading/>
            <main>
                <Special />
                <Testimonials />
                <About />
            </main>
        </>
    )
}
export default Home
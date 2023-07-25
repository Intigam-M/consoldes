import About from "@/components/homePage/about"
import Course from "@/components/homePage/course"
import Hero from "@/components/homePage/hero"
import LearningPath from "@/components/homePage/learningPath"

function HomeContainer() {
    return (
        <div>
            <Hero />
            <Course />
            <About />
            <LearningPath />
        </div>
    )
}

export default HomeContainer
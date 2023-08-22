import About from "@/components/homePage/about"
import Course from "@/components/homePage/course"
import Hero from "@/components/homePage/hero"
import LearningPath from "@/components/homePage/learningPath"

function HomeContainer({dictionary}) {

    return (
        <div>
            <Hero dictionary={dictionary.hero}/>
            <Course />
            <LearningPath />
            <About />
            
        </div>
    )
}

export default HomeContainer
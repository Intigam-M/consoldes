import About from "@/components/homePage/about"
import Course from "@/components/homePage/course"
import Hero from "@/components/homePage/hero"
import LearningPath from "@/components/homePage/learningPath"

function HomeContainer({dictionary, currentLang}) {

    return (
        <div>
            <Hero dictionary={dictionary.hero}/>
            <Course />
            <LearningPath dictionary={dictionary.learning_path} currentLang={currentLang} />
            <About />
            
            
        </div>
    )
}

export default HomeContainer
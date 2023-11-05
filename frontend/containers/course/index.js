import CourseCard from "@/components/homePage/course/courseCard"
import javascript from '@/assets/images/javascript.png'
import react from '@/assets/images/react.png'
import project from '@/assets/images/javascript project.png'

function CourseContainer() {
    return (
        <div>
            <div className="container grid md:grid-cols-3 grid-cols-1 gap-5 py-10 px-5 md:px-0">
                <CourseCard image={javascript} lesson="61" title="JavaScript Fundamental Biliklər" price="Free" />
                <CourseCard image={react} lesson="20" title="Yeni Başlayanlar üçün React JS" price="Free" />
                <CourseCard image={project} lesson="40" title="JavaScript Projects" price="Free" />
            </div>
        </div>
    )
}

export default CourseContainer
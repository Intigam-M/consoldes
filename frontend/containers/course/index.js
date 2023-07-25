import CourseCard from "@/components/homePage/course/courseCard"

function CourseContainer() {
  return (
    <div>
        <div className="container grid md:grid-cols-3 grid-cols-1 gap-5 py-10 px-5 md:px-0">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    </div>
  )
}

export default CourseContainer
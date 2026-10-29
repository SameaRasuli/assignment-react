import CourseCard, { type Course } from "./CourseCard";

const courses: (Course & { id: number })[] = [
    {
        id: 1,
        title: "HTML Basic",
        weeks: 4,
        level: "Beginner"
    },
    {
        id: 2,
        title: "CSS Basic",
        weeks: 7,
        level: "Beginner"
    },
    {
        id: 3,
        title: "JavaScript",
        weeks: 9,
        level: "Intermediate"
    },
    {
        id: 4,
        title: "TypeScript",
        weeks: 3,
        level: "Intermediate"
    },
    {
        id: 5,
        title: "React",
        weeks: 6,
        level: "Advanced"
    }
];

function CourseList() {
    return (
        <div>
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
}

export default CourseList;


export interface Course {
    title: string;
    weeks: number;
    level: "Beginner" | "Intermediate" | "Advanced";
}

interface CourseCardProps {
    course: Course;
}

function CourseCard({ course }: CourseCardProps) {
    return (
        <div className="course-card">
            <h2>{course.title}</h2>

            <p>Duration: {course.weeks} weeks</p>

            {course.level === "Beginner" ? (
                <span style={{ color: "green" }}>
                    {course.level}
                </span>
            ) : course.level === "Intermediate" ? (
                <span style={{ color: "blue" }}>
                    {course.level}
                </span>
            ) : (
                <span style={{ color: "purple" }}>
                    {course.level}
                </span>
            )}
        </div>
    );
}

export default CourseCard;

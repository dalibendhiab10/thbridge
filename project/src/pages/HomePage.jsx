import Hero from "@/components/layout/Hero";
import CourseList from "@/components/courses/CourseList";
import ContactForm from "@/components/contact/ContactForm";
import { SkeletonTheme } from "react-loading-skeleton";

const HomePage = () => {
  return (
    <>
      <SkeletonTheme baseColor="#f3f4f6" highlightColor="#e5e7eb">
        <div className="min-h-screen">
        
          <Hero />
          <CourseList />
          <ContactForm />
        </div>
      </SkeletonTheme>
    </>
  );
};
export default HomePage;

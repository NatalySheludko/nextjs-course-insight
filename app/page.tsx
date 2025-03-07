import { BeneficiariesSection } from '@/page-sections/BeneficiariesSection';
import { CareerCenterSection } from '@/page-sections/CareerCenterSection';
import { CourseFormatSection } from '@/page-sections/CourseFormatSection';
import { CourseProgramSection } from '@/page-sections/CourseProgramSection';
import { CourseSpikersSection } from '@/page-sections/CourseSpikersSection';
import { ExpertCommunitySection } from '@/page-sections/ExpertCommunitySection';
import { FormSection } from '@/page-sections/FormSection';
import { HeroSection } from '@/page-sections/HeroSection';
import { PricingSection } from '@/page-sections/PricingSection';
import { ReviewsSection } from '@/page-sections/ReviewsSection';
import { StudentCasesSection } from '@/page-sections/StudentCasesSection';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BeneficiariesSection />
            <CourseSpikersSection />
            <CourseFormatSection />
            <StudentCasesSection />
            <CareerCenterSection />
           {/* <CourseProgramSection />
            <ExpertCommunitySection />
            <PricingSection />
            <ReviewsSection />
            <FormSection /> */}
        </main>
    );
}

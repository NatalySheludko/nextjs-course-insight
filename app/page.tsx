import { BeneficiariesSection } from '@/page-sections/BeneficiariesSection';
import { CareerCenterSection } from '@/page-sections/CareerCenterSection';
import { CourseFormatSection } from '@/page-sections/CourseFormatSection';
import { ExpertCommunitySection } from '@/page-sections/ExpertCommunitySection';
import { HeroSection } from '@/page-sections/HeroSection';
import { StudentCasesSection } from '@/page-sections/StudentCasesSection';

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BeneficiariesSection />
            <ExpertCommunitySection />
            <CourseFormatSection />
            <StudentCasesSection />
            <CareerCenterSection />
        </main>
    );
}

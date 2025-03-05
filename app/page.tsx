
import { BeneficiariesSection } from '@/page-sections/BeneficiariesSection';
import { ExpertCommunitySection } from '@/page-sections/ExpertCommunitySection';
import { HeroSection } from '@/page-sections/HeroSection';

export default function Home() {
    return (
        <main className="">
				<HeroSection />
				<BeneficiariesSection />
				<ExpertCommunitySection/>
        </main>
    );
}

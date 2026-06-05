import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CaseStudyPreview from '@/components/home/CaseStudyPreview';
import ClientLogos from '@/components/home/ClientLogos';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <CaseStudyPreview />
      <ClientLogos />
      <CTASection />
    </>
  );
}

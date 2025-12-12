import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ConsultingSection from "@/components/home/ConsultingSection";
import ServicesSection from "@/components/home/ServicesSection";
import CoursesPreview from "@/components/home/CoursesPreview";
import EventsPreview from "@/components/home/EventsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Afsal Zaini | Business Growth Coach & CEO of Kauzar Academy</title>
        <meta
          name="description"
          content="Transform your business with Afsal Zaini, Business Growth Coach and CEO of Kauzar Academy. Expert guidance in business development, strategy, and entrepreneurship."
        />
        <meta property="og:title" content="Afsal Zaini | Business Growth Coach" />
        <meta property="og:description" content="Transform your business with expert guidance in business development, strategy, and entrepreneurship." />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutPreview />
        <ConsultingSection />
        <ServicesSection />
        <CoursesPreview />
        <EventsPreview />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;

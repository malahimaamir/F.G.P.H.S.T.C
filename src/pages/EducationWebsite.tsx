import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import Auth from "@/components/Auth";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  StudyPlanSection,
  ExamSection,
  TeachersSection,
  PrincipalSection,
  PaymentModeSection,
  ScheduleSection,
  EntrySection
} from "@/components/SectionsContent";

const EducationWebsite = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setIsLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    // Session will be updated via onAuthStateChange
  };

  const handleSignOut = () => {
    setSession(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-education-blue/10 to-education-green/10">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-education-blue/30 border-t-education-blue rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen">
      <Navigation onSignOut={handleSignOut} />
      
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <StudyPlanSection />
        <ExamSection />
        <TeachersSection />
        <PrincipalSection />
        <PaymentModeSection />
        <ScheduleSection />
        <EntrySection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default EducationWebsite;
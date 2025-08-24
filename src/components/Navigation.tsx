import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Menu, X, LogOut } from "lucide-react";
import educationLogo from "@/assets/education-logo.png";

interface NavigationProps {
  onSignOut: () => void;
}

const Navigation = ({ onSignOut }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    onSignOut();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Main Page', color: 'text-primary' },
    { id: 'studyplan', label: 'Study Plan', color: 'text-primary' },
    { id: 'exam', label: 'Exam', color: 'text-exam-blue' },
    { id: 'teachers', label: 'Teachers', color: 'text-teacher-orange' },
    { id: 'principal', label: 'Principal', color: 'text-principal-green' },
    { id: 'paymentmode', label: 'Payment Mode', color: 'text-payment-red' },
    { id: 'schedule', label: 'Schedule', color: 'text-primary' },
    { id: 'entry', label: 'Entry', color: 'text-primary' },
    { id: 'contact', label: 'Contact', color: 'text-primary' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={educationLogo} alt="F.G.P.H.S.T.C" className="w-10 h-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
              F.G.P.H.S.T.C
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`${item.color} hover:bg-gradient-to-r hover:from-education-blue/10 hover:to-education-green/10 transition-all duration-300 px-3 py-2 text-sm font-medium`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="ml-4 hover:bg-destructive hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`${item.color} justify-start px-4 py-2 text-sm font-medium`}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="mx-4 mt-4 hover:bg-destructive hover:text-white transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
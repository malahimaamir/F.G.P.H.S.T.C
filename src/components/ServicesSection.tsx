import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import onlineLearning from "@/assets/contact.jpg";
import libraryResources from "@/assets/hero-education.jpg";
import consultation from "@/assets/consultation.jpg";
import careerGuidance from "@/assets/career-guidance.jpg";
import certification from "@/assets/certification.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Online Learning Platform",
      description: "Access comprehensive courses and interactive learning materials from anywhere, anytime.",
      image: onlineLearning,
      features: ["24/7 Access", "Interactive Content", "Progress Tracking", "Mobile Friendly"]
    },
    {
      title: "Digital Library Resources",
      description: "Extensive collection of books, research papers, and educational materials.",
      image: libraryResources,
      features: ["Digital Books", "Research Papers", "Audio Materials", "Offline Access"]
    },
    {
      title: "Academic Consultation",
      description: "One-on-one guidance from expert educators to support your learning journey.",
      image: consultation,
      features: ["Personal Mentoring", "Study Plans", "Progress Reviews", "Career Advice"]
    },
    {
      title: "Career Guidance",
      description: "Professional counseling to help you choose the right career path and achieve your goals.",
      image: careerGuidance,
      features: ["Career Assessment", "Industry Insights", "Job Placement", "Skill Development"]
    },
    {
      title: "Digital Certification",
      description: "Earn recognized certificates and credentials to boost your professional profile.",
      image: certification,
      features: ["Industry Recognition", "Digital Badges", "Verification System", "Portfolio Building"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
            Our Educational Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive educational solutions designed to enhance your learning experience 
            and help you achieve academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-education-blue/10 to-education-green/10 flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-education-blue transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-education-green rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-education-blue to-education-green hover:from-education-blue/90 hover:to-education-green/90 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-lg bg-white shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-education-blue to-education-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">24/7</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Support Available</h3>
            <p className="text-sm text-gray-600">Round-the-clock assistance for all your learning needs</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-education-green to-education-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">AI</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Smart Learning</h3>
            <p className="text-sm text-gray-600">AI-powered personalized learning experiences</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-education-blue to-education-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">∞</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Unlimited Access</h3>
            <p className="text-sm text-gray-600">Unrestricted access to all educational resources</p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white shadow-card hover:shadow-elegant transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-education-green to-education-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">★</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-600">High-quality content from expert educators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
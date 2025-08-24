import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, GraduationCap, Clock, Award, Target } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AdvancedProgramPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentEducationLevel: "",
    selectedCourse: "",
    specialization: "",
    careerGoals: "",
    workExperience: "",
    preferredDuration: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to register for the advanced program.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('advanced_program')
        .insert([{
          user_id: user.id,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          current_education_level: formData.currentEducationLevel,
          selected_course: formData.selectedCourse,
          specialization: formData.specialization,
          career_goals: formData.careerGoals,
          work_experience: formData.workExperience,
          preferred_duration: formData.preferredDuration
        }]);

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Your advanced program registration has been submitted successfully.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentEducationLevel: "",
        selectedCourse: "",
        specialization: "",
        careerGoals: "",
        workExperience: "",
        preferredDuration: ""
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => navigate("/")}
            variant="secondary"
            className="mb-6 bg-white/20 text-white hover:bg-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Page
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Advanced Program</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Take your education to the next level with our advanced coursework designed for experienced learners seeking specialization and expertise.
          </p>
        </div>
      </div>

      {/* Program Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Program Details */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Program Overview</CardTitle>
                <CardDescription>
                  Our Advanced Program offers specialized courses for students ready to pursue higher-level education and professional development.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Duration: 1-2 years depending on specialization</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="w-5 h-5 mr-3 text-primary" />
                  <span>Certification: Professional certificates and diplomas</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 mr-3 text-primary" />
                  <span>Focus: Specialized knowledge and practical skills</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Available Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Computer Science</h4>
                    <p className="text-sm text-gray-600">Software development, AI, and data science</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Business Administration</h4>
                    <p className="text-sm text-gray-600">Management, finance, and entrepreneurship</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Engineering</h4>
                    <p className="text-sm text-gray-600">Civil, electrical, and mechanical engineering</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Healthcare</h4>
                    <p className="text-sm text-gray-600">Medical technology and healthcare management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Program Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Industry-relevant curriculum designed with employers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Hands-on projects and real-world experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Expert faculty with industry experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Career placement assistance and internships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Professional networking opportunities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Register for Advanced Program</CardTitle>
                <CardDescription>
                  Complete the application form to join our advanced program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentEducationLevel">Current Education Level</Label>
                    <Select onValueChange={(value) => handleInputChange('currentEducationLevel', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="professional">Professional Certification</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="selectedCourse">Select Course</Label>
                    <Select onValueChange={(value) => handleInputChange('selectedCourse', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your desired course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="business-admin">Business Administration</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialization">Preferred Specialization</Label>
                    <Input
                      id="specialization"
                      value={formData.specialization}
                      onChange={(e) => handleInputChange('specialization', e.target.value)}
                      placeholder="e.g., Software Development, Digital Marketing"
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredDuration">Preferred Duration</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredDuration', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select program duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-year">1 Year</SelectItem>
                        <SelectItem value="18-months">18 Months</SelectItem>
                        <SelectItem value="2-years">2 Years</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="careerGoals">Career Goals</Label>
                    <Textarea
                      id="careerGoals"
                      value={formData.careerGoals}
                      onChange={(e) => handleInputChange('careerGoals', e.target.value)}
                      placeholder="What are your career objectives after completing this program?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="workExperience">Work Experience</Label>
                    <Textarea
                      id="workExperience"
                      value={formData.workExperience}
                      onChange={(e) => handleInputChange('workExperience', e.target.value)}
                      placeholder="Describe your relevant work experience"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Apply Now"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Advanced Program Overview</CardTitle>
              <CardDescription className="text-center">
                Learn about our advanced program offerings and success stories
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Advanced Program Overview Video</p>
                  <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdvancedProgramPage;
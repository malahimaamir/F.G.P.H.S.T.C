import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, BookOpen, Clock, Users, Target } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const FoundationCoursePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    educationBackground: "",
    preferredSchedule: "",
    learningGoals: "",
    previousExperience: ""
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
          description: "Please sign in to register for the foundation course.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('foundation_course_details')
        .insert([{
          user_id: user.id,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          age: parseInt(formData.age),
          education_background: formData.educationBackground,
          preferred_schedule: formData.preferredSchedule,
          learning_goals: formData.learningGoals,
          previous_experience: formData.previousExperience
        }]);

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Your foundation course registration has been submitted successfully.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        educationBackground: "",
        preferredSchedule: "",
        learningGoals: "",
        previousExperience: ""
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Foundation Course</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Build strong fundamentals with our comprehensive foundation program designed for beginners and those looking to strengthen their core knowledge.
          </p>
        </div>
      </div>

      {/* Course Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Course Details */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Course Overview</CardTitle>
                <CardDescription>
                  Our Foundation Course is designed to provide students with essential knowledge and skills across core subjects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Duration: 6 months intensive program</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-primary" />
                  <span>Class Size: Maximum 25 students per batch</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 mr-3 text-primary" />
                  <span>Focus: Mathematics, Science, English, and Critical Thinking</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Core mathematical concepts and problem-solving techniques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Fundamental science principles and laboratory skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>English language proficiency and communication skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Critical thinking and analytical reasoning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <span>Study techniques and time management skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Register for Foundation Course</CardTitle>
                <CardDescription>
                  Fill out the form below to register for our comprehensive foundation program.
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
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="educationBackground">Educational Background</Label>
                    <Select onValueChange={(value) => handleInputChange('educationBackground', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredSchedule">Preferred Schedule</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredSchedule', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (1:00 PM - 5:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (6:00 PM - 9:00 PM)</SelectItem>
                        <SelectItem value="weekend">Weekend Classes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="learningGoals">Learning Goals</Label>
                    <Textarea
                      id="learningGoals"
                      value={formData.learningGoals}
                      onChange={(e) => handleInputChange('learningGoals', e.target.value)}
                      placeholder="What do you hope to achieve from this course?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousExperience">Previous Experience</Label>
                    <Textarea
                      id="previousExperience"
                      value={formData.previousExperience}
                      onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                      placeholder="Tell us about any relevant educational or professional experience"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Register Now"}
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
              <CardTitle className="text-2xl text-center">Course Introduction Video</CardTitle>
              <CardDescription className="text-center">
                Watch this video to learn more about our Foundation Course program
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Course Introduction Video</p>
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

export default FoundationCoursePage;
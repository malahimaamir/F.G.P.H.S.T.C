import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar, Clock, CheckCircle, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const RegularTestsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    courseEnrolled: "",
    testPreferences: "",
    specialRequirements: ""
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
          description: "Please sign in to register for regular tests.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('regular_tests')
        .insert([{
          user_id: user.id,
          student_name: formData.studentName,
          student_id: formData.studentId,
          course_enrolled: formData.courseEnrolled,
          test_preferences: formData.testPreferences,
          special_requirements: formData.specialRequirements
        }]);

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Your regular test registration has been submitted successfully.",
      });

      setFormData({
        studentName: "",
        studentId: "",
        courseEnrolled: "",
        testPreferences: "",
        specialRequirements: ""
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
    <div className="min-h-screen bg-exam-blue/10">
      {/* Header */}
      <div className="bg-gradient-to-r from-exam-blue to-exam-blue/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => navigate("/")}
            variant="secondary"
            className="mb-6 bg-white/20 text-white hover:bg-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Main Page
          </Button>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Regular Tests</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Weekly assessments designed to track your progress and ensure continuous learning throughout your academic journey.
          </p>
        </div>
      </div>

      {/* Test Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Test Details */}
          <div className="space-y-8">
            <Card className="shadow-card border-exam-blue/20">
              <CardHeader>
                <Calendar className="w-12 h-12 text-exam-blue mb-4" />
                <CardTitle className="text-2xl text-exam-blue">About Regular Tests</CardTitle>
                <CardDescription>
                  Regular tests are conducted weekly to assess student understanding and provide continuous feedback on learning progress.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-exam-blue" />
                  <span>Frequency: Every Friday, 2:00 PM - 4:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 mr-3 text-exam-blue" />
                  <span>Duration: 2 hours per test</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FileText className="w-5 h-5 mr-3 text-exam-blue" />
                  <span>Format: Multiple choice and short answers</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-exam-blue/20">
              <CardHeader>
                <CardTitle className="text-exam-blue">Test Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-exam-blue rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Section A: Multiple Choice (40%)</p>
                      <p className="text-sm text-gray-600">20 questions covering key concepts</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-exam-blue rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Section B: Short Answers (35%)</p>
                      <p className="text-sm text-gray-600">5 questions requiring brief explanations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-exam-blue rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Section C: Problem Solving (25%)</p>
                      <p className="text-sm text-gray-600">2-3 practical application questions</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-exam-blue/20">
              <CardHeader>
                <CardTitle className="text-exam-blue">Benefits of Regular Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-exam-blue/5 rounded-lg">
                    <h4 className="font-semibold text-exam-blue mb-2">Progress Tracking</h4>
                    <p className="text-sm text-gray-600">Monitor your learning progress week by week</p>
                  </div>
                  <div className="p-4 bg-exam-blue/5 rounded-lg">
                    <h4 className="font-semibold text-exam-blue mb-2">Immediate Feedback</h4>
                    <p className="text-sm text-gray-600">Get quick feedback to improve understanding</p>
                  </div>
                  <div className="p-4 bg-exam-blue/5 rounded-lg">
                    <h4 className="font-semibold text-exam-blue mb-2">Exam Preparation</h4>
                    <p className="text-sm text-gray-600">Stay prepared for major examinations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div>
            <Card className="shadow-card border-exam-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-exam-blue">Register for Regular Tests</CardTitle>
                <CardDescription>
                  Sign up to participate in our weekly assessment program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange('studentName', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="studentId">Student ID</Label>
                    <Input
                      id="studentId"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange('studentId', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="courseEnrolled">Course Enrolled</Label>
                    <Select onValueChange={(value) => handleInputChange('courseEnrolled', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foundation">Foundation Course</SelectItem>
                        <SelectItem value="advanced">Advanced Program</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="business">Business Administration</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="testPreferences">Test Preferences</Label>
                    <Select onValueChange={(value) => handleInputChange('testPreferences', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning Session (9:00 AM - 11:00 AM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon Session (2:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening Session (6:00 PM - 8:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequirements">Special Requirements</Label>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                      placeholder="Any special accommodations or requirements (optional)"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-exam-blue hover:bg-exam-blue/90" disabled={isSubmitting}>
                    {isSubmitting ? "Registering..." : "Register for Regular Tests"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <Card className="shadow-card border-exam-blue/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-exam-blue">Regular Testing Process</CardTitle>
              <CardDescription className="text-center">
                Learn about our assessment methodology and how regular tests benefit your learning
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Regular Testing Process Video</p>
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

export default RegularTestsPage;
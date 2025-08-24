import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Clock, Calendar, BookOpen, Sun } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const MorningClassesPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    courseName: "",
    preferredTimeSlot: "",
    daysOfWeek: [] as string[],
    durationWeeks: "",
    specialRequirements: ""
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDayChange = (day: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        daysOfWeek: [...prev.daysOfWeek, day]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        daysOfWeek: prev.daysOfWeek.filter(d => d !== day)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Authentication Required",
          description: "Please sign in to schedule morning classes.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('morning_classes')
        .insert([{
          user_id: user.id,
          student_name: formData.studentName,
          email: formData.email,
          phone: formData.phone,
          course_name: formData.courseName,
          preferred_time_slot: formData.preferredTimeSlot,
          days_of_week: formData.daysOfWeek,
          duration_weeks: parseInt(formData.durationWeeks),
          special_requirements: formData.specialRequirements
        }]);

      if (error) throw error;

      toast({
        title: "Schedule Submitted!",
        description: "Your morning class schedule request has been submitted successfully.",
      });

      setFormData({
        studentName: "",
        email: "",
        phone: "",
        courseName: "",
        preferredTimeSlot: "",
        daysOfWeek: [],
        durationWeeks: "",
        specialRequirements: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your schedule. Please try again.",
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Morning Classes</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Start your day with focused learning in our structured morning class sessions from 8:00 AM to 12:00 PM.
          </p>
        </div>
      </div>

      {/* Class Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Class Details */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <Sun className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Morning Class Benefits</CardTitle>
                <CardDescription>
                  Morning classes are designed to take advantage of your peak mental energy and focus for maximum learning efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Schedule: 8:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span>Duration: Flexible (4-52 weeks)</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-5 h-5 mr-3 text-primary" />
                  <span>Focus: Core subjects and theoretical learning</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Why Choose Morning Classes?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Peak Mental Performance</p>
                      <p className="text-sm text-gray-600">Highest concentration levels in the morning</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Fewer Distractions</p>
                      <p className="text-sm text-gray-600">Quiet learning environment with minimal interruptions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Better Time Management</p>
                      <p className="text-sm text-gray-600">Leaves afternoon and evening free for other activities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Structured Learning</p>
                      <p className="text-sm text-gray-600">Well-organized curriculum with clear objectives</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Available Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Mathematics</h4>
                    <p className="text-sm text-gray-600">Algebra, Calculus, Statistics</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Sciences</h4>
                    <p className="text-sm text-gray-600">Physics, Chemistry, Biology</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Languages</h4>
                    <p className="text-sm text-gray-600">English, Urdu, Arabic</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Social Studies</h4>
                    <p className="text-sm text-gray-600">History, Geography, Civics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Schedule Form */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Morning Classes</CardTitle>
                <CardDescription>
                  Customize your morning class schedule according to your preferences and availability.
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
                    <Label htmlFor="courseName">Course/Subject</Label>
                    <Select onValueChange={(value) => handleInputChange('courseName', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course or subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="business">Business Studies</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredTimeSlot">Preferred Time Slot</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredTimeSlot', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8-9">8:00 AM - 9:00 AM</SelectItem>
                        <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                        <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                        <SelectItem value="11-12">11:00 AM - 12:00 PM</SelectItem>
                        <SelectItem value="8-10">8:00 AM - 10:00 AM (2 hours)</SelectItem>
                        <SelectItem value="10-12">10:00 AM - 12:00 PM (2 hours)</SelectItem>
                        <SelectItem value="8-12">8:00 AM - 12:00 PM (4 hours)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Days of the Week</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                        <div key={day} className="flex items-center space-x-2">
                          <Checkbox
                            id={day}
                            checked={formData.daysOfWeek.includes(day)}
                            onCheckedChange={(checked) => handleDayChange(day, checked as boolean)}
                          />
                          <Label htmlFor={day} className="text-sm">{day}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="durationWeeks">Course Duration (Weeks)</Label>
                    <Select onValueChange={(value) => handleInputChange('durationWeeks', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4">4 weeks</SelectItem>
                        <SelectItem value="8">8 weeks</SelectItem>
                        <SelectItem value="12">12 weeks (3 months)</SelectItem>
                        <SelectItem value="24">24 weeks (6 months)</SelectItem>
                        <SelectItem value="52">52 weeks (1 year)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="specialRequirements">Special Requirements</Label>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                      placeholder="Any special requirements or preferences (optional)"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Scheduling..." : "Schedule Morning Classes"}
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
              <CardTitle className="text-2xl text-center">Morning Learning Environment</CardTitle>
              <CardDescription className="text-center">
                Experience the benefits of our morning class sessions and learning atmosphere
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Sun className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Morning Classes Overview Video</p>
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

export default MorningClassesPage;
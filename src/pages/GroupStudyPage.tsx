import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Users, Clock, BookOpen, Target } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const GroupStudyPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseStudying: "",
    preferredGroupSize: "",
    availableTimes: [] as string[],
    studySubjects: [] as string[],
    groupPreferences: ""
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTimeSlotChange = (timeSlot: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        availableTimes: [...prev.availableTimes, timeSlot]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        availableTimes: prev.availableTimes.filter(time => time !== timeSlot)
      }));
    }
  };

  const handleSubjectChange = (subject: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        studySubjects: [...prev.studySubjects, subject]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        studySubjects: prev.studySubjects.filter(sub => sub !== subject)
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
          description: "Please sign in to create a group study.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('group_study')
        .insert([{
          user_id: user.id,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course_studying: formData.courseStudying,
          preferred_group_size: parseInt(formData.preferredGroupSize),
          available_times: formData.availableTimes,
          study_subjects: formData.studySubjects,
          group_preferences: formData.groupPreferences
        }]);

      if (error) throw error;

      toast({
        title: "Group Study Request Submitted!",
        description: "Your group study request has been submitted successfully. We'll match you with suitable study partners.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        courseStudying: "",
        preferredGroupSize: "",
        availableTimes: [],
        studySubjects: [],
        groupPreferences: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Group Study Program</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Join collaborative learning groups and enhance your studies through peer interaction, shared knowledge, and mutual support.
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
                <Users className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Group Study Benefits</CardTitle>
                <CardDescription>
                  Discover the power of collaborative learning in our structured group study environment.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Flexible scheduling to fit your availability</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-5 h-5 mr-3 text-primary" />
                  <span>Subject-specific study groups</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 mr-3 text-primary" />
                  <span>Peer-to-peer learning and support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>How Group Study Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <p className="font-semibold">Submit Your Preferences</p>
                      <p className="text-sm text-gray-600">Tell us your subjects, schedule, and group preferences</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <p className="font-semibold">Get Matched</p>
                      <p className="text-sm text-gray-600">We match you with compatible study partners</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <p className="font-semibold">Start Studying</p>
                      <p className="text-sm text-gray-600">Begin collaborative learning with your group</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                    <div>
                      <p className="font-semibold">Ongoing Support</p>
                      <p className="text-sm text-gray-600">Receive guidance and resources from our coordinators</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Study Group Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Dedicated Study Rooms</h4>
                    <p className="text-sm text-gray-600">Quiet, well-equipped spaces for group sessions</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Resource Sharing</h4>
                    <p className="text-sm text-gray-600">Access to digital libraries and study materials</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Progress Tracking</h4>
                    <p className="text-sm text-gray-600">Monitor group and individual learning progress</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Expert Facilitators</h4>
                    <p className="text-sm text-gray-600">Guidance from experienced study coordinators</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Form */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Join Group Study</CardTitle>
                <CardDescription>
                  Fill out this form to be matched with the perfect study group for your needs.
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
                    <Label htmlFor="courseStudying">Course Currently Studying</Label>
                    <Input
                      id="courseStudying"
                      value={formData.courseStudying}
                      onChange={(e) => handleInputChange('courseStudying', e.target.value)}
                      placeholder="e.g., Computer Science, Business Administration"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredGroupSize">Preferred Group Size</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredGroupSize', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 members</SelectItem>
                        <SelectItem value="4">4 members</SelectItem>
                        <SelectItem value="5">5 members</SelectItem>
                        <SelectItem value="6">6 members</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['Morning (8-12)', 'Afternoon (1-5)', 'Evening (6-9)', 'Weekend Morning', 'Weekend Afternoon', 'Weekend Evening'].map((timeSlot) => (
                        <div key={timeSlot} className="flex items-center space-x-2">
                          <Checkbox
                            id={timeSlot}
                            checked={formData.availableTimes.includes(timeSlot)}
                            onCheckedChange={(checked) => handleTimeSlotChange(timeSlot, checked as boolean)}
                          />
                          <Label htmlFor={timeSlot} className="text-sm">{timeSlot}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Study Subjects</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['Mathematics', 'Science', 'English', 'History', 'Computer Science', 'Business'].map((subject) => (
                        <div key={subject} className="flex items-center space-x-2">
                          <Checkbox
                            id={subject}
                            checked={formData.studySubjects.includes(subject)}
                            onCheckedChange={(checked) => handleSubjectChange(subject, checked as boolean)}
                          />
                          <Label htmlFor={subject} className="text-sm">{subject}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="groupPreferences">Group Preferences & Additional Notes</Label>
                    <Textarea
                      id="groupPreferences"
                      value={formData.groupPreferences}
                      onChange={(e) => handleInputChange('groupPreferences', e.target.value)}
                      placeholder="Tell us about your study style, preferred group dynamics, or any specific requirements"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Join Group Study"}
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
              <CardTitle className="text-2xl text-center">Group Study Success Stories</CardTitle>
              <CardDescription className="text-center">
                See how our group study program has helped students achieve their goals
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Group Study Success Stories</p>
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

export default GroupStudyPage;
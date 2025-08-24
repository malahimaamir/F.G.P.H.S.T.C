import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, FileText, Upload, CheckCircle, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ApplicationsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    previousEducation: "",
    courseApplyingFor: "",
    applicationDocuments: [] as string[]
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDocumentChange = (document: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        applicationDocuments: [...prev.applicationDocuments, document]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        applicationDocuments: prev.applicationDocuments.filter(doc => doc !== document)
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
          description: "Please sign in to submit your application.",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase
        .from('applications')
        .insert([{
          user_id: user.id,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          date_of_birth: formData.dateOfBirth,
          address: formData.address,
          previous_education: formData.previousEducation,
          course_applying_for: formData.courseApplyingFor,
          application_documents: formData.applicationDocuments
        }]);

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "Your application has been submitted successfully. We'll review it and get back to you soon.",
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        address: "",
        previousEducation: "",
        courseApplyingFor: "",
        applicationDocuments: []
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Submit Application</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Start your educational journey with F.G.P.H.S.T.C by submitting your application for admission to our programs.
          </p>
        </div>
      </div>

      {/* Application Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Application Details */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Application Process</CardTitle>
                <CardDescription>
                  Follow our simple application process to join F.G.P.H.S.T.C and begin your educational journey.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Processing Time: 3-5 business days</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 mr-3 text-primary" />
                  <span>Online Application Available</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Upload className="w-5 h-5 mr-3 text-primary" />
                  <span>Digital Document Submission</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Academic Transcripts</p>
                      <p className="text-sm text-gray-600">Official transcripts from previous institutions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Identity Documents</p>
                      <p className="text-sm text-gray-600">CNIC copy and passport-sized photographs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Medical Certificate</p>
                      <p className="text-sm text-gray-600">Health certificate from registered doctor</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <p className="font-semibold">Character Certificate</p>
                      <p className="text-sm text-gray-600">Character reference from previous institution</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Admission Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Foundation Course</h4>
                    <p className="text-sm text-gray-600">Minimum Matriculation or equivalent</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Advanced Program</h4>
                    <p className="text-sm text-gray-600">Intermediate or Bachelor's degree</p>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Age Requirements</h4>
                    <p className="text-sm text-gray-600">16+ years for most programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>
                  Please fill out all required fields to submit your application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your complete postal address"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="previousEducation">Previous Education *</Label>
                    <Select onValueChange={(value) => handleInputChange('previousEducation', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matriculation">Matriculation</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="courseApplyingFor">Course Applying For *</Label>
                    <Select onValueChange={(value) => handleInputChange('courseApplyingFor', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="foundation">Foundation Course</SelectItem>
                        <SelectItem value="advanced">Advanced Program</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="business">Business Administration</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Documents to Submit (Select all that apply)</Label>
                    <div className="grid grid-cols-1 gap-2 mt-2">
                      {[
                        'Academic Transcripts',
                        'CNIC Copy', 
                        'Passport Photos',
                        'Medical Certificate',
                        'Character Certificate',
                        'Fee Payment Receipt'
                      ].map((document) => (
                        <div key={document} className="flex items-center space-x-2">
                          <Checkbox
                            id={document}
                            checked={formData.applicationDocuments.includes(document)}
                            onCheckedChange={(checked) => handleDocumentChange(document, checked as boolean)}
                          />
                          <Label htmlFor={document} className="text-sm">{document}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
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
              <CardTitle className="text-2xl text-center">Application Process Guide</CardTitle>
              <CardDescription className="text-center">
                Watch this step-by-step guide to learn about our application process
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-full max-w-4xl aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Application Process Video Guide</p>
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

export default ApplicationsPage;
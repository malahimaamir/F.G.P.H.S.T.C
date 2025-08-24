import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import contactImg from "../assets/contact.jpg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) {
        toast.error("Failed to submit form. Please try again.");
        console.error(error);
      } else {
        toast.success("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="relative py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-education-blue/70 to-education-green/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              Get in touch with us for any questions, admissions inquiries, or
              support. We're here to help you on your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-education-blue to-education-green rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-100">info@fgphstc.edu</p>
                        <p className="text-gray-100">admissions@fgphstc.edu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-education-green to-education-blue rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-gray-100">+1 (555) 123-4567</p>
                        <p className="text-gray-100">+1 (555) 987-6543</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-education-blue to-education-green rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Address</h3>
                        <p className="text-gray-100">123 Education Street</p>
                        <p className="text-gray-100">Learning City, LC 12345</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-education-green to-education-blue rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          Office Hours
                        </h3>
                        <p className="text-gray-100">
                          Monday - Friday: 8:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-100">
                          Saturday: 9:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-education-blue"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-education-blue"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-education-blue"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-education-blue"
                          placeholder="Subject of your message"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-education-blue resize-none"
                        placeholder="Please describe your inquiry or message in detail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-education-blue to-education-green hover:from-education-blue/90 hover:to-education-green/90 transition-all duration-300 transform hover:scale-105 py-3 text-lg font-semibold"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ContactSection;

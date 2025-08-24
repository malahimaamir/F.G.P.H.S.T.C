import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen, Users, GraduationCap, CreditCard, Clock, UserCheck, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Study Plan Section
export const StudyPlanSection = () => (
  <section id="studyplan" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Study Plans</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Structured learning paths designed to help you achieve your educational goals efficiently.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Foundation Course */}
        <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <BookOpen className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Foundation Course</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Build strong fundamentals with our comprehensive foundation program.</p>
            <Link to="/foundation-course">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Advanced Program */}
        <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <GraduationCap className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Advanced Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Advanced coursework for experienced learners seeking specialization.</p>
            <Link to="/advanced-program">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Group Study */}
        <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
          <CardHeader>
            <Users className="w-12 h-12 text-primary mb-4" />
            <CardTitle>Group Study</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Collaborative learning environment with peer support and guidance.</p>
            <Link to="/group-study">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardContent>
        </Card>

      </div>
    </div>
  </section>
);

// Exam Section
export const ExamSection = () => (
  <section id="exam" className="py-20 bg-exam-blue/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-exam-blue">Examinations</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Comprehensive examination system designed to assess and validate your knowledge effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Regular Tests */}
        <Link to="/regular-tests">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-exam-blue/20 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-exam-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-exam-blue" />
              </div>
              <h3 className="font-semibold text-exam-blue mb-2">Regular Tests</h3>
              <p className="text-sm text-gray-600">Weekly assessments to track progress</p>
            </CardContent>
          </Card>
        </Link>

        {/* Mid-Term Exams */}
        <Link to="/mid-term-exams">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-exam-blue/20 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-exam-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-exam-blue" />
              </div>
              <h3 className="font-semibold text-exam-blue mb-2">Mid-Term Exams</h3>
              <p className="text-sm text-gray-600">Comprehensive mid-semester evaluations</p>
            </CardContent>
          </Card>
        </Link>

        {/* Final Exams */}
        <Link to="/final-exams">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-exam-blue/20 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-exam-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-exam-blue" />
              </div>
              <h3 className="font-semibold text-exam-blue mb-2">Final Exams</h3>
              <p className="text-sm text-gray-600">Year-end comprehensive assessments</p>
            </CardContent>
          </Card>
        </Link>

        {/* Online Tests */}
        <Link to="/online-tests">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-exam-blue/20 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-exam-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-exam-blue" />
              </div>
              <h3 className="font-semibold text-exam-blue mb-2">Online Tests</h3>
              <p className="text-sm text-gray-600">Digital assessment platform</p>
            </CardContent>
          </Card>
        </Link>

      </div>
    </div>
  </section>
);

// Teachers Section
export const TeachersSection = () => (
  <section id="teachers" className="py-20 bg-teacher-orange/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-teacher-orange">Our Teachers</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn from experienced educators dedicated to your success and academic excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-teacher-orange/20">
          <CardContent className="p-6">
            <div className="w-24 h-24 bg-teacher-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-12 h-12 text-teacher-orange" />
            </div>
            <h3 className="font-semibold text-teacher-orange mb-2 text-lg">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">Highly qualified teachers with years of experience in their respective fields.</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-teacher-orange/20">
          <CardContent className="p-6">
            <div className="w-24 h-24 bg-teacher-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-12 h-12 text-teacher-orange" />
            </div>
            <h3 className="font-semibold text-teacher-orange mb-2 text-lg">Subject Specialists</h3>
            <p className="text-gray-600 text-sm">Dedicated specialists for each subject area ensuring comprehensive coverage.</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-teacher-orange/20">
          <CardContent className="p-6">
            <div className="w-24 h-24 bg-teacher-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-12 h-12 text-teacher-orange" />
            </div>
            <h3 className="font-semibold text-teacher-orange mb-2 text-lg">Mentors & Guides</h3>
            <p className="text-gray-600 text-sm">Personal mentors to guide you through your educational journey and career.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Principal Section
export const PrincipalSection = () => (
  <section id="principal" className="py-20 bg-principal-green/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-principal-green">Principal's Message</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Leadership and vision driving educational excellence at F.G.P.H.S.T.C.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-card border-principal-green/20">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-32 h-32 bg-principal-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-16 h-16 text-principal-green" />
              </div>
              <h3 className="text-2xl font-bold text-principal-green mb-2">Dr. Academic Leader</h3>
              <p className="text-gray-600">Principal, F.G.P.H.S.T.C</p>
            </div>
            <blockquote className="text-lg text-gray-700 italic text-center leading-relaxed">
              "Welcome to F.G.P.H.S.T.C, where we believe in nurturing minds and shaping futures. 
              Our commitment to academic excellence, innovative teaching methods, and holistic 
              development ensures that every student reaches their full potential. Together, 
              we build not just successful careers, but responsible citizens who contribute 
              meaningfully to society."
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Payment Mode Section
export const PaymentModeSection = () => (
  <section id="paymentmode" className="py-20 bg-payment-red/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-payment-red">Payment Options</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Flexible and secure payment methods to make your education accessible and convenient.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-payment-red/20">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-payment-red" />
            </div>
            <h3 className="font-semibold text-payment-red mb-2">Online Payment</h3>
            <p className="text-sm text-gray-600">Secure online transactions</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-payment-red/20">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-payment-red" />
            </div>
            <h3 className="font-semibold text-payment-red mb-2">Installments</h3>
            <p className="text-sm text-gray-600">Flexible payment plans</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-payment-red/20">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-payment-red" />
            </div>
            <h3 className="font-semibold text-payment-red mb-2">Bank Transfer</h3>
            <p className="text-sm text-gray-600">Direct bank transfers</p>
          </CardContent>
        </Card>
        <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 border-payment-red/20">
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-payment-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-payment-red" />
            </div>
            <h3 className="font-semibold text-payment-red mb-2">Phone Payment</h3>
            <p className="text-sm text-gray-600">Payment via phone support</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

// Schedule Section
export const ScheduleSection = () => (
  <section id="schedule" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Class Schedule</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Well-organized schedule designed to optimize your learning experience and time management.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <Link to="/morning-classes">
          <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardHeader>
              <Clock className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Morning Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">8:00 AM - 12:00 PM</p>
              <p className="text-sm text-gray-500">Core subjects and theoretical sessions</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/afternoon-sessions">
          <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardHeader>
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Afternoon Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">1:00 PM - 5:00 PM</p>
              <p className="text-sm text-gray-500">Practical sessions and lab work</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/evening-programs">
          <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Evening Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">6:00 PM - 9:00 PM</p>
              <p className="text-sm text-gray-500">Special programs and extra activities</p>
            </CardContent>
          </Card>
        </Link>

      </div>
    </div>
  </section>
);

// Entry Section
export const EntrySection = () => (
  <section id="entry" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Admission Process</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Simple and transparent admission process to help you start your educational journey with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <Link to="/applications">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Application</h3>
              <p className="text-sm text-gray-600">Submit your application online or in person</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/review">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Review</h3>
              <p className="text-sm text-gray-600">Application review and document verification</p>
            </CardContent>
          </Card>
        </Link>

        {/* Interview */}
        <Link to="/interview">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Interview</h3>
              <p className="text-sm text-gray-600">Personal interview with admission committee</p>
            </CardContent>
          </Card>
        </Link>

        {/* Enrollment */}
        <Link to="/enrollment">
          <Card className="text-center shadow-card hover:shadow-elegant transition-shadow duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Enrollment</h3>
              <p className="text-sm text-gray-600">Complete enrollment and begin your journey</p>
            </CardContent>
          </Card>
        </Link>

      </div>
    </div>
  </section>
);
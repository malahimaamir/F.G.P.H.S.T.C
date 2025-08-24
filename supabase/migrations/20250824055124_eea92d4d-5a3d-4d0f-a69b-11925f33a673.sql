-- Create tables for Schedule sections
CREATE TABLE public.morning_classes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_name TEXT NOT NULL,
  preferred_time_slot TEXT NOT NULL,
  days_of_week TEXT[] NOT NULL,
  duration_weeks INTEGER NOT NULL,
  special_requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.afternoon_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  session_type TEXT NOT NULL,
  preferred_time_slot TEXT NOT NULL,
  days_of_week TEXT[] NOT NULL,
  practical_lab_preference TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.evening_programs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  program_type TEXT NOT NULL,
  preferred_time_slot TEXT NOT NULL,
  days_of_week TEXT[] NOT NULL,
  activity_preference TEXT,
  transportation_needed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tables for Admission sections
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT NOT NULL,
  previous_education TEXT NOT NULL,
  course_applying_for TEXT NOT NULL,
  application_documents TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  application_id UUID,
  student_name TEXT NOT NULL,
  review_status TEXT NOT NULL DEFAULT 'pending',
  documents_verified BOOLEAN DEFAULT false,
  verification_notes TEXT,
  next_steps TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.interviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  applicant_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_interview_date DATE NOT NULL,
  preferred_time_slot TEXT NOT NULL,
  interview_format TEXT NOT NULL,
  special_accommodations TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_enrolled TEXT NOT NULL,
  enrollment_date DATE NOT NULL,
  fee_payment_status TEXT NOT NULL DEFAULT 'pending',
  student_id_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tables for Services sections
CREATE TABLE public.online_learning_platform (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  learning_level TEXT NOT NULL,
  subjects_interested TEXT[] NOT NULL,
  device_access TEXT NOT NULL,
  learning_goals TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.digital_library_resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  research_area TEXT NOT NULL,
  resource_type TEXT[] NOT NULL,
  access_duration TEXT NOT NULL,
  library_card_needed BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.academic_consultation (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  consultation_type TEXT NOT NULL,
  subject_area TEXT NOT NULL,
  current_education_level TEXT NOT NULL,
  specific_challenges TEXT,
  preferred_meeting_time TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.career_guidance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_education_status TEXT NOT NULL,
  career_interests TEXT[] NOT NULL,
  work_experience TEXT,
  career_goals TEXT NOT NULL,
  guidance_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.digital_certification (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  certification_type TEXT NOT NULL,
  course_completed TEXT NOT NULL,
  completion_date DATE NOT NULL,
  portfolio_url TEXT,
  verification_needed BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all new tables
ALTER TABLE public.morning_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.afternoon_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.evening_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.interviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_learning_platform ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_library_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academic_consultation ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_guidance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_certification ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for Schedule tables
CREATE POLICY "Users can insert their own morning class schedules" ON public.morning_classes
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own morning class schedules" ON public.morning_classes
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own afternoon session schedules" ON public.afternoon_sessions
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own afternoon session schedules" ON public.afternoon_sessions
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own evening program schedules" ON public.evening_programs
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own evening program schedules" ON public.evening_programs
FOR SELECT USING (auth.uid() = user_id);

-- Create RLS policies for Admission tables
CREATE POLICY "Users can insert their own applications" ON public.applications
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own applications" ON public.applications
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own reviews" ON public.reviews
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own reviews" ON public.reviews
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own interview requests" ON public.interviews
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own interview requests" ON public.interviews
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own enrollments" ON public.enrollments
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own enrollments" ON public.enrollments
FOR SELECT USING (auth.uid() = user_id);

-- Create RLS policies for Services tables
CREATE POLICY "Users can insert their own online learning requests" ON public.online_learning_platform
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own online learning requests" ON public.online_learning_platform
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own digital library requests" ON public.digital_library_resources
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own digital library requests" ON public.digital_library_resources
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own consultation requests" ON public.academic_consultation
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own consultation requests" ON public.academic_consultation
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own career guidance requests" ON public.career_guidance
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own career guidance requests" ON public.career_guidance
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own certification requests" ON public.digital_certification
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own certification requests" ON public.digital_certification
FOR SELECT USING (auth.uid() = user_id);

-- Create triggers for updated_at on all new tables
CREATE TRIGGER update_morning_classes_updated_at
BEFORE UPDATE ON public.morning_classes
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_afternoon_sessions_updated_at
BEFORE UPDATE ON public.afternoon_sessions
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_evening_programs_updated_at
BEFORE UPDATE ON public.evening_programs
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
BEFORE UPDATE ON public.applications
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_interviews_updated_at
BEFORE UPDATE ON public.interviews
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_enrollments_updated_at
BEFORE UPDATE ON public.enrollments
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_online_learning_platform_updated_at
BEFORE UPDATE ON public.online_learning_platform
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_digital_library_resources_updated_at
BEFORE UPDATE ON public.digital_library_resources
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_academic_consultation_updated_at
BEFORE UPDATE ON public.academic_consultation
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_career_guidance_updated_at
BEFORE UPDATE ON public.career_guidance
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_digital_certification_updated_at
BEFORE UPDATE ON public.digital_certification
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
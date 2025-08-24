-- Create tables for Study Plan sections
CREATE TABLE public.foundation_course_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  age INTEGER NOT NULL,
  education_background TEXT NOT NULL,
  preferred_schedule TEXT NOT NULL,
  learning_goals TEXT,
  previous_experience TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.advanced_program (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_education_level TEXT NOT NULL,
  selected_course TEXT NOT NULL,
  specialization TEXT,
  career_goals TEXT,
  work_experience TEXT,
  preferred_duration TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.group_study (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_studying TEXT NOT NULL,
  preferred_group_size INTEGER NOT NULL,
  available_times TEXT[] NOT NULL,
  study_subjects TEXT[] NOT NULL,
  group_preferences TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tables for Exam sections
CREATE TABLE public.regular_tests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  course_enrolled TEXT NOT NULL,
  test_preferences TEXT NOT NULL,
  special_requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.midterm_exams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  semester TEXT NOT NULL,
  subjects TEXT[] NOT NULL,
  exam_center_preference TEXT,
  special_accommodations TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.final_exams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  student_id TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  degree_program TEXT NOT NULL,
  subjects_registered TEXT[] NOT NULL,
  exam_format_preference TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.online_tests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  student_name TEXT NOT NULL,
  email TEXT NOT NULL,
  device_type TEXT NOT NULL,
  internet_speed TEXT NOT NULL,
  preferred_test_time TEXT NOT NULL,
  technical_support_needed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tables for Teachers sections
CREATE TABLE public.expert_faculty (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject_interest TEXT NOT NULL,
  preferred_teacher_type TEXT NOT NULL,
  consultation_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.subject_specialists (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject_needed TEXT NOT NULL,
  learning_level TEXT NOT NULL,
  session_type TEXT NOT NULL,
  specific_topics TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.mentors_guides (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  mentoring_area TEXT NOT NULL,
  career_stage TEXT NOT NULL,
  goals TEXT NOT NULL,
  preferred_meeting_frequency TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.foundation_course_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.advanced_program ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_study ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.regular_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.midterm_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.final_exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.online_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expert_faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subject_specialists ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentors_guides ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for all tables
-- Foundation Course Details
CREATE POLICY "Users can insert their own foundation course details" ON public.foundation_course_details
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own foundation course details" ON public.foundation_course_details
FOR SELECT USING (auth.uid() = user_id);

-- Advanced Program
CREATE POLICY "Users can insert their own advanced program details" ON public.advanced_program
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own advanced program details" ON public.advanced_program
FOR SELECT USING (auth.uid() = user_id);

-- Group Study
CREATE POLICY "Users can insert their own group study details" ON public.group_study
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own group study details" ON public.group_study
FOR SELECT USING (auth.uid() = user_id);

-- Regular Tests
CREATE POLICY "Users can insert their own regular test details" ON public.regular_tests
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own regular test details" ON public.regular_tests
FOR SELECT USING (auth.uid() = user_id);

-- Midterm Exams
CREATE POLICY "Users can insert their own midterm exam details" ON public.midterm_exams
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own midterm exam details" ON public.midterm_exams
FOR SELECT USING (auth.uid() = user_id);

-- Final Exams
CREATE POLICY "Users can insert their own final exam details" ON public.final_exams
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own final exam details" ON public.final_exams
FOR SELECT USING (auth.uid() = user_id);

-- Online Tests
CREATE POLICY "Users can insert their own online test details" ON public.online_tests
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own online test details" ON public.online_tests
FOR SELECT USING (auth.uid() = user_id);

-- Expert Faculty
CREATE POLICY "Users can insert their own expert faculty requests" ON public.expert_faculty
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own expert faculty requests" ON public.expert_faculty
FOR SELECT USING (auth.uid() = user_id);

-- Subject Specialists
CREATE POLICY "Users can insert their own subject specialist requests" ON public.subject_specialists
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own subject specialist requests" ON public.subject_specialists
FOR SELECT USING (auth.uid() = user_id);

-- Mentors Guides
CREATE POLICY "Users can insert their own mentor guide requests" ON public.mentors_guides
FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their own mentor guide requests" ON public.mentors_guides
FOR SELECT USING (auth.uid() = user_id);

-- Create triggers for updated_at
CREATE TRIGGER update_foundation_course_details_updated_at
BEFORE UPDATE ON public.foundation_course_details
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_advanced_program_updated_at
BEFORE UPDATE ON public.advanced_program
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_group_study_updated_at
BEFORE UPDATE ON public.group_study
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_regular_tests_updated_at
BEFORE UPDATE ON public.regular_tests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_midterm_exams_updated_at
BEFORE UPDATE ON public.midterm_exams
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_final_exams_updated_at
BEFORE UPDATE ON public.final_exams
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_online_tests_updated_at
BEFORE UPDATE ON public.online_tests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_expert_faculty_updated_at
BEFORE UPDATE ON public.expert_faculty
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_subject_specialists_updated_at
BEFORE UPDATE ON public.subject_specialists
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_mentors_guides_updated_at
BEFORE UPDATE ON public.mentors_guides
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
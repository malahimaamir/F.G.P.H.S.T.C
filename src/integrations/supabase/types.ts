export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      academic_consultation: {
        Row: {
          consultation_type: string
          created_at: string
          current_education_level: string
          email: string
          full_name: string
          id: string
          phone: string
          preferred_meeting_time: string
          specific_challenges: string | null
          subject_area: string
          updated_at: string
          user_id: string
        }
        Insert: {
          consultation_type: string
          created_at?: string
          current_education_level: string
          email: string
          full_name: string
          id?: string
          phone: string
          preferred_meeting_time: string
          specific_challenges?: string | null
          subject_area: string
          updated_at?: string
          user_id: string
        }
        Update: {
          consultation_type?: string
          created_at?: string
          current_education_level?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string
          preferred_meeting_time?: string
          specific_challenges?: string | null
          subject_area?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      advanced_program: {
        Row: {
          career_goals: string | null
          created_at: string
          current_education_level: string
          email: string
          full_name: string
          id: string
          phone: string
          preferred_duration: string
          selected_course: string
          specialization: string | null
          updated_at: string
          user_id: string
          work_experience: string | null
        }
        Insert: {
          career_goals?: string | null
          created_at?: string
          current_education_level: string
          email: string
          full_name: string
          id?: string
          phone: string
          preferred_duration: string
          selected_course: string
          specialization?: string | null
          updated_at?: string
          user_id: string
          work_experience?: string | null
        }
        Update: {
          career_goals?: string | null
          created_at?: string
          current_education_level?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string
          preferred_duration?: string
          selected_course?: string
          specialization?: string | null
          updated_at?: string
          user_id?: string
          work_experience?: string | null
        }
        Relationships: []
      }
      afternoon_sessions: {
        Row: {
          created_at: string
          days_of_week: string[]
          email: string
          id: string
          phone: string
          practical_lab_preference: string | null
          preferred_time_slot: string
          session_type: string
          student_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          days_of_week: string[]
          email: string
          id?: string
          phone: string
          practical_lab_preference?: string | null
          preferred_time_slot: string
          session_type: string
          student_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          days_of_week?: string[]
          email?: string
          id?: string
          phone?: string
          practical_lab_preference?: string | null
          preferred_time_slot?: string
          session_type?: string
          student_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      applications: {
        Row: {
          address: string
          application_documents: string[] | null
          course_applying_for: string
          created_at: string
          date_of_birth: string
          email: string
          full_name: string
          id: string
          phone: string
          previous_education: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          application_documents?: string[] | null
          course_applying_for: string
          created_at?: string
          date_of_birth: string
          email: string
          full_name: string
          id?: string
          phone: string
          previous_education: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          application_documents?: string[] | null
          course_applying_for?: string
          created_at?: string
          date_of_birth?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string
          previous_education?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      career_guidance: {
        Row: {
          career_goals: string
          career_interests: string[]
          created_at: string
          current_education_status: string
          email: string
          full_name: string
          guidance_type: string
          id: string
          phone: string
          updated_at: string
          user_id: string
          work_experience: string | null
        }
        Insert: {
          career_goals: string
          career_interests: string[]
          created_at?: string
          current_education_status: string
          email: string
          full_name: string
          guidance_type: string
          id?: string
          phone: string
          updated_at?: string
          user_id: string
          work_experience?: string | null
        }
        Update: {
          career_goals?: string
          career_interests?: string[]
          created_at?: string
          current_education_status?: string
          email?: string
          full_name?: string
          guidance_type?: string
          id?: string
          phone?: string
          updated_at?: string
          user_id?: string
          work_experience?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      digital_certification: {
        Row: {
          certification_type: string
          completion_date: string
          course_completed: string
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string
          portfolio_url: string | null
          updated_at: string
          user_id: string
          verification_needed: boolean | null
        }
        Insert: {
          certification_type: string
          completion_date: string
          course_completed: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          phone: string
          portfolio_url?: string | null
          updated_at?: string
          user_id: string
          verification_needed?: boolean | null
        }
        Update: {
          certification_type?: string
          completion_date?: string
          course_completed?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string
          portfolio_url?: string | null
          updated_at?: string
          user_id?: string
          verification_needed?: boolean | null
        }
        Relationships: []
      }
      digital_library_resources: {
        Row: {
          access_duration: string
          created_at: string
          email: string
          full_name: string
          id: string
          library_card_needed: boolean | null
          phone: string
          research_area: string
          resource_type: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          access_duration: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          library_card_needed?: boolean | null
          phone: string
          research_area: string
          resource_type: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          access_duration?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          library_card_needed?: boolean | null
          phone?: string
          research_area?: string
          resource_type?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          course_enrolled: string
          created_at: string
          email: string
          enrollment_date: string
          fee_payment_status: string
          id: string
          phone: string
          student_id_number: string | null
          student_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          course_enrolled: string
          created_at?: string
          email: string
          enrollment_date: string
          fee_payment_status?: string
          id?: string
          phone: string
          student_id_number?: string | null
          student_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          course_enrolled?: string
          created_at?: string
          email?: string
          enrollment_date?: string
          fee_payment_status?: string
          id?: string
          phone?: string
          student_id_number?: string | null
          student_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      evening_programs: {
        Row: {
          activity_preference: string | null
          created_at: string
          days_of_week: string[]
          email: string
          id: string
          phone: string
          preferred_time_slot: string
          program_type: string
          student_name: string
          transportation_needed: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          activity_preference?: string | null
          created_at?: string
          days_of_week: string[]
          email: string
          id?: string
          phone: string
          preferred_time_slot: string
          program_type: string
          student_name: string
          transportation_needed?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          activity_preference?: string | null
          created_at?: string
          days_of_week?: string[]
          email?: string
          id?: string
          phone?: string
          preferred_time_slot?: string
          program_type?: string
          student_name?: string
          transportation_needed?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      expert_faculty: {
        Row: {
          consultation_type: string
          created_at: string
          email: string
          full_name: string
          id: string
          message: string | null
          phone: string
          preferred_teacher_type: string
          subject_interest: string
          updated_at: string
          user_id: string
        }
        Insert: {
          consultation_type: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          message?: string | null
          phone: string
          preferred_teacher_type: string
          subject_interest: string
          updated_at?: string
          user_id: string
        }
        Update: {
          consultation_type?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          phone?: string
          preferred_teacher_type?: string
          subject_interest?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      final_exams: {
        Row: {
          academic_year: string
          created_at: string
          degree_program: string
          exam_format_preference: string | null
          id: string
          student_id: string
          student_name: string
          subjects_registered: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          academic_year: string
          created_at?: string
          degree_program: string
          exam_format_preference?: string | null
          id?: string
          student_id: string
          student_name: string
          subjects_registered: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          academic_year?: string
          created_at?: string
          degree_program?: string
          exam_format_preference?: string | null
          id?: string
          student_id?: string
          student_name?: string
          subjects_registered?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      foundation_course_details: {
        Row: {
          age: number
          created_at: string
          education_background: string
          email: string
          full_name: string
          id: string
          learning_goals: string | null
          phone: string
          preferred_schedule: string
          previous_experience: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age: number
          created_at?: string
          education_background: string
          email: string
          full_name: string
          id?: string
          learning_goals?: string | null
          phone: string
          preferred_schedule: string
          previous_experience?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age?: number
          created_at?: string
          education_background?: string
          email?: string
          full_name?: string
          id?: string
          learning_goals?: string | null
          phone?: string
          preferred_schedule?: string
          previous_experience?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      group_study: {
        Row: {
          available_times: string[]
          course_studying: string
          created_at: string
          email: string
          full_name: string
          group_preferences: string | null
          id: string
          phone: string
          preferred_group_size: number
          study_subjects: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          available_times: string[]
          course_studying: string
          created_at?: string
          email: string
          full_name: string
          group_preferences?: string | null
          id?: string
          phone: string
          preferred_group_size: number
          study_subjects: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          available_times?: string[]
          course_studying?: string
          created_at?: string
          email?: string
          full_name?: string
          group_preferences?: string | null
          id?: string
          phone?: string
          preferred_group_size?: number
          study_subjects?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      interviews: {
        Row: {
          applicant_name: string
          created_at: string
          email: string
          id: string
          interview_format: string
          phone: string
          preferred_interview_date: string
          preferred_time_slot: string
          special_accommodations: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          applicant_name: string
          created_at?: string
          email: string
          id?: string
          interview_format: string
          phone: string
          preferred_interview_date: string
          preferred_time_slot: string
          special_accommodations?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          applicant_name?: string
          created_at?: string
          email?: string
          id?: string
          interview_format?: string
          phone?: string
          preferred_interview_date?: string
          preferred_time_slot?: string
          special_accommodations?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mentors_guides: {
        Row: {
          career_stage: string
          created_at: string
          email: string
          full_name: string
          goals: string
          id: string
          mentoring_area: string
          phone: string
          preferred_meeting_frequency: string
          updated_at: string
          user_id: string
        }
        Insert: {
          career_stage: string
          created_at?: string
          email: string
          full_name: string
          goals: string
          id?: string
          mentoring_area: string
          phone: string
          preferred_meeting_frequency: string
          updated_at?: string
          user_id: string
        }
        Update: {
          career_stage?: string
          created_at?: string
          email?: string
          full_name?: string
          goals?: string
          id?: string
          mentoring_area?: string
          phone?: string
          preferred_meeting_frequency?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      midterm_exams: {
        Row: {
          created_at: string
          exam_center_preference: string | null
          id: string
          semester: string
          special_accommodations: string | null
          student_id: string
          student_name: string
          subjects: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          exam_center_preference?: string | null
          id?: string
          semester: string
          special_accommodations?: string | null
          student_id: string
          student_name: string
          subjects: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          exam_center_preference?: string | null
          id?: string
          semester?: string
          special_accommodations?: string | null
          student_id?: string
          student_name?: string
          subjects?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      morning_classes: {
        Row: {
          course_name: string
          created_at: string
          days_of_week: string[]
          duration_weeks: number
          email: string
          id: string
          phone: string
          preferred_time_slot: string
          special_requirements: string | null
          student_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          course_name: string
          created_at?: string
          days_of_week: string[]
          duration_weeks: number
          email: string
          id?: string
          phone: string
          preferred_time_slot: string
          special_requirements?: string | null
          student_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          course_name?: string
          created_at?: string
          days_of_week?: string[]
          duration_weeks?: number
          email?: string
          id?: string
          phone?: string
          preferred_time_slot?: string
          special_requirements?: string | null
          student_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      online_learning_platform: {
        Row: {
          created_at: string
          device_access: string
          email: string
          full_name: string
          id: string
          learning_goals: string | null
          learning_level: string
          phone: string
          subjects_interested: string[]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          device_access: string
          email: string
          full_name: string
          id?: string
          learning_goals?: string | null
          learning_level: string
          phone: string
          subjects_interested: string[]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          device_access?: string
          email?: string
          full_name?: string
          id?: string
          learning_goals?: string | null
          learning_level?: string
          phone?: string
          subjects_interested?: string[]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      online_tests: {
        Row: {
          created_at: string
          device_type: string
          email: string
          id: string
          internet_speed: string
          preferred_test_time: string
          student_name: string
          technical_support_needed: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          device_type: string
          email: string
          id?: string
          internet_speed: string
          preferred_test_time: string
          student_name: string
          technical_support_needed?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          device_type?: string
          email?: string
          id?: string
          internet_speed?: string
          preferred_test_time?: string
          student_name?: string
          technical_support_needed?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      regular_tests: {
        Row: {
          course_enrolled: string
          created_at: string
          id: string
          special_requirements: string | null
          student_id: string
          student_name: string
          test_preferences: string
          updated_at: string
          user_id: string
        }
        Insert: {
          course_enrolled: string
          created_at?: string
          id?: string
          special_requirements?: string | null
          student_id: string
          student_name: string
          test_preferences: string
          updated_at?: string
          user_id: string
        }
        Update: {
          course_enrolled?: string
          created_at?: string
          id?: string
          special_requirements?: string | null
          student_id?: string
          student_name?: string
          test_preferences?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          application_id: string | null
          created_at: string
          documents_verified: boolean | null
          id: string
          next_steps: string | null
          review_status: string
          student_name: string
          updated_at: string
          user_id: string
          verification_notes: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          documents_verified?: boolean | null
          id?: string
          next_steps?: string | null
          review_status?: string
          student_name: string
          updated_at?: string
          user_id: string
          verification_notes?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string
          documents_verified?: boolean | null
          id?: string
          next_steps?: string | null
          review_status?: string
          student_name?: string
          updated_at?: string
          user_id?: string
          verification_notes?: string | null
        }
        Relationships: []
      }
      subject_specialists: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: string
          learning_level: string
          phone: string
          session_type: string
          specific_topics: string | null
          subject_needed: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          full_name: string
          id?: string
          learning_level: string
          phone: string
          session_type: string
          specific_topics?: string | null
          subject_needed: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          learning_level?: string
          phone?: string
          session_type?: string
          specific_topics?: string | null
          subject_needed?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import educationLogo from "@/assets/education-logo.png";

interface AuthProps {
  onAuthSuccess: () => void;
}

const Auth = ({ onAuthSuccess }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async () => {
    setIsLoading(true);
    
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`
          }
        });
        
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Sign up successful! Please check your email to confirm your account.");
          setIsSignUp(false);
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) {
          toast.error(error.message);
        } else {
          toast.success("Sign in successful!");
          onAuthSuccess();
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-education-blue/10 to-education-green/10 p-4">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <img src={educationLogo} alt="F.G.P.H.S.T.C Logo" className="w-16 h-16" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
            F.G.P.H.S.T.C
          </CardTitle>
          <CardDescription>
            {isSignUp ? "Create your account to access the platform" : "Sign in to access the educational platform"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-education-blue"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="transition-all duration-300 focus:ring-2 focus:ring-education-blue"
          />
          <Button 
            onClick={handleAuth}
            disabled={isLoading || !email || !password}
            className="w-full bg-gradient-to-r from-education-blue to-education-green hover:from-education-blue/90 hover:to-education-green/90 transition-all duration-300 transform hover:scale-105"
          >
            {isLoading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            variant="ghost"
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full text-education-blue hover:text-education-green transition-colors"
          >
            {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
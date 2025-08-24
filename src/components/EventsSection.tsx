import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import swimmingImg from "@/assets/swimming.jpg";
import hockeyImg from "@/assets/hockey.webp";
import tennisImg from "@/assets/tennis.jpg";
import danceImg from "@/assets/dance.jpg";
import footballImg from "@/assets/football.jpg";
import racingImg from "@/assets/racing.jpg";

const EventsSection = () => {
  const navigate = useNavigate();

  const events = [
    {
      title: "Swimming Competition",
      description: "Dive into excellence with our annual swimming competitions.",
      image: swimmingImg,
      link: "/swimming"
    },
    {
      title: "Hockey Tournament",
      description: "Showcase your skills in our inter-school hockey tournament.",
      image: hockeyImg,
      link: "/hockey"
    },
    {
      title: "Tennis Championship",
      description: "Smash your way to victory in the school tennis championship.",
      image: tennisImg,
      link: "/tennis"
    },
    {
      title: "Dance Festival",
      description: "Celebrate creativity and talent in our annual dance festival.",
      image: danceImg,
      link: "/dance"
    },
    {
      title: "football Tournament",
      description: "Compete for glory in our exciting football tournaments.",
      image: footballImg,
      link: "/football"
    },
    {
      title: "racing Tournament",
      description: "promote physical fitness and teamwork through our racing events.",
      image: racingImg,
      link: "/racing"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-education-blue to-education-green bg-clip-text text-transparent">
            School Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore exciting extracurricular activities and sports events organized throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-education-blue transition-colors">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-education-blue to-education-green hover:from-education-blue/90 hover:to-education-green/90 transition-all duration-300 transform hover:scale-105"
                  onClick={() => navigate(event.link)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

import { ArrowLeft, Target, PiggyBank, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RetirementServices = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Retirement Planning",
      description: "Comprehensive retirement planning to ensure financial security in your golden years."
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-primary" />,
      title: "Pension Management",
      description: "Professional management of pension funds and retirement accounts."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Retirement Income Planning",
      description: "Strategic planning for sustainable income throughout retirement."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your legacy and beneficiaries."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Retirement Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Secure your future with our comprehensive retirement planning services designed to help you achieve financial independence and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="glass border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Why Plan for Retirement with Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Retirement planning is crucial for maintaining your lifestyle and achieving financial independence. Our experts help you navigate the complexities of retirement planning.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Personalized retirement strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Regular portfolio reviews and adjustments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Tax-efficient retirement planning
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Legacy and estate planning services
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RetirementServices;
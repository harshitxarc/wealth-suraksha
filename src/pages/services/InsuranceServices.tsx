import { ArrowLeft, Shield, Heart, Home, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const InsuranceServices = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Life Insurance",
      description: "Comprehensive life insurance solutions to protect your family's financial future."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Health Insurance",
      description: "Medical insurance coverage to protect against healthcare costs and emergencies."
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Property Insurance",
      description: "Protect your home and property investments with comprehensive coverage."
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Auto Insurance",
      description: "Vehicle insurance solutions for comprehensive protection on the road."
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
              Insurance Services
            </h1>
            <DecorativeDivider className="mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive insurance solutions to protect what matters most - your family, health, property, and financial future with tailored coverage options.
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
              <CardTitle className="text-2xl">Why Choose Our Insurance Services?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our insurance services provide comprehensive protection against life's uncertainties. We work with top insurance providers to offer you the best coverage options.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Customized insurance solutions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Competitive rates and coverage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Fast and efficient claims processing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  24/7 customer support and assistance
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

export default InsuranceServices;
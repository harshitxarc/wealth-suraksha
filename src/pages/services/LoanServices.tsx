import { ArrowLeft, DollarSign, Home, Car, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import loanServicesImage from "@/assets/loan-services.jpg";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const LoanServices = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Home Loans",
      description: "Competitive home loan solutions to help you purchase your dream property."
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Auto Loans",
      description: "Vehicle financing options with flexible terms and competitive interest rates."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Business Loans",
      description: "Business financing solutions to help grow your enterprise and achieve your goals."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Personal Loans",
      description: "Flexible personal loan options for various financial needs and emergencies."
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
            
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Loan Services
                </h1>
                <DecorativeDivider className="mb-6" />
                <p className="text-xl text-muted-foreground mb-8">
                  Access flexible financing solutions with competitive rates and terms designed to meet your personal, business, and investment needs.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={loanServicesImage} 
                  alt="Professional loan services consultation" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
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
              <CardTitle className="text-2xl">Why Choose Our Loan Services?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our loan services are designed to provide you with the financial flexibility you need. We offer competitive rates, flexible terms, and personalized service.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Competitive interest rates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Flexible repayment terms
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Quick approval process
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Dedicated customer support
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

export default LoanServices;
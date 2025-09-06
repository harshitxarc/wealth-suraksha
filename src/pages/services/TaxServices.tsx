import { ArrowLeft, Calculator, FileText, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const TaxServices = () => {
  const services = [
    {
      icon: <Calculator className="w-8 h-8 text-primary" />,
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your tax liability and maximize savings."
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Tax Preparation",
      description: "Professional tax return preparation ensuring accuracy and compliance."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Tax Compliance",
      description: "Stay compliant with all tax regulations and filing requirements."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Year-Round Support",
      description: "Continuous tax advice and support throughout the year."
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
              Tax Services
            </h1>
            <DecorativeDivider className="mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive tax solutions to help you navigate complex tax laws, minimize liabilities, and maximize your financial efficiency with professional expertise.
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
              <CardTitle className="text-2xl">Our Tax Service Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our tax services are designed to simplify your tax obligations while ensuring maximum savings and compliance. We stay updated with the latest tax laws and regulations.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Expert tax planning strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Accurate and timely tax filing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Audit support and representation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Tax optimization for businesses and individuals
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

export default TaxServices;
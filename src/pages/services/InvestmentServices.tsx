import { ArrowLeft, TrendingUp, PieChart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const InvestmentServices = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Portfolio Management",
      description: "Professional portfolio management tailored to your financial goals and risk tolerance."
    },
    {
      icon: <PieChart className="w-8 h-8 text-primary" />,
      title: "Asset Allocation",
      description: "Strategic asset allocation across different investment classes for optimal returns."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and management strategies to protect your investments."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Investment Advisory",
      description: "Expert investment advice from our team of certified financial advisors."
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
              Investment Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive investment solutions designed to help you build wealth and achieve your financial objectives through strategic planning and expert guidance.
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
              <CardTitle className="text-2xl">Why Choose Our Investment Services?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our investment services are backed by years of experience and a deep understanding of financial markets. We provide personalized investment strategies that align with your unique financial situation and goals.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Personalized investment strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Regular portfolio reviews and rebalancing
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Access to exclusive investment opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  24/7 customer support and guidance
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

export default InvestmentServices;
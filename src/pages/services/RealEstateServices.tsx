import { ArrowLeft, Building, MapPin, TrendingUp, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const RealEstateServices = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Property Investment",
      description: "Strategic real estate investment opportunities for portfolio diversification."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Property Management",
      description: "Professional property management services to maximize your rental income."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Market Analysis",
      description: "Comprehensive market analysis and property valuation services."
    },
    {
      icon: <Key className="w-8 h-8 text-primary" />,
      title: "Real Estate Advisory",
      description: "Expert advisory services for buying, selling, and investing in real estate."
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
              Real Estate Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive real estate solutions including investment opportunities, property management, and expert advisory services for all your real estate needs.
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
              <CardTitle className="text-2xl">Why Invest in Real Estate with Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Real estate remains one of the most stable and profitable investment options. Our services help you navigate the complex real estate market with confidence.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Expert market knowledge and insights
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Access to exclusive property deals
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Professional property management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Comprehensive investment analysis
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

export default RealEstateServices;
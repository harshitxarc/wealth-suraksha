import { ArrowLeft, Building, MapPin, TrendingUp, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import realEstateServicesImage from "@/assets/real-estate-services.jpg";
import { DecorativeDivider } from "@/components/ui/decorative-divider";

const RealEstateServices = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Primary Market Transactions",
      description: "Buying and selling of new residential and commercial projects."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Property Structuring & Advisory",
      description: "Designing and structuring property investments to optimize returns and legal compliance."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Secondary Market Transactions",
      description: "Facilitating purchase and sale of pre-owned residential and commercial properties."
    },
    {
      icon: <Key className="w-8 h-8 text-primary" />,
      title: "Pre-Leased Commercial Rentals",
      description: "Assistance in acquiring or leasing commercial properties with pre-existing tenants."
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
                  Real Estate Services
                </h1>
                <DecorativeDivider className="mb-6" />
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive real estate solutions including investment opportunities, property management, and expert advisory services for all your real estate needs.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={realEstateServicesImage} 
                  alt="Professional real estate services consultation" 
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
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
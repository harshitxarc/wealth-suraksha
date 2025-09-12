import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Upload, FileText, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";


interface SignUpFormData {
  clientName: string;
  taxStatus: string;
  occupation: string;
  holdingNature: string;
  secondApplicant: string;
  thirdApplicant: string;
  dob: string;
  gender: string;
  clientGuardian: string;
  nomineeName: string;
  nomineeRelation: string;
  panNo: string;
  secondApplicantPan: string;
  thirdApplicantPan: string;
  clientGuardianPan: string;
  accType: string;
  accNo: string;
  neftCode: string;
  city: string;
  pincode: string;
  state: string;
  country: string;
  defaultBank: string;
  address1: string;
  address2: string;
  address3: string;
  city2: string;
  pinCode: string;
  state2: string;
  residencePhone: string;
  officePhone: string;
  email: string;
  mobile: string;
}

const SignUp = () => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  // Ref for the heading where 'Upload Documents' is written
  const uploadHeadingRef = useRef<HTMLHeadingElement>(null);

  // Scroll to upload section when it becomes visible
  useEffect(() => {
    if (showFileUpload) {
      setTimeout(() => {
        uploadHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [showFileUpload]);
  const { register, handleSubmit, setValue, watch } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white py-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <Link to="/" className="text-white hover:text-white/80 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-white/90 text-lg">Join thousands of investors today</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 mt-4 text-sm"
            >
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <span className="text-white/60">›</span>
              <span className="text-white">Sign Up</span>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-6xl md:text-7xl font-light mb-8 tracking-tight">
                  Create Free <span className="text-primary">Investment Account</span>
                </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Fill the registration form below to get started with your investment journey
              </p>
              
              {/* Feature Icons */}
              <div className="flex justify-center gap-8 mt-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure & Safe</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Quick Setup</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <FileText className="w-4 h-4 text-purple-500" />
                  <span>Easy Process</span>
                </motion.div>
              </div>
            </motion.div>

            {!showFileUpload ? (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm shadow-2xl border-0 ring-1 ring-border/50">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl font-bold text-primary">Registration Form</CardTitle>
                    <p className="text-muted-foreground">Please provide your details below</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                      {/* Registration Form */}
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-6">Registration Form</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="clientName" className="font-bold">Client Name</Label>
                            <Input id="clientName" {...register("clientName")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="holdingNature" className="font-bold">Holding Nature *</Label>
                            <Select onValueChange={(value) => setValue("holdingNature", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select holding nature" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="single">Single</SelectItem>
                                <SelectItem value="joint">Joint</SelectItem>
                                <SelectItem value="anyone">Anyone or Survivor</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="taxStatus" className="font-bold">Tax Status *</Label>
                            <Select onValueChange={(value) => setValue("taxStatus", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select tax status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="individual">Individual</SelectItem>
                                <SelectItem value="huf">HUF</SelectItem>
                                <SelectItem value="company">Company</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="occupation" className="font-bold">Occupation</Label>
                            <Select onValueChange={(value) => setValue("occupation", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select occupation" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="service">Service</SelectItem>
                                <SelectItem value="business">Business</SelectItem>
                                <SelectItem value="professional">Professional</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="secondApplicant" className="font-bold">Second Applicant</Label>
                            <Input id="secondApplicant" {...register("secondApplicant")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="thirdApplicant" className="font-bold">Third Applicant</Label>
                            <Input id="thirdApplicant" {...register("thirdApplicant")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dob" className="font-bold">DOB*</Label>
                            <Input id="dob" type="date" {...register("dob")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gender" className="font-bold">Gender</Label>
                            <Select onValueChange={(value) => setValue("gender", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="clientGuardian" className="font-bold">Client Guardian</Label>
                            <Input id="clientGuardian" {...register("clientGuardian")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nomineeName" className="font-bold">Nominee Name</Label>
                            <Input id="nomineeName" {...register("nomineeName")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nomineeRelation" className="font-bold">Nominee Relation</Label>
                            <Input id="nomineeRelation" {...register("nomineeRelation")} />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* PAN No Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">PAN No Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="panNo" className="font-bold">Pan No.1 *</Label>
                            <Input id="panNo" {...register("panNo")} placeholder="Enter PAN number" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="secondApplicantPan" className="font-bold">Second Applicant Pan No.2</Label>
                            <Input id="secondApplicantPan" {...register("secondApplicantPan")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="thirdApplicantPan" className="font-bold">Third Applicant Pan No.3</Label>
                            <Input id="thirdApplicantPan" {...register("thirdApplicantPan")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="clientGuardianPan" className="font-bold">Client Guardian Pan</Label>
                            <Input id="clientGuardianPan" {...register("clientGuardianPan")} />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Bank Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">Bank Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="accType" className="font-bold">Acc Type 1 *</Label>
                            <Select onValueChange={(value) => setValue("accType", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select account type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="savings">Savings</SelectItem>
                                <SelectItem value="current">Current</SelectItem>
                                <SelectItem value="nre">NRE</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="accNo" className="font-bold">Acc No.1 *</Label>
                            <Input id="accNo" {...register("accNo")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="neftCode" className="font-bold">NEFT/IFSC Code 1 *</Label>
                            <Input id="neftCode" {...register("neftCode")} />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Bank Address */}
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">Bank Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="city" className="font-bold">City *</Label>
                            <Input id="city" {...register("city")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pincode" className="font-bold">Pincode *</Label>
                            <Input id="pincode" {...register("pincode")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state" className="font-bold">State*</Label>
                            <Select onValueChange={(value) => setValue("state", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country" className="font-bold">Country *</Label>
                            <Input id="country" {...register("country")} placeholder="India" />
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="space-y-2">
                            <Label className="font-bold">Default Bank *</Label>
                            <div className="flex items-center space-x-2">
                              <input type="radio" id="yes" name="defaultBank" value="yes" />
                              <Label htmlFor="yes">Yes</Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Address Details */}
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-6">Address Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="address1" className="font-bold">Address 1 *</Label>
                            <Input id="address1" {...register("address1")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address2" className="font-bold">Address 2</Label>
                            <Input id="address2" {...register("address2")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address3" className="font-bold">Address 3</Label>
                            <Input id="address3" {...register("address3")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="city2" className="font-bold">City *</Label>
                            <Input id="city2" {...register("city2")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pinCode" className="font-bold">Pin Code *</Label>
                            <Input id="pinCode" {...register("pinCode")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state2" className="font-bold">State*</Label>
                            <Select onValueChange={(value) => setValue("state2", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="residencePhone" className="font-bold">Residence Phone</Label>
                            <Input id="residencePhone" {...register("residencePhone")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="officePhone" className="font-bold">Office Phone</Label>
                            <Input id="officePhone" {...register("officePhone")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="font-bold">Email*</Label>
                            <Input id="email" type="email" {...register("email")} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobile" className="font-bold">Mobile*</Label>
                            <Input id="mobile" {...register("mobile")} />
                          </div>
                        </div>
                      </div>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex flex-col gap-4"
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                          SUBMIT APPLICATION
                        </Button>
                        
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground font-medium">Or</span>
                          </div>
                        </div>
                        
                        <Button 
                          type="button" 
                          onClick={() => setShowFileUpload(true)}
                          variant="outline"
                          className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                          <Upload className="w-5 h-5 mr-2" />
                          Upload Documents Instead
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-card/80 backdrop-blur-sm shadow-2xl border-0 ring-1 ring-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setShowFileUpload(false)}
                        className="hover:scale-105 transition-transform"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <CardTitle ref={uploadHeadingRef} className="text-primary text-3xl font-bold">Upload Documents</CardTitle>
                    </div>
                    <p className="text-muted-foreground">Upload your documents for faster processing</p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="yourName" className="font-bold">Your Name*</Label>
                        <Input id="yourName" placeholder="Enter your name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="emailUpload" className="font-bold">Email Id*</Label>
                        <Input id="emailUpload" type="email" placeholder="Email" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="mobileUpload" className="font-bold">Mobile/Alternate Number*</Label>
                        <Input id="mobileUpload" placeholder="Mobile" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dobUpload" className="font-bold">DOB*</Label>
                        <Input id="dobUpload" placeholder="DOB" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="panUpload" className="font-bold">PAN No Details*</Label>
                        <Input id="panUpload" placeholder="Pan No" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-bold">Choose File *</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                          <input type="file" className="hidden" id="file1" />
                          <Label htmlFor="file1" className="cursor-pointer text-muted-foreground hover:text-primary transition-colors">
                            <Upload className="w-8 h-8 mx-auto mb-2" />
                            <span className="block">Click to upload PAN document</span>
                          </Label>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="aadhaarUpload" className="font-bold">Aadhaar No.</Label>
                        <Input id="aadhaarUpload" placeholder="Aadhaar No" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-bold">Choose File</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                          <input type="file" className="hidden" id="file2" />
                          <Label htmlFor="file2" className="cursor-pointer text-muted-foreground hover:text-primary transition-colors">
                            <Upload className="w-8 h-8 mx-auto mb-2" />
                            <span className="block">Click to upload Aadhaar document</span>
                          </Label>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="font-bold">Any Other file (Passport Copy)</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors">
                          <input type="file" className="hidden" id="file3" />
                          <Label htmlFor="file3" className="cursor-pointer text-muted-foreground hover:text-primary transition-colors">
                            <Upload className="w-8 h-8 mx-auto mb-2" />
                            <span className="block">Click to upload additional documents</span>
                          </Label>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      >
                        UPLOAD DOCUMENTS
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
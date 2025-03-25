
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, HandHeart, Users, Layers, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleApply = (programType: string) => {
    toast({
      title: `Application Started`,
      description: `You're applying for the ${programType} program. Your application has been initialized.`,
    });
    
    // In a real app, this would lead to a multi-step application form
    // For now, we'll just show a toast and stay on the page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-edufund-light-blue/40 to-white z-0"></div>
        
        <div className="container px-6 md:px-10 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-edufund-dark-blue mb-6 animate-fade-down">
              Apply for Support
            </h1>
            <p className="text-lg md:text-xl text-edufund-gray mb-8 animate-fade-down" style={{ animationDelay: '100ms' }}>
              Begin your journey toward educational funding and support with EDUFUND.
            </p>
          </div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-edufund-dark-blue mb-8 text-center">
              Application Process
            </h2>
            
            <div className="space-y-8">
              <ApplicationStep 
                number={1} 
                title="Choose Your Program"
                description="Select the funding and support program that best aligns with your educational needs and goals."
              />
              <ApplicationStep 
                number={2} 
                title="Check Eligibility"
                description="Review the eligibility criteria to ensure you meet the requirements for your selected program."
              />
              <ApplicationStep 
                number={3} 
                title="Prepare Documents"
                description="Gather necessary documentation including academic records, financial information, and personal statements."
              />
              <ApplicationStep 
                number={4} 
                title="Submit Application"
                description="Complete the online application form and upload all required documents by the deadline."
              />
              <ApplicationStep 
                number={5} 
                title="Interview Process"
                description="Selected candidates will be invited for interviews with our program coordinators and selection committee."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Selection */}
      <section className="py-16 bg-edufund-light-blue/20">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-edufund-dark-blue mb-8 text-center">
              Select a Program
            </h2>
            
            <Tabs defaultValue="scholarships" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="scholarships" className="text-xs md:text-sm">Scholarships</TabsTrigger>
                <TabsTrigger value="loans" className="text-xs md:text-sm">Interest-Free Loans</TabsTrigger>
                <TabsTrigger value="mentorship" className="text-xs md:text-sm">Mentorship</TabsTrigger>
                <TabsTrigger value="resources" className="text-xs md:text-sm">Support Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="scholarships" className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-edufund-blue" />
                      <h3 className="text-xl font-bold text-edufund-dark-blue">Scholarship Programs</h3>
                    </div>
                    <p className="text-edufund-gray">
                      Our scholarships are awarded based on academic merit, financial need, and personal circumstances. 
                      These funds do not require repayment and are designed to cover tuition, books, and living expenses.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-edufund-dark-blue">Available Scholarships:</h4>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="merit" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="merit" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Merit Scholarship
                          </label>
                          <p className="text-xs text-muted-foreground">For students with exceptional academic achievements.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="need" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="need" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Need-Based Scholarship
                          </label>
                          <p className="text-xs text-muted-foreground">For students demonstrating significant financial need.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="first-gen" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="first-gen" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            First-Generation Scholarship
                          </label>
                          <p className="text-xs text-muted-foreground">For first-generation college students.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-edufund-blue hover:bg-edufund-blue/90"
                      onClick={() => handleApply('Scholarship')}
                    >
                      Apply for Scholarship
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="loans" className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <HandHeart className="h-6 w-6 text-edufund-blue" />
                      <h3 className="text-xl font-bold text-edufund-dark-blue">Interest-Free Loan Programs</h3>
                    </div>
                    <p className="text-edufund-gray">
                      Our interest-free loans are designed to be flexible and supportive, with repayment terms that adapt to your financial situation after graduation.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-edufund-dark-blue">Available Loan Types:</h4>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="tuition" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="tuition" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Tuition Loan
                          </label>
                          <p className="text-xs text-muted-foreground">Covers direct educational expenses like tuition and fees.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="living" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="living" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Living Expenses Loan
                          </label>
                          <p className="text-xs text-muted-foreground">Supports housing, transportation, and daily needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="emergency" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="emergency" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Emergency Funding
                          </label>
                          <p className="text-xs text-muted-foreground">For unexpected financial challenges during your studies.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-edufund-blue hover:bg-edufund-blue/90"
                      onClick={() => handleApply('Interest-Free Loan')}
                    >
                      Apply for Loan
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="mentorship" className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-edufund-blue" />
                      <h3 className="text-xl font-bold text-edufund-dark-blue">Mentorship Programs</h3>
                    </div>
                    <p className="text-edufund-gray">
                      Our mentorship programs connect students with experienced professionals and academic advisors who provide guidance, support, and networking opportunities.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-edufund-dark-blue">Available Mentorship Programs:</h4>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="academic" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="academic" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Academic Mentorship
                          </label>
                          <p className="text-xs text-muted-foreground">Guidance on course selection, study strategies, and academic planning.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="career" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="career" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Career Mentorship
                          </label>
                          <p className="text-xs text-muted-foreground">Professional development, networking, and industry insights.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="peer" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="peer" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Peer Mentorship
                          </label>
                          <p className="text-xs text-muted-foreground">Connect with successful students in similar fields or backgrounds.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-edufund-blue hover:bg-edufund-blue/90"
                      onClick={() => handleApply('Mentorship')}
                    >
                      Apply for Mentorship
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources" className="space-y-6">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <Layers className="h-6 w-6 text-edufund-blue" />
                      <h3 className="text-xl font-bold text-edufund-dark-blue">Support Resources</h3>
                    </div>
                    <p className="text-edufund-gray">
                      Beyond financial assistance, we provide a range of resources to support your overall wellbeing and academic success.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-edufund-dark-blue">Available Resources:</h4>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="mental" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="mental" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Mental Health Support
                          </label>
                          <p className="text-xs text-muted-foreground">Access to counseling services and wellness resources.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="academic-res" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="academic-res" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Academic Resources
                          </label>
                          <p className="text-xs text-muted-foreground">Tutoring, study groups, and learning materials.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox id="career-res" />
                        <div className="grid gap-1.5 leading-none">
                          <label htmlFor="career-res" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Career Development
                          </label>
                          <p className="text-xs text-muted-foreground">Resume workshops, interview preparation, and job placement assistance.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-edufund-blue hover:bg-edufund-blue/90"
                      onClick={() => handleApply('Support Resources')}
                    >
                      Request Resources
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ApplicationStepProps {
  number: number;
  title: string;
  description: string;
}

const ApplicationStep = ({ number, title, description }: ApplicationStepProps) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-edufund-blue text-white flex items-center justify-center font-bold text-xl">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-edufund-dark-blue mb-2">{title}</h3>
      <p className="text-edufund-gray">{description}</p>
    </div>
  </div>
);

export default Apply;

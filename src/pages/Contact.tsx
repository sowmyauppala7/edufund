
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-edufund-gray mb-8 animate-fade-down" style={{ animationDelay: '100ms' }}>
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-edufund-dark-blue mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-edufund-light-blue/50 p-3 rounded-lg text-edufund-blue">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-edufund-dark-blue mb-1">Our Location</h3>
                      <p className="text-edufund-gray">
                        123 Education Ave, Suite 400<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-edufund-light-blue/50 p-3 rounded-lg text-edufund-blue">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-edufund-dark-blue mb-1">Email Us</h3>
                      <p className="text-edufund-gray">
                        General Inquiries: <a href="mailto:info@edufund.org" className="text-edufund-blue hover:underline">info@edufund.org</a><br />
                        Student Support: <a href="mailto:students@edufund.org" className="text-edufund-blue hover:underline">students@edufund.org</a><br />
                        Donor Relations: <a href="mailto:donors@edufund.org" className="text-edufund-blue hover:underline">donors@edufund.org</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-edufund-light-blue/50 p-3 rounded-lg text-edufund-blue">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-edufund-dark-blue mb-1">Call Us</h3>
                      <p className="text-edufund-gray">
                        Main Office: <a href="tel:+14155550123" className="text-edufund-blue hover:underline">(415) 555-0123</a><br />
                        Student Helpline: <a href="tel:+14155550124" className="text-edufund-blue hover:underline">(415) 555-0124</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-edufund-light-blue/50 p-3 rounded-lg text-edufund-blue">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-edufund-dark-blue mb-1">Hours of Operation</h3>
                      <p className="text-edufund-gray">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-edufund-dark-blue mb-8">
                  Send Us a Message
                </h2>
                
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="block text-sm font-medium text-edufund-dark-blue">
                            First Name
                          </label>
                          <input
                            id="firstName"
                            className="w-full rounded-md border border-edufund-light-blue/50 px-3 py-2 text-edufund-dark-blue"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="block text-sm font-medium text-edufund-dark-blue">
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            className="w-full rounded-md border border-edufund-light-blue/50 px-3 py-2 text-edufund-dark-blue"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-edufund-dark-blue">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-edufund-light-blue/50 px-3 py-2 text-edufund-dark-blue"
                          placeholder="john.doe@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block text-sm font-medium text-edufund-dark-blue">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="w-full rounded-md border border-edufund-light-blue/50 px-3 py-2 text-edufund-dark-blue"
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-edufund-dark-blue">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full rounded-md border border-edufund-light-blue/50 px-3 py-2 text-edufund-dark-blue"
                          placeholder="Please describe your question or concern..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <Button 
                        className="w-full bg-edufund-blue hover:bg-edufund-blue/90"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-edufund-light-blue/20">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-edufund-dark-blue mb-8 text-center">
              Visit Our Office
            </h2>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video w-full">
                {/* Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.774345453!2d-122.43144847449734!3d37.7730504033993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652836878553!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EDUFUND Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

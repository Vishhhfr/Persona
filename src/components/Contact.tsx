
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const phoneNumber = "917984527433"; // WhatsApp requires country code without +
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const emailAddress = "vishwastiwari1901@gmail.com";
  const callUrl = "tel:+917984527433";
  const mailtoUrl = `mailto:${emailAddress}`;

  return (
    <section id="contact" className="py-20 relative bg-gradient overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl text-center mx-auto">
          Let's connect and discuss opportunities. I'm always open to new challenges and collaborations.
        </p>
        
        <div className="mx-auto max-w-4xl">
          <Card className="card-hover glass-effect pulse-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="bg-gradient-to-br from-primary to-blue-400 p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Email</p>
                    <a 
                      href={mailtoUrl} 
                      className="font-medium hover:text-primary transition-colors duration-300 text-lg"
                      aria-label="Send email to Vishwas"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Phone</p>
                    <a 
                      href={callUrl} 
                      className="font-medium hover:text-primary transition-colors duration-300 text-lg"
                      aria-label="Call Vishwas"
                    >
                      +91 7984527433
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4 group">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-4 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Location</p>
                    <p className="font-medium text-lg">Surat, Gujarat</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center my-12">
                <Separator className="flex-1" />
                <div className="mx-6 text-muted-foreground font-medium text-lg">OR</div>
                <Separator className="flex-1" />
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-6 text-gradient">Quick Message</h4>
                <Button 
                  className="px-8 py-3 text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white glow-button hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300" 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

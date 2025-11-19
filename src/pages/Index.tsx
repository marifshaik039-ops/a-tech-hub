import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Smartphone, 
  Laptop, 
  Home, 
  Cpu, 
  Headphones,
  Wrench,
  Settings,
  Hammer,
  Shield,
  Search,
  Menu,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Zap,
  DollarSign,
  Award
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productCategories = [
    { name: "Smartphones", icon: Smartphone, description: "Latest models from top brands" },
    { name: "Laptops", icon: Laptop, description: "Powerful computing solutions" },
    { name: "Home Appliances", icon: Home, description: "Smart home electronics" },
    { name: "Components", icon: Cpu, description: "PC parts & upgrades" },
    { name: "Accessories", icon: Headphones, description: "Audio & peripherals" },
  ];

  const services = [
    { name: "Repairs", icon: Wrench, description: "Expert device repairs with warranty" },
    { name: "Custom Builds", icon: Settings, description: "Personalized PC configurations" },
    { name: "Installations", icon: Hammer, description: "Professional setup services" },
    { name: "Maintenance", icon: Shield, description: "Regular maintenance plans" },
  ];

  const faqs = [
    {
      question: "What is A³ Electronics?",
      answer: "A³ stands for Advanced, Affordable, and Authentic. We provide cutting-edge electronics at competitive prices with genuine products and exceptional service."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes! All our products come with manufacturer warranty, and we offer extended warranty options for added peace of mind."
    },
    {
      question: "How long does a repair typically take?",
      answer: "Most repairs are completed within 24-48 hours. Complex repairs may take 3-5 business days. We'll provide an estimated timeline upfront."
    },
    {
      question: "Can I track my service request?",
      answer: "Absolutely! Once you submit a service request, you'll receive a tracking number to monitor the status of your repair or installation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">A³</span>
            </div>
            <span className="text-xl font-bold">Electronics</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-sm font-medium transition-colors hover:text-primary">Products</a>
            <a href="#services" className="text-sm font-medium transition-colors hover:text-primary">Services</a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">About</a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</a>
            <Button variant="default" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
              <a href="#products" className="text-sm font-medium">Products</a>
              <a href="#services" className="text-sm font-medium">Services</a>
              <a href="#about" className="text-sm font-medium">About</a>
              <a href="#contact" className="text-sm font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl">
              Advanced • Affordable • Authentic
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Your trusted destination for cutting-edge electronics and expert services. 
              From the latest smartphones to custom PC builds, we've got you covered.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="text-base">
                Browse Products
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Product Categories</h2>
            <p className="text-muted-foreground">Explore our wide range of electronics</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {productCategories.map((category) => (
              <Card 
                key={category.name} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="text-muted-foreground">Professional support for all your tech needs</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.name} className="transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why A³ Electronics?</h2>
            <p className="text-muted-foreground">Three pillars that define our commitment</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Advanced</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cutting-edge technology and the latest innovations in electronics. 
                  We stay ahead of the curve to bring you tomorrow's tech today.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Affordable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Competitive pricing without compromising quality. 
                  We believe advanced technology should be accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Authentic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  100% genuine products with manufacturer warranties. 
                  Trust and transparency are at the heart of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know</p>
          </div>
          
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get in Touch</h2>
            <p className="text-muted-foreground">Have questions? We're here to help</p>
          </div>
          
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can we help you?" rows={4} />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">support@a3electronics.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Street, Innovation District<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Saturday</span>
                    <span className="text-sm font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sunday</span>
                    <span className="text-sm font-medium">12:00 PM - 5:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <span className="text-xl font-bold text-primary-foreground">A³</span>
                </div>
                <span className="text-xl font-bold">Electronics</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced, Affordable, and Authentic electronics for everyone.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Smartphones</a></li>
                <li><a href="#" className="hover:text-primary">Laptops</a></li>
                <li><a href="#" className="hover:text-primary">Home Appliances</a></li>
                <li><a href="#" className="hover:text-primary">Components</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Repairs</a></li>
                <li><a href="#" className="hover:text-primary">Custom Builds</a></li>
                <li><a href="#" className="hover:text-primary">Installations</a></li>
                <li><a href="#" className="hover:text-primary">Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 A³ Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

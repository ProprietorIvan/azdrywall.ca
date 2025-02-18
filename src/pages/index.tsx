import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Paintbrush,
  Clock,
  CheckCircle2,
  Hammer,
  Building2,
  Home,
  Check,
  Star,
  PaintBucket,
  Wrench,
} from "lucide-react";
import Image from "next/image";

type ProjectType = "painting" | "drywall" | "finishing" | null;

interface FormData {
  name: string;
  phone: string;
  projectType: string;
  details: string;
  email: string;
  address: string;
}

const EverFixLandingPage = () => {
  const [projectType, setProjectType] = useState<ProjectType>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    projectType: "",
    details: "",
    email: "",
    address: "",
  });

  const handleEmergencyCall = () => {
    window.location.href = "tel:+1(778)656-1838";
  };

  // SEO-friendly data
  const pageTitle =
    "EverFix Drywall & Finishing - Vancouver & Burnaby | Expert Painting & Repairs";
  const pageDescription =
    "Transform your space with Vancouver's trusted painting and drywall experts. Professional finishing, color consulting, and quality workmanship for homes and businesses.";

  const mainServices = [
    {
      icon: <PaintBucket className="w-8 h-8 mb-4" />,
      title: "Professional Painting",
      description:
        "Interior and exterior painting with premium paints and expert color matching",
      features: [
        "Color consulting",
        "Surface preparation",
        "Premium materials",
        "Flawless finish",
      ],
    },
    {
      icon: <Hammer className="w-8 h-8 mb-4" />,
      title: "Drywall Services",
      description: "Complete drywall installation and repair solutions",
      features: [
        "Patch repairs",
        "New installations",
        "Texture matching",
        "Seamless repairs",
      ],
    },
    {
      icon: <Paintbrush className="w-8 h-8 mb-4" />,
      title: "Expert Finishing",
      description: "High-end finishing services for a perfect look",
      features: [
        "Custom textures",
        "Smooth finishing",
        "Detail work",
        "Quality assurance",
      ],
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Free Consultation",
      description:
        "We discuss your project needs and provide expert recommendations",
    },
    {
      number: "02",
      title: "Detailed Quote",
      description: "Receive a comprehensive quote with transparent pricing",
    },
    {
      number: "03",
      title: "Professional Service",
      description: "Expert execution with attention to every detail",
    },
    {
      number: "04",
      title: "Quality Inspection",
      description: "Final review to ensure perfect results",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="vancouver painting, drywall repair, wall finishing, professional painting, vancouver drywall"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://azdrywall.ca" />
        <link rel="canonical" href="https://azdrywall.ca" />
      </Head>

      <Navigation transparent />

      {/* Hero Section with Split Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative pt-32 pb-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-gray-900 text-white mb-6">
                <Star className="w-4 h-4 mr-2" /> Trusted in Vancouver & Burnaby
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform your space with expert care
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional painting and drywall services delivering
                exceptional results for your home or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmergencyCall}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (778) 656-1838
                </button>
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 transition-all font-medium"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Professional Painting and Drywall Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 p-3 rounded-full">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Quality Guaranteed
                    </p>
                    <p className="text-sm text-gray-500">
                      Premium materials & expert service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for all your painting and drywall needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <div className="text-gray-900">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-500">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-gray-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-gray-600">
              Simple steps to transform your space
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-300 absolute top-1/2 -right-4 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to transform your space?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get professional painting and drywall services from Vancouver&apos;s
            trusted experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEmergencyCall}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (778) 656-1838
            </button>
            <button
              onClick={() => setShowQuoteForm(true)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all font-medium"
            >
              Request Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EverFixLandingPage;

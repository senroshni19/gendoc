import React, { useState } from 'react';
import axios from 'axios'; 
import { Upload, FileText, AlertTriangle, Share2, CheckCircle, Users, Zap, Shield, ArrowRight, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import RedAlert from '@/components/ui/red-alert';
import { useEffect } from 'react';

const Index = () => {
  const [demoText, setDemoText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [resultData, setresultData] = useState("");
  const [alertData, setalertData] = useState("");
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  const handleDemoAnalysis = async () => {
    console.log("Loading...")
    setShowAnalysis(true);
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAD8UqCmYbEDg8DrhXLAtOu0I65QQwUAJg",
      method: "post",
      data: {
        "contents" : [
          {
            "parts": [
              {
                "text" : "Simplyfy this text" + demoText
              }
            ]
          }
        ]
      }
    })

    const alertResponse = await axios ({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAD8UqCmYbEDg8DrhXLAtOu0I65QQwUAJg",
      method: "post",
      data: {
        "contents": [
          {
            "parts": [
              {
                "text": "write what should be warned about in this message in hardly 2 lines and remove all the **" + demoText
              }
            ]
          }
        ]
      }
    })

    console.log(alertResponse);
    console.log(response);
    const result = response.data.candidates[0].content.parts[0].text;
    const alertResult = alertResponse.data.candidates[0].content.parts[0].text;
    setresultData(result);
    setalertData(alertResult);

  };

  const features = [
    {
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Smart Analysis",
      description: "AI-powered analysis breaks down complex legal jargon into clear, understandable language that anyone can follow.",
      example: "Complex clause → Simple explanation",
      hoverText: "Transform: 'Heretofore the party of the first part...' → 'You agree to...'"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: "Risk Detection",
      description: "Automatically identifies and highlights potentially problematic clauses like auto-renewal terms and liability issues.",
      example: "⚠ Risky clause detected",
      hoverText: "'You waive all rights to legal action' → 🚨 HIGH RISK: You lose legal protection"
    },
    {
      icon: <Share2 className="h-8 w-8 text-green-500" />,
      title: "Export & Share",
      description: "Save your analysis as PDF, copy key insights, or share simplified versions with your team or advisors.",
      example: "PDF, Copy, Share options",
      hoverText: "Export analysis, share with advisors, save for future reference"
    }
  ];

  const testimonials = [
    {
      quote: "I finally understood what I was signing. Game changer!",
      author: "Mrinmoy Paul",
      role: "SDE at Airtle LLP"
    },
    {
      quote: "Saved me from a terrible rental agreement. The risk detection is spot-on.",
      author: "Sayantika Saha",
      role: "Student"
    },
    {
      quote: "Our small business uses this for all contracts now. Essential tool!",
      author: "Sanjeev Mohanty.",
      role: "Business Owner"
    }
    
  ];

  const useCases = [
    { icon: <Users className="h-6 w-6" />, title: "Freelancers", description: "Review client contracts safely" },
    { icon: <FileText className="h-6 w-6" />, title: "Students", description: "Understand rental agreements" },
    { icon: <Shield className="h-6 w-6" />, title: "Renters", description: "Spot unfair lease terms" },
    { icon: <Zap className="h-6 w-6" />, title: "Small Businesses", description: "Analyze vendor contracts" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 rounded-lg p-2">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GenDoc</h1>
                <p className="text-sm text-gray-600">Legal Document Analyzer</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Reviews</a>
              <Button className="bg-blue-500 hover:bg-blue-600">
                <a href="#upload">Analyze Document Now</a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Make Legal Documents{' '}
            <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Actually Readable
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload contracts, NDAs, or any legal document and get instant plain-English explanations. 
            Spot risky clauses, understand complex terms, and make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-3 h-auto"
              onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Analyze Document Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 h-auto"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Eye className="mr-2 h-5 w-5" />
              See Example
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            <CheckCircle className="inline h-4 w-4 mr-1 text-green-500" />
            No sign-up required • Free to try
          </p>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Try It Instantly</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how GenDoc transforms complex legal language into plain English
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input */}
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Original Legal Text</CardTitle>
                  <CardDescription>Complex legal jargon</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                    className="min-h-[200px] resize-none"
                    placeholder="Paste legal text here..."
                  />
                  <Button 
                    onClick={handleDemoAnalysis}
                    disabled={isAnalyzing}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze This Text"}
                  </Button>
                </CardContent>
              </Card>

              {/* Output */}
              <Card className="border-2 border-green-200 bg-green-50/50">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">Simplified Analysis</CardTitle>
                  <CardDescription>Plain English explanation</CardDescription>
                </CardHeader>
                <CardContent>
                  {showAnalysis ? (<p> {resultData} </p>) : ( <p> No data</p>) }
                </CardContent>
                <RedAlert>
                  {alertData}
                </RedAlert>
              </Card>
            </div>
          </div>
        </div>S
      </section>

      {/* Upload Section */}
      <section id="upload" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upload Your Document</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Drag and drop your legal document or paste text directly for instant analysis
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-blue-300 bg-white/50 hover:border-blue-400 transition-colors">
              <CardContent className="p-12">
                <div className="text-center">
                  <Upload className="h-16 w-16 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Drop your document here
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Supports PDF, TXT, and DOCX files up to 10MB
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      <Upload className="mr-2 h-4 w-4" />
                      Choose File
                    </Button>
                    <Button variant="outline">
                      Paste Text Instead
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand legal documents and make informed decisions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-blue-50 transition-colors">
                    <p className="text-sm font-medium text-gray-700 mb-2">Example:</p>
                    <p className="text-sm text-gray-600 group-hover:text-blue-700 transition-colors">
                      {feature.hoverText}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple process, powerful results</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: <Upload className="h-8 w-8" />,
                  title: "Upload or Paste",
                  description: "Upload your legal document or paste text directly into our analyzer"
                },
                {
                  step: "2",
                  icon: <Zap className="h-8 w-8" />,
                  title: "AI Analysis",
                  description: "Our AI breaks down complex legal language and identifies key risks"
                },
                {
                  step: "3",
                  icon: <Download className="h-8 w-8" />,
                  title: "Get Clear Results",
                  description: "Receive plain-English explanations and export your analysis"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto -mt-6 relative z-10">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Is This For?</h2>
            <p className="text-gray-600">GenDoc helps everyone understand legal documents</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Users Say</h2>
            <p className="text-xl text-gray-600">Real feedback from real users</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-4xl text-blue-500 mb-4">"</div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Understand Your Documents?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who've made informed decisions with GenDoc
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 h-auto"
            onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Analyzing Documents
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500 rounded-lg p-2">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">GenDoc</h3>
                  <p className="text-gray-400">Legal Document Analyzer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Making legal documents accessible and understandable for everyone. 
                Analyze contracts, spot risks, and make informed decisions.
              </p>

              
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="block hover:text-white transition-colors">How it Works</a>
                <a href="#testimonials" className="block hover:text-white transition-colors">Reviews</a>
                <a href="#" className="block hover:text-white transition-colors">Pricing</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#" className="block hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-white transition-colors">Contact Us</a>
                <a href="https://github.com" className="block hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GenDoc. All rights reserved. | Making legal documents readable for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
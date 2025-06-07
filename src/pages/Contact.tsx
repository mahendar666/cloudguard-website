import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Github, 
  Twitter, 
  Linkedin,
  MessageSquare,
  Clock,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "cloudguardbot@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available 24/7",
      subtitle: "Get instant support"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri 9AM-6PM IST",
      subtitle: "Extended support available"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about CloudGuard? Want to discuss enterprise features? 
            We're here to help you secure and monitor your cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 rounded-lg p-3">
                    <info.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                    <p className="text-gray-300">{info.details}</p>
                    <p className="text-gray-500 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Office Location */}
            <div className="mt-8 bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                <h3 className="text-white font-semibold">Office Location</h3>
              </div>
              <p className="text-gray-300 mb-2">CloudGuard Technologies</p>
              <p className="text-gray-400 text-sm">
                2-39/65 Medchal<br />
                Hyderabad, Telangana<br />
                India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a topic</option>
                      <option value="demo">Demo Request</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Tell us about your needs, questions, or how we can help..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                    >
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">How does the demo work?</h3>
              <p className="text-gray-400 text-sm">
                Our demo uses simulated AWS data to show all features. You can test alerts, 
                remote control, and monitoring without connecting real AWS resources.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Is my AWS data secure?</h3>
              <p className="text-gray-400 text-sm">
                Yes, we use IAM roles and encrypted connections. Your credentials are never 
                stored, and all communications are secured with industry-standard encryption.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">What AWS services are supported?</h3>
              <p className="text-gray-400 text-sm">
                We support EC2, RDS, S3, Lambda, DynamoDB, and more. New services are 
                added regularly based on user feedback and AWS updates.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Can I customize the alerts?</h3>
              <p className="text-gray-400 text-sm">
                Absolutely! Set custom thresholds, choose notification channels 
                (WhatsApp, Telegram, SMS, Email), and define your own action keywords.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
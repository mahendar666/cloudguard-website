import React from 'react';
import { 
  UserPlus, 
  Cloud, 
  Settings, 
  Bell, 
  Smartphone, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Eye,
  Server
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Connect",
      description: "Create your account and connect your AWS credentials and websites securely",
      details: [
        "Quick registration process",
        "Secure AWS IAM integration",
        "Website URL configuration",
        "Demo mode available"
      ]
    },
    {
      icon: Cloud,
      title: "Auto-Discovery",
      description: "CloudGuard automatically discovers AWS resources and starts monitoring websites",
      details: [
        "AWS resource detection",
        "Website health checks",
        "Real-time cataloging",
        "Dynamic dashboard updates"
      ]
    },
    {
      icon: BarChart3,
      title: "Monitor Metrics",
      description: "View real-time metrics for AWS resources, websites, and server performance",
      details: [
        "Live CloudWatch integration",
        "Website performance metrics",
        "Interactive charts",
        "Historical data analysis"
      ]
    },
    {
      icon: Eye,
      title: "Bot Detection",
      description: "Advanced monitoring detects bot attacks and suspicious traffic patterns",
      details: [
        "Real-time bot detection",
        "Traffic pattern analysis",
        "Attack prevention alerts",
        "Detailed security reports"
      ]
    },
    {
      icon: Settings,
      title: "Configure Alerts",
      description: "Set up custom thresholds for AWS resources, websites, and security events",
      details: [
        "Flexible threshold settings",
        "Multi-channel notifications",
        "Custom keywords for actions",
        "Alert escalation rules"
      ]
    },
    {
      icon: Bell,
      title: "Receive Alerts",
      description: "Get instant notifications for resource issues, website problems, or security threats",
      details: [
        "WhatsApp notifications",
        "Telegram alerts",
        "Email & SMS support",
        "Real-time delivery"
      ]
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Control AWS resources and servers remotely via messaging apps",
      details: [
        "Text-based commands",
        "Server management",
        "Secure authentication",
        "Instant execution"
      ]
    }
  ];

  const workflowSteps = [
    "User logs into CloudGuard dashboard",
    "AWS resources and websites are automatically discovered",
    "Resource and website cards display with real-time metrics",
    "Bot detection and traffic monitoring begins",
    "User configures alerts and thresholds for all monitored assets",
    "CloudGuard monitors resources and websites continuously",
    "Alerts sent when thresholds are breached or attacks detected",
    "User responds with remote commands via messaging apps",
    "Actions executed on AWS resources or servers",
    "Dashboard updates with current status and security reports"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CloudGuard makes comprehensive infrastructure monitoring simple and powerful. 
            Follow these steps to get complete control over your AWS resources, websites, and servers.
          </p>
        </div>

        {/* Main Steps */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="bg-blue-600/20 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-600/30 transition-colors duration-300 mt-2">
                  <step.icon className="h-6 w-6 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Workflow */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Complete Workflow
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700"
                  >
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why This Approach Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="bg-green-600/20 rounded-lg p-3 w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zero Configuration</h3>
              <p className="text-gray-400 text-sm">
                No complex setup required. CloudGuard automatically discovers and configures monitoring for all your AWS resources and websites.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="bg-blue-600/20 rounded-lg p-3 w-fit mb-4">
                <Smartphone className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mobile-First Control</h3>
              <p className="text-gray-400 text-sm">
                Control your entire infrastructure from anywhere using familiar messaging apps like WhatsApp and Telegram.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="bg-purple-600/20 rounded-lg p-3 w-fit mb-4">
                <Bell className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Intelligent Alerts</h3>
              <p className="text-gray-400 text-sm">
                Smart threshold detection with bot attack alerts ensures you're always informed without alert fatigue.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="bg-cyan-600/20 rounded-lg p-3 w-fit mb-4">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-400 text-sm">
                Monitor everything from AWS resources to websites and servers in a single, unified dashboard.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="bg-red-600/20 rounded-lg p-3 w-fit mb-4">
                <Eye className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Advanced Security</h3>
              <p className="text-gray-400 text-sm">
                Real-time bot detection and traffic analysis protect your websites from malicious attacks and suspicious activities.
              </p>
            </div>
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
              <div className="bg-orange-600/20 rounded-lg p-3 w-fit mb-4">
                <Server className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unified Management</h3>
              <p className="text-gray-400 text-sm">
                Manage AWS resources, websites, and servers from a single interface with consistent controls and monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of CloudGuard with our interactive demo. 
            See how easy it is to monitor and control your entire infrastructure from AWS resources to websites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Try Demo Now
            </a>
            <a
              href="/contact"
              className="bg-white/10 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20"
            >
              Contact Sales
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
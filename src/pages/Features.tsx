import React from 'react';
import { 
  Cloud, 
  BarChart3, 
  Bell, 
  Smartphone, 
  Shield, 
  Zap,
  DollarSign,
  Bot,
  Mail,
  MessageSquare,
  Server,
  Activity,
  Globe,
  Eye,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: Cloud,
      title: "AWS Resource Auto-Discovery",
      description: "Automatically discovers and catalogs all your AWS resources including EC2, RDS, S3, Lambda, DynamoDB, and more. Dynamic resource cards update in real-time as your infrastructure changes.",
      highlights: ["Instant resource detection", "Multi-service support", "Real-time updates", "Dynamic dashboard rendering"]
    },
    {
      icon: Globe,
      title: "Website & Server Monitoring",
      description: "Monitor websites, servers, and applications with comprehensive metrics including uptime, response time, traffic analytics, and resource usage. Track performance across multiple endpoints.",
      highlights: ["Uptime monitoring", "Performance metrics", "Traffic analytics", "Multi-endpoint support"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Metrics Dashboard",
      description: "Beautiful, interactive dashboards with live metrics from CloudWatch and custom agents. Visualize CPU, memory, disk I/O, network traffic, and custom metrics with animated charts.",
      highlights: ["Live CloudWatch integration", "Interactive charts", "Custom metric support", "Historical data analysis"]
    },
    {
      icon: Eye,
      title: "Bot Attack Detection",
      description: "Advanced bot detection and traffic analysis to identify suspicious activities, automated attacks, and unusual traffic patterns. Protect your websites from malicious bots.",
      highlights: ["Real-time bot detection", "Traffic pattern analysis", "Attack prevention", "Detailed analytics"]
    },
    {
      icon: Bell,
      title: "Custom Alerts & Thresholds",
      description: "Set intelligent alerts with custom thresholds for any metric. Configure notifications via multiple channels and define custom keywords for remote actions.",
      highlights: ["Flexible threshold settings", "Multi-channel notifications", "Custom keywords", "Alert escalation"]
    },
    {
      icon: Smartphone,
      title: "Remote Control System",
      description: "Control your AWS resources and servers remotely via WhatsApp and Telegram. Start, stop, reboot, scale, or manage resources with simple text commands from anywhere.",
      highlights: ["WhatsApp integration", "Telegram bot support", "Server control", "Secure authentication"]
    }
  ];

  const advancedFeatures = [
    {
      icon: DollarSign,
      title: "Cost Prediction & Budgets",
      description: "Real-time cost estimation with daily and monthly predictions for both AWS resources and server costs. Set budget thresholds and get automatic alerts.",
      status: "In Progress"
    },
    {
      icon: Bot,
      title: "OpsBuddy AI Assistant",
      description: "Intelligent virtual assistant that can read commands, execute actions, generate reports, and provide optimization suggestions for your infrastructure.",
      status: "In Progress"
    },
    {
      icon: Mail,
      title: "Email & SMS Integration",
      description: "Complete email and SMS support for alerts and remote commands. Reply to emails to control your infrastructure and receive detailed reports.",
      status: "In Progress"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics for website performance, user behavior, and resource optimization with predictive insights and recommendations.",
      status: "Future"
    },
    {
      icon: AlertTriangle,
      title: "Incident Management",
      description: "Comprehensive incident tracking, automated response workflows, and post-incident analysis with detailed reporting and team collaboration.",
      status: "Future"
    },
    {
      icon: Server,
      title: "Multi-Cloud Support",
      description: "Extend monitoring beyond AWS to include DigitalOcean, Azure, GCP, and on-premise servers with unified dashboard and control.",
      status: "Future"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'text-yellow-400 bg-yellow-400/20';
      case 'Future': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-green-400 bg-green-400/20';
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Comprehensive Features
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CloudGuard provides complete monitoring and control capabilities for AWS resources, 
            websites, and servers with cutting-edge features designed for modern infrastructure operations.
          </p>
        </div>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Core Features - <span className="text-green-400">Live & Working</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600/20 rounded-lg p-3 mr-4">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                    <span className="text-xs px-2 py-1 bg-green-400/20 text-green-400 rounded-full">
                      ✓ Active
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-purple-600/20 rounded-lg p-2 mr-3">
                      <feature.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(feature.status)}`}>
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technical Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
              <p className="text-gray-400 text-sm">
                IAM role integration, encrypted communications, secure credential management, and bot attack protection
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
              <p className="text-gray-400 text-sm">
                Optimized polling, bypass switches, efficient resource aggregation, and real-time data processing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Activity className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-Time</h3>
              <p className="text-gray-400 text-sm">
                Live metrics, instant alerts, real-time resource state updates, and immediate bot detection
              </p>
            </div>
          </div>
        </section>

        {/* Integration Features */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Integration Capabilities
          </h2>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-8 w-8 text-green-400" />
                <div>
                  <h4 className="text-white font-semibold">WhatsApp Integration</h4>
                  <p className="text-gray-400 text-sm">Twilio Sandbox support</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Bot className="h-8 w-8 text-blue-400" />
                <div>
                  <h4 className="text-white font-semibold">Telegram Bots</h4>
                  <p className="text-gray-400 text-sm">Custom bot integration</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-8 w-8 text-purple-400" />
                <div>
                  <h4 className="text-white font-semibold">Email Notifications</h4>
                  <p className="text-gray-400 text-sm">SMTP & API support</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Smartphone className="h-8 w-8 text-orange-400" />
                <div>
                  <h4 className="text-white font-semibold">SMS Alerts</h4>
                  <p className="text-gray-400 text-sm">Multiple providers</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Cloud className="h-8 w-8 text-cyan-400" />
                <div>
                  <h4 className="text-white font-semibold">AWS CloudWatch</h4>
                  <p className="text-gray-400 text-sm">Native integration</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-yellow-400" />
                <div>
                  <h4 className="text-white font-semibold">Website APIs</h4>
                  <p className="text-gray-400 text-sm">Custom monitoring agents</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Bell, 
  Smartphone, 
  Cloud, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Play,
  Globe,
  Server,
  Activity
} from 'lucide-react';

const Home = () => {
  const [animatedStats, setAnimatedStats] = useState({ resources: 0, alerts: 0, uptime: 0 });

  // DEMO CONFIGURATION - UPDATE THIS URL
  const DEMO_URL = "https://cloudguard-demo.netlify.app"; // Replace with your actual demo URL
  const DEMO_IS_LIVE = false; // Set to true when your demo is ready

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        resources: prev.resources < 147 ? prev.resources + 3 : 147,
        alerts: prev.alerts < 2847 ? prev.alerts + 47 : 2847,
        uptime: prev.uptime < 99.9 ? prev.uptime + 0.1 : 99.9,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleDemoLaunch = () => {
    if (DEMO_IS_LIVE) {
      window.open(DEMO_URL, '_blank', 'noopener,noreferrer');
    } else {
      // Redirect to demo page for more info
      window.location.href = '/demo';
    }
  };

  const features = [
    {
      icon: Cloud,
      title: "AWS Auto-Discovery",
      description: "Automatically discover and monitor all your AWS resources"
    },
    {
      icon: Globe,
      title: "Website Monitoring",
      description: "Monitor websites, detect bot attacks, and track performance"
    },
    {
      icon: BarChart3,
      title: "Real-time Metrics",
      description: "Live monitoring with beautiful, interactive dashboards"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Custom thresholds with WhatsApp & Telegram notifications"
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Control AWS resources and servers remotely via messaging apps"
    },
    {
      icon: Activity,
      title: "Bot Detection",
      description: "Advanced bot attack detection and traffic analytics"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-blue-400/10 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              CloudGuard
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Advanced AWS & Website Monitoring Platform
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Comprehensive monitoring for AWS resources and websites with real-time metrics, 
              bot attack detection, intelligent alerts, and remote control through WhatsApp and Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={handleDemoLaunch}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>{DEMO_IS_LIVE ? 'Try Live Demo' : 'View Demo Info'}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <Link
                to="/features"
                className="bg-gray-800/50 border border-gray-700 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800"
              >
                Explore Features
              </Link>
            </div>

            {/* Demo Credentials */}
            <div className="bg-gray-800/50 border border-yellow-500/30 rounded-lg p-6 max-w-md mx-auto mb-12">
              <h3 className="text-yellow-400 font-semibold mb-3 flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>{DEMO_IS_LIVE ? 'Quick Demo Access' : 'Demo Credentials (Coming Soon)'}</span>
              </h3>
              <div className="text-sm text-gray-300 space-y-1">
                <p><span className="text-blue-400">Email:</span> demo@cloudguard.com</p>
                <p><span className="text-blue-400">Password:</span> demo123</p>
              </div>
              {!DEMO_IS_LIVE && (
                <p className="text-xs text-yellow-300 mt-2">
                  🚧 Demo is under development. Check back soon!
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {animatedStats.resources}+
                </div>
                <div className="text-gray-400">Resources & Websites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {animatedStats.alerts.toLocaleString()}+
                </div>
                <div className="text-gray-400">Alerts Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {animatedStats.uptime.toFixed(1)}%
                </div>
                <div className="text-gray-400">Uptime Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Monitoring
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Monitor AWS resources, websites, and servers with advanced analytics and control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="bg-blue-600/20 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose CloudGuard?
              </h2>
              <div className="space-y-4">
                {[
                  "Instant AWS resource discovery and monitoring",
                  "Website monitoring with bot attack detection",
                  "Real-time alerts via WhatsApp, Telegram, and SMS",
                  "Remote control of AWS resources and servers",
                  "Beautiful, interactive dashboards with live metrics",
                  "Traffic analytics and performance monitoring",
                  "Cost optimization with budget thresholds",
                  "AI-powered OpsBuddy assistant"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/features"
                className="inline-block mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">System Status</span>
                  <span className="text-green-400 text-sm font-medium">● Online</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">AWS Resources</span>
                    <span className="text-white">23 Active</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Websites</span>
                    <span className="text-white">8 Monitored</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Bot Attacks Blocked</span>
                    <span className="text-white">142 Today</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start monitoring your AWS resources and websites in minutes. Try our demo or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDemoLaunch}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              {DEMO_IS_LIVE ? 'Try Demo Now' : 'View Demo Info'}
            </button>
            <Link
              to="/contact"
              className="bg-white/10 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
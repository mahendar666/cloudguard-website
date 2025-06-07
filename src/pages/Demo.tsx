import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ExternalLink, 
  Shield, 
  User, 
  Lock, 
  Copy, 
  CheckCircle,
  Monitor,
  BarChart3,
  Bell,
  Smartphone,
  Activity,
  Server,
  Globe,
  Eye,
  AlertCircle,
  Link as LinkIcon,
  Wifi,
  WifiOff
} from 'lucide-react';

const Demo = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [demoStatus, setDemoStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [animatedMetrics, setAnimatedMetrics] = useState({
    cpu: 45,
    memory: 67,
    disk: 23,
    network: 89,
    websites: 8,
    botAttacks: 142
  });

  // DEMO CONFIGURATION - UPDATE THESE VALUES
  const DEMO_CONFIG = {
    // Replace with your actual demo URL
    url: "https://cloudguard-demo.netlify.app", // Change this to your demo URL
    
    // Demo credentials for your actual demo
    credentials: {
      email: "demo@cloudguard.com",
      password: "demo123"
    },
    
    // Set to true if demo is ready, false to show "coming soon"
    isLive: false
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedMetrics(prev => ({
        cpu: Math.max(20, Math.min(95, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(90, prev.memory + (Math.random() - 0.5) * 8)),
        disk: Math.max(10, Math.min(80, prev.disk + (Math.random() - 0.5) * 6)),
        network: Math.max(40, Math.min(100, prev.network + (Math.random() - 0.5) * 15)),
        websites: Math.max(5, Math.min(12, prev.websites + Math.floor((Math.random() - 0.5) * 2))),
        botAttacks: Math.max(100, Math.min(200, prev.botAttacks + Math.floor((Math.random() - 0.5) * 10)))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Check demo status
  useEffect(() => {
    if (!DEMO_CONFIG.isLive) {
      setDemoStatus('offline');
      return;
    }

    const checkDemoStatus = async () => {
      try {
        // Simple check - you can make this more sophisticated
        const response = await fetch(DEMO_CONFIG.url, { 
          method: 'HEAD',
          mode: 'no-cors'
        });
        setDemoStatus('online');
      } catch (error) {
        setDemoStatus('offline');
      }
    };

    checkDemoStatus();
  }, []);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDemoLaunch = () => {
    if (DEMO_CONFIG.isLive && demoStatus === 'online') {
      window.open(DEMO_CONFIG.url, '_blank', 'noopener,noreferrer');
    }
  };

  const demoFeatures = [
    {
      icon: Monitor,
      title: "AWS Resource Discovery",
      description: "See how CloudGuard automatically discovers AWS resources"
    },
    {
      icon: Globe,
      title: "Website Monitoring",
      description: "Experience real-time website performance monitoring"
    },
    {
      icon: BarChart3,
      title: "Live Metrics Dashboard",
      description: "Interactive dashboards with real-time performance data"
    },
    {
      icon: Eye,
      title: "Bot Attack Detection",
      description: "Experience advanced bot attack detection and traffic analysis"
    },
    {
      icon: Bell,
      title: "Alert Configuration",
      description: "Set up custom thresholds and notification channels"
    },
    {
      icon: Smartphone,
      title: "Remote Control",
      description: "Experience controlling resources via messaging apps"
    }
  ];

  const getDemoStatusColor = () => {
    switch (demoStatus) {
      case 'online': return 'text-green-400 bg-green-400/20';
      case 'offline': return 'text-red-400 bg-red-400/20';
      default: return 'text-yellow-400 bg-yellow-400/20';
    }
  };

  const getDemoStatusIcon = () => {
    switch (demoStatus) {
      case 'online': return <Wifi className="h-4 w-4" />;
      case 'offline': return <WifiOff className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4 animate-pulse" />;
    }
  };

  const getDemoStatusText = () => {
    switch (demoStatus) {
      case 'online': return 'Demo Online';
      case 'offline': return DEMO_CONFIG.isLive ? 'Demo Offline' : 'Coming Soon';
      default: return 'Checking...';
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Try CloudGuard Demo
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the full power of CloudGuard with our interactive demo. 
            Monitor AWS resources, websites, and detect bot attacks - no signup required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Access */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600/20 rounded-lg p-3 mr-4">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Demo Access</h2>
                <div className="flex items-center space-x-2 mt-1">
                  {getDemoStatusIcon()}
                  <span className={`text-xs px-2 py-1 rounded-full ${getDemoStatusColor()}`}>
                    {getDemoStatusText()}
                  </span>
                </div>
              </div>
            </div>

            {/* Demo URL Info */}
            <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <LinkIcon className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Demo URL</span>
              </div>
              <p className="text-xs text-gray-300 break-all mb-2">{DEMO_CONFIG.url}</p>
              {!DEMO_CONFIG.isLive && (
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-2 mt-2">
                  <p className="text-xs text-yellow-300">
                    🚧 Demo is currently under development. Check back soon!
                  </p>
                </div>
              )}
            </div>

            {/* Demo Credentials */}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-mono">{DEMO_CONFIG.credentials.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(DEMO_CONFIG.credentials.email, 'email')}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <Copy className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-gray-800/30 border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-400">Password</p>
                      <p className="text-white font-mono">{DEMO_CONFIG.credentials.password}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(DEMO_CONFIG.credentials.password, 'password')}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    {copiedField === 'password' ? (
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    ) : (
                      <Copy className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleDemoLaunch}
                disabled={!DEMO_CONFIG.isLive || demoStatus !== 'online'}
                className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform ${
                  DEMO_CONFIG.isLive && demoStatus === 'online'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white hover:scale-105'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Play className="h-5 w-5" />
                <span>{DEMO_CONFIG.isLive ? 'Launch Demo' : 'Demo Coming Soon'}</span>
                {DEMO_CONFIG.isLive && <ExternalLink className="h-5 w-5" />}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                {DEMO_CONFIG.isLive 
                  ? "Opens in a new tab • No installation required"
                  : "We're working hard to bring you an amazing demo experience"
                }
              </p>
            </div>
          </div>

          {/* Live Preview */}
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Activity className="h-6 w-6 text-green-400 mr-2" />
              Live Demo Preview
            </h3>
            
            <div className="space-y-4">
              {/* Simulated Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">CPU Usage</span>
                    <span className="text-white font-semibold">{animatedMetrics.cpu.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${animatedMetrics.cpu}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Memory</span>
                    <span className="text-white font-semibold">{animatedMetrics.memory.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${animatedMetrics.memory}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Websites</span>
                    <span className="text-white font-semibold">{animatedMetrics.websites}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-cyan-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${(animatedMetrics.websites / 12) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Bot Attacks</span>
                    <span className="text-white font-semibold">{animatedMetrics.botAttacks}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${(animatedMetrics.botAttacks / 200) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Resource Status */}
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Server className="h-5 w-5 text-green-400 mr-2" />
                  Active Resources
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">EC2 Instances</span>
                    <span className="text-green-400">● 12 Running</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">RDS Databases</span>
                    <span className="text-green-400">● 3 Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Websites Monitored</span>
                    <span className="text-blue-400">● {animatedMetrics.websites} Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Bot Attacks Blocked</span>
                    <span className="text-red-400">● {animatedMetrics.botAttacks} Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What You'll Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 text-center"
              >
                <div className="bg-blue-600/20 rounded-lg p-3 w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Instructions */}
        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            {DEMO_CONFIG.isLive ? 'Demo Instructions' : 'What to Expect'}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {DEMO_CONFIG.isLive ? 'Getting Started' : 'Demo Features'}
                </h3>
                {DEMO_CONFIG.isLive ? (
                  <ol className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                      Click "Launch Demo\" to open the application
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                      Use the demo credentials to log in
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                      Explore AWS resources and website monitoring
                    </li>
                  </ol>
                ) : (
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      Real-time AWS resource monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      Website performance tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      Bot attack detection system
                    </li>
                  </ul>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {DEMO_CONFIG.isLive ? 'Key Features to Try' : 'Coming Soon'}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    Interactive dashboards with live metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    Custom alert configuration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    Remote control capabilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    Traffic analytics and security monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
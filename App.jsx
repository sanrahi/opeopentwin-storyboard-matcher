import React, { useState } from 'react';
import { Search, Database, Zap, Users, MapPin, Shield, Wrench, BookOpen, TrendingUp, Truck, Home, Wifi, DollarSign, Heart, GraduationCap, TreePine } from 'lucide-react';

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedStoryboard, setSelectedStoryboard] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [matchResults, setMatchResults] = useState([]);

  const storyboards = [
    {
      id: 1,
      name: "Natural environment",
      description: "Environmental monitoring, conservation, climate data, and natural resource management",
      icon: <TreePine className="w-5 h-5" />,
      keywords: ["environment", "natural", "climate", "weather", "conservation", "ecosystem", "wildlife", "air quality", "water", "pollution", "carbon", "sustainability", "green", "renewable"],
      dataSources: ["Environmental sensors", "Climate data", "Air quality monitors", "Water quality data", "Satellite imagery", "Weather stations", "Biodiversity databases"],
      attributes: ["Climate patterns", "Environmental health", "Conservation metrics", "Pollution levels", "Ecosystem health", "Resource availability"]
    },
    {
      id: 2,
      name: "Built environment",
      description: "Urban planning, building systems, infrastructure development, and smart city technologies",
      icon: <MapPin className="w-5 h-5" />,
      keywords: ["built", "urban", "buildings", "construction", "architecture", "planning", "development", "zoning", "smart city", "infrastructure", "facilities"],
      dataSources: ["Building permits", "Construction data", "Zoning maps", "Smart building systems", "Urban planning data", "Property records", "GIS databases"],
      attributes: ["Building efficiency", "Urban development", "Smart infrastructure", "Space utilization", "Construction trends", "Planning compliance"]
    },
    {
      id: 3,
      name: "Community business",
      description: "Local business development, small enterprise support, and community economic initiatives",
      icon: <Home className="w-5 h-5" />,
      keywords: ["community", "local business", "small business", "entrepreneurship", "local economy", "neighborhood", "commerce", "retail", "services", "startups"],
      dataSources: ["Business licenses", "Local commerce data", "Community surveys", "Economic indicators", "Business development programs", "Local market data"],
      attributes: ["Business growth", "Community engagement", "Local economic health", "Small business support", "Entrepreneurship rates", "Local employment"]
    },
    {
      id: 4,
      name: "Enterprise business",
      description: "Large-scale business operations, corporate development, and enterprise-level economic activities",
      icon: <DollarSign className="w-5 h-5" />,
      keywords: ["enterprise", "corporation", "business", "industry", "manufacturing", "corporate", "large scale", "operations", "supply chain", "logistics"],
      dataSources: ["Corporate databases", "Industry reports", "Supply chain data", "Manufacturing systems", "Business intelligence", "Enterprise resource planning"],
      attributes: ["Operational efficiency", "Corporate performance", "Industry trends", "Supply chain optimization", "Business analytics", "Enterprise metrics"]
    },
    {
      id: 5,
      name: "Mobility",
      description: "Transportation systems, traffic management, and mobility solutions for people and goods",
      icon: <Truck className="w-5 h-5" />,
      keywords: ["mobility", "transportation", "traffic", "transit", "vehicles", "roads", "public transport", "logistics", "movement", "commuting", "routing"],
      dataSources: ["Traffic sensors", "GPS tracking", "Public transit data", "Vehicle registration", "Transportation surveys", "Mobility apps", "Route optimization"],
      attributes: ["Traffic flow", "Transit efficiency", "Mobility patterns", "Transportation safety", "Route optimization", "Accessibility metrics"]
    },
    {
      id: 6,
      name: "Energy",
      description: "Power generation, distribution, renewable energy, and energy efficiency systems",
      icon: <Zap className="w-5 h-5" />,
      keywords: ["energy", "power", "electricity", "renewable", "solar", "wind", "grid", "efficiency", "consumption", "generation", "battery", "storage"],
      dataSources: ["Smart meters", "Power grid data", "Renewable energy systems", "Energy consumption logs", "Utility databases", "Battery storage data"],
      attributes: ["Energy consumption", "Grid stability", "Renewable integration", "Energy efficiency", "Power generation", "Storage capacity"]
    },
    {
      id: 7,
      name: "Health & Welfare",
      description: "Public health systems, healthcare delivery, social services, and community wellness programs",
      icon: <Heart className="w-5 h-5" />,
      keywords: ["health", "healthcare", "medical", "wellness", "welfare", "social services", "public health", "disease", "treatment", "care", "support"],
      dataSources: ["Health records", "Hospital systems", "Public health data", "Social services databases", "Wellness programs", "Healthcare analytics"],
      attributes: ["Health outcomes", "Service accessibility", "Public health metrics", "Healthcare quality", "Wellness indicators", "Social support effectiveness"]
    },
    {
      id: 8,
      name: "Education",
      description: "Educational systems, learning outcomes, academic institutions, and educational technology",
      icon: <GraduationCap className="w-5 h-5" />,
      keywords: ["education", "school", "learning", "students", "teachers", "curriculum", "academic", "university", "training", "knowledge", "skills"],
      dataSources: ["Student information systems", "Academic records", "Learning management systems", "Educational assessments", "Teacher data", "Curriculum databases"],
      attributes: ["Student performance", "Educational outcomes", "Learning analytics", "Academic progress", "Teacher effectiveness", "Curriculum success"]
    },
    {
      id: 9,
      name: "Culture",
      description: "Arts, cultural heritage, community events, recreation, and cultural preservation initiatives",
      icon: <BookOpen className="w-5 h-5" />,
      keywords: ["culture", "arts", "heritage", "recreation", "events", "community", "festivals", "museums", "libraries", "cultural", "creative", "entertainment"],
      dataSources: ["Cultural institutions", "Event databases", "Arts programs", "Heritage records", "Recreation facilities", "Library systems", "Cultural surveys"],
      attributes: ["Cultural participation", "Heritage preservation", "Arts engagement", "Community events", "Cultural diversity", "Creative economy"]
    },
    {
      id: 10,
      name: "Technology - hardware",
      description: "Physical technology infrastructure, IoT devices, sensors, and hardware systems",
      icon: <Wrench className="w-5 h-5" />,
      keywords: ["hardware", "technology", "devices", "sensors", "IoT", "equipment", "infrastructure", "physical", "electronics", "systems", "machinery"],
      dataSources: ["IoT sensor networks", "Device management systems", "Hardware monitoring", "Equipment databases", "Sensor data", "Infrastructure systems"],
      attributes: ["Device performance", "Hardware reliability", "System uptime", "Sensor accuracy", "Equipment maintenance", "Technology deployment"]
    },
    {
      id: 11,
      name: "Technology - software",
      description: "Software applications, digital platforms, data analytics, and information systems",
      icon: <Database className="w-5 h-5" />,
      keywords: ["software", "technology", "applications", "digital", "platforms", "data", "analytics", "systems", "programming", "algorithms", "AI"],
      dataSources: ["Software systems", "Application databases", "User analytics", "System logs", "API data", "Platform metrics", "Digital services"],
      attributes: ["Software performance", "User engagement", "System efficiency", "Data processing", "Application usage", "Digital service quality"]
    },
    {
      id: 12,
      name: "Employment opportunity",
      description: "Job markets, workforce development, employment services, and career advancement programs",
      icon: <Users className="w-5 h-5" />,
      keywords: ["employment", "jobs", "workforce", "career", "hiring", "skills", "training", "opportunities", "unemployment", "labor", "work"],
      dataSources: ["Job market data", "Employment statistics", "Workforce development", "Skills databases", "Training programs", "Career services", "Labor analytics"],
      attributes: ["Employment rates", "Job availability", "Skills demand", "Workforce readiness", "Career progression", "Training effectiveness"]
    },
    {
      id: 13,
      name: "Utilities",
      description: "Public utilities, water systems, waste management, and essential service delivery",
      icon: <Wifi className="w-5 h-5" />,
      keywords: ["utilities", "water", "waste", "sewer", "public services", "infrastructure", "service delivery", "maintenance", "operations", "municipal"],
      dataSources: ["Utility management systems", "Water quality data", "Waste management", "Service delivery metrics", "Infrastructure monitoring", "Maintenance logs"],
      attributes: ["Service reliability", "Utility efficiency", "Infrastructure health", "Service quality", "Operational performance", "Maintenance schedules"]
    },
    {
      id: 14,
      name: "Safety & Preparedness",
      description: "Emergency response, public safety, disaster preparedness, and crisis management systems",
      icon: <Shield className="w-5 h-5" />,
      keywords: ["safety", "emergency", "preparedness", "disaster", "crisis", "response", "security", "protection", "prevention", "risk", "hazard"],
      dataSources: ["Emergency response systems", "Safety databases", "Disaster management", "Risk assessment data", "Security systems", "Emergency communications"],
      attributes: ["Response times", "Safety metrics", "Preparedness levels", "Risk mitigation", "Emergency effectiveness", "Public safety indicators"]
    },
    {
      id: 15,
      name: "Infrastructure",
      description: "Physical infrastructure, asset management, maintenance systems, and infrastructure development",
      icon: <Wrench className="w-5 h-5" />,
      keywords: ["infrastructure", "assets", "maintenance", "roads", "bridges", "facilities", "construction", "engineering", "development", "systems"],
      dataSources: ["Asset management systems", "Infrastructure databases", "Maintenance records", "Construction data", "Engineering systems", "Facility management"],
      attributes: ["Infrastructure condition", "Asset performance", "Maintenance efficiency", "System reliability", "Infrastructure capacity", "Development progress"]
    },
    {
      id: 16,
      name: "Citizen engagement",
      description: "Public participation, civic involvement, government transparency, and community feedback systems",
      icon: <Users className="w-5 h-5" />,
      keywords: ["citizen", "engagement", "participation", "civic", "government", "transparency", "feedback", "community", "democracy", "public", "involvement"],
      dataSources: ["Public feedback systems", "Civic engagement platforms", "Survey data", "Community forums", "Government transparency", "Participation metrics"],
      attributes: ["Participation rates", "Civic engagement", "Public satisfaction", "Government transparency", "Community involvement", "Feedback effectiveness"]
    }
  ];

  const analyzeQuery = (inputQuery) => {
    setIsAnalyzing(true);

    setTimeout(() => {
      const lowerQuery = inputQuery.toLowerCase();
      const matches = storyboards.map(storyboard => {
        let score = 0;

        storyboard.keywords.forEach(keyword => {
          if (lowerQuery.includes(keyword.toLowerCase())) {
            score += 2;
          }
        });

        const words = lowerQuery.split(' ');
        words.forEach(word => {
          if (word.length > 3 && storyboard.description.toLowerCase().includes(word)) {
            score += 1;
          }
        });

        return { ...storyboard, score };
      });

      const sortedMatches = matches
        .filter(match => match.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      setMatchResults(sortedMatches);
      setIsAnalyzing(false);

      if (sortedMatches.length > 0 && sortedMatches[0].score > 2) {
        setSelectedStoryboard(sortedMatches[0]);
      }
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      analyzeQuery(query);
    }
  };

  const selectStoryboard = (storyboard) => {
    setSelectedStoryboard(storyboard);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">OpenTwin Storyboard</h1>
        <p className="text-gray-600 mb-6">
          Describe your project or challenge in natural language, and we'll load the most relevant data into OpenTwin.
        </p>

        <div className="mb-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., help me design a smart traffic light sensor that increases traffic flow and reduces emergency response time"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!query.trim() || isAnalyzing}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              {isAnalyzing ? 'Analyzing...' : 'Find Storyboard'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Try these examples:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Help me design a smart traffic light sensor that increases traffic flow",
              "Monitor air quality and environmental health in the city",
              "Optimize energy consumption in public buildings",
              "Improve student performance and educational outcomes",
              "Enhance public safety and emergency response times",
              "Support local business development and growth"
            ].map((example, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(example)}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      {(isAnalyzing || matchResults.length > 0) && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Analysis Results</h2>

          {isAnalyzing ? (
            <div className="flex items-center gap-3 py-8">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Analyzing your query and matching to storyboards...</span>
            </div>
          ) : (
            <div className="space-y-4">
              {matchResults.map((match, idx) => (
                <div
                  key={match.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedStoryboard?.id === match.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => selectStoryboard(match)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-full">
                      {match.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{match.name}</h3>
                      <p className="text-sm text-gray-600">Match Score: {match.score}</p>
                    </div>
                    {idx === 0 && (
                      <span className="ml-auto px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                        Best Match
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{match.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {selectedStoryboard && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              {selectedStoryboard.icon}
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{selectedStoryboard.name}</h2>
              <p className="text-gray-600">{selectedStoryboard.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Data Sources</h3>
              <div className="space-y-2">
                {selectedStoryboard.dataSources.map((source, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">{source}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Attributes</h3>
              <div className="space-y-2">
                {selectedStoryboard.attributes.map((attribute, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{attribute}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t">
            <button 
              onClick={() => window.open('https://console-preview.neo4j.io/tools/explore', '_blank')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Launch OpenTwin Storyboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
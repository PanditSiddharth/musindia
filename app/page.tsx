"use client"
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Heart, Users, BookOpen, Home, ChevronRight, Award, Target, Eye, Handshake } from 'lucide-react';

export default function MusindiaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About Us', id: 'about', icon: Users },
    { name: 'Our Work', id: 'work', icon: Heart },
    { name: 'Contact', id: 'contact', icon: Phone }
  ];

  const changePage = (pageId:any) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // HomePage Component
  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Lives,
              <span className="block text-orange-600">Building Communities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A nonprofit voluntary organization dedicated to women and child development, 
              elderly care, and community welfare across Uttar Pradesh
            </p>
            <button 
              onClick={() => changePage('about')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More About Us
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-64 bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                <Users className="w-24 h-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vriddha Ashram</h3>
                <p className="text-gray-600">Providing compassionate care and support for senior citizens in our community</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <Heart className="w-24 h-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Women Empowerment</h3>
                <p className="text-gray-600">Training and awareness programs for women's rights and self-development</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <div className="h-64 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Child Development</h3>
                <p className="text-gray-600">Working towards elimination of child labor and providing education opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Districts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">2002</div>
              <div className="text-gray-600 font-medium">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600 font-medium">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Focus Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Elderly Care through Vriddha Ashram facilities</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Women empowerment and skill development</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Child welfare and education</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Environmental protection initiatives</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Handshake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
              <p className="text-gray-700 mb-6">
                Join us in making a difference. Whether through volunteering, donations, or partnerships, 
                your support helps us serve communities across Uttar Pradesh.
              </p>
              <button 
                onClick={() => changePage('contact')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // AboutPage Component
  const AboutPage = () => (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">About Us</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>

        {/* Organization Info */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">Manav Utthan Samiti</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Manav Utthan Samiti</strong> is a nonprofit making voluntary organization registered by 
              Registrar, Chits, Funds and Societies, Lucknow, State Uttar Pradesh (India) under Societies 
              Registration Act XXI of 1860 on <strong>4 September 2002</strong>.
            </p>
            
            <p>
              Founders of the organization accepted women and child development as duty of the organization, 
              hence named it Manav Utthan Samiti. It is a country level voluntary organization operating 
              various public related welfare activities in more than <strong>20 districts of Uttar Pradesh</strong>.
            </p>

            <p>
              We work with democratic ideals in practice and recognize equality, social justice, freedom, 
              continuous development, self-enrichment, and participation as our core values.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <Eye className="w-10 h-10 text-orange-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To strengthen and develop human resources that act upon true, real, and right direction, 
              ultimately nurturing the bonds of community spirit and social justice, creating peace and harmony, 
              and striving for sustainable human development.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <Target className="w-10 h-10 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To develop character and skills, health and education of human beings, and to safeguard 
              environmental factors in protection of truth and nature through awareness, training, 
              motivation, research, and action.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Objectives</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Integrated development of public by effective implementation of state/central government programs
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Work for child labor elimination and child exploitation prevention
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Prepare proper environment for physical, educational and economic development of children
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Aware women about their legal rights and work to eliminate dowry and domestic violence
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Train women in income generating activities for self-development
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Work for welfare of labor, poor and weaker sections of society
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Provide facility of group insurance, health insurance, and labor registration
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="w-6 h-6 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Reduce air and water pollution and develop pollution-free environment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">⚖️</div>
              <h4 className="font-bold text-xl mb-2">Equality and Justice</h4>
              <p className="text-orange-100">Social justice and equality for all</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🕊️</div>
              <h4 className="font-bold text-xl mb-2">Peace and Harmony</h4>
              <p className="text-orange-100">Creating peaceful communities</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🌱</div>
              <h4 className="font-bold text-xl mb-2">Sustainable Development</h4>
              <p className="text-orange-100">Growth with environmental care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // WorkPage Component
  const WorkPage = () => (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Our Work</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>

        {/* Main Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Vriddha Ashram (Elderly Care)',
              icon: Users,
              color: 'orange',
              description: 'Providing compassionate care, shelter, medical support, and a dignified living environment for senior citizens who need assistance and companionship.'
            },
            {
              title: 'Women Empowerment',
              icon: Heart,
              color: 'pink',
              description: 'Awareness programs about legal rights, eliminating dowry and domestic violence, preventing female feticide, and providing income-generating skill training.'
            },
            {
              title: 'Child Welfare',
              icon: BookOpen,
              color: 'blue',
              description: 'Working for child labor elimination, preventing child exploitation, and creating proper environment for physical, educational and economic development.'
            },
            {
              title: 'Labor Welfare',
              icon: Handshake,
              color: 'green',
              description: 'Facilitating group insurance, health insurance, labor department registration, and organizing self-help groups for workers and weaker sections.'
            },
            {
              title: 'Environmental Protection',
              icon: Award,
              color: 'teal',
              description: 'Working to reduce air and water pollution, developing pollution-free environment, and awakening public consciousness about nature protection.'
            },
            {
              title: 'Government Schemes',
              icon: Target,
              color: 'purple',
              description: 'Effective implementation and coordination of state and central government programs and schemes for integrated public development.'
            }
          ].map((program, index) => {
            const Icon = program.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Women Welfare */}
          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Women Welfare Programs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Legal rights awareness campaigns</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Anti-dowry movement programs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Domestic violence prevention</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Female feticide awareness</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Vocational skill training</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-pink-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Self-help group formation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Child Development */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Child Development Initiatives</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Child labor elimination programs</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Educational support and resources</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Health and nutrition programs</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Child exploitation prevention</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Skill development workshops</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Recreation and sports facilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Elderly Care */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vriddha Ashram Services</h3>
            <p className="text-gray-700 mb-4">
              Our Vriddha Ashram (old age home) provides comprehensive care for senior citizens, including:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-bold text-gray-900 mb-2">Shelter and Care</h4>
                <p className="text-sm text-gray-600">Safe, comfortable living facilities with 24/7 support</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-bold text-gray-900 mb-2">Medical Support</h4>
                <p className="text-sm text-gray-600">Regular health checkups and medical assistance</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-bold text-gray-900 mb-2">Social Activities</h4>
                <p className="text-sm text-gray-600">Recreational programs and companionship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Making Real Impact</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Through our dedicated programs across 20+ districts in Uttar Pradesh, we continue to transform 
            lives and build stronger, more equitable communities. Every initiative is driven by our commitment 
            to social justice, equality, and sustainable development.
          </p>
        </div>
      </div>
    </div>
  );

  // ContactPage Component
  const ContactPage = () => (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Contact Us</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Office Address</p>
                  <p className="text-gray-700 leading-relaxed">
                    D-261 New Colony Para Road<br />
                    Rajajipuram, Lucknow - 226017<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <a href="mailto:rmus2002@rediffmail.com" className="text-orange-600 hover:underline block">
                    rmus2002@rediffmail.com
                  </a>
                  <a href="mailto:mus2002lko@gmail.com" className="text-orange-600 hover:underline block">
                    mus2002lko@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Contact Numbers</p>
                  <a href="tel:9005044847" className="text-gray-700 hover:text-orange-600 block text-lg">
                    9005044847
                  </a>
                  <a href="tel:9140177461" className="text-gray-700 hover:text-orange-600 block text-lg">
                    9140177461
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md mt-6">
                <p className="font-bold text-gray-900 mb-1">President</p>
                <p className="text-gray-700 text-lg">S.K. Chaurasiya</p>
              </div>
            </div>
          </div>

          {/* Support & Involvement */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support Our Cause</h3>
              <p className="text-gray-700 mb-6">
                Your support helps us continue our mission of serving humanity. Every contribution makes 
                a real difference in the lives of those we serve.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Volunteer With Us</h4>
                  <p className="text-gray-700 mb-4">Join our volunteer team — help run programs, participate in outreach, or support events. Volunteers are the heartbeat of our outreach.</p>
                  <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for volunteering — we will contact you soon!'); }} className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <input required name="name" placeholder="Full name" className="w-full border rounded-lg px-3 py-2" />
                      <input required name="phone" placeholder="Phone number" className="w-full border rounded-lg px-3 py-2" />
                    </div>
                    <input required name="email" type="email" placeholder="Email address" className="w-full border rounded-lg px-3 py-2" />
                    <textarea name="message" rows={4} placeholder="Tell us how you'd like to help" className="w-full border rounded-lg px-3 py-2"></textarea>
                    <div className="flex items-center justify-between">
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold">Sign Up to Volunteer</button>
                      <button type="button" onClick={() => window.location.href = 'mailto:mus2002lko@gmail.com?subject=Volunteer%20Application'} className="text-sm text-gray-600 underline">Or email us</button>
                    </div>
                  </form>
                </div>

                <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Donate</h4>
                  <p className="text-gray-700 mb-3">Your donations support programs, shelters, and educational resources. We accept bank transfers and online donations.</p>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div><strong>Account Name:</strong> Manav Utthan Samiti</div>
                    <div><strong>Bank:</strong> [Bank Name]</div>
                    <div><strong>IFSC:</strong> [IFSC CODE]</div>
                    <div><strong>Account No:</strong> [XXXXXXXXXXXX]</div>
                    <div className="mt-2 text-sm text-gray-600">(Replace placeholders with actual banking details before publishing.)</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-900 mb-2">Partnerships & CSR</h4>
                  <p className="text-gray-700">We collaborate with businesses and NGOs for larger impact. For CSR collaborations, please write to <a href="mailto:rmus2002@rediffmail.com" className="text-orange-600 hover:underline">rmus2002@rediffmail.com</a>.</p>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 text-center shadow">
                  <p className="font-semibold text-gray-900">Find us on map</p>
                  <div className="mt-3">
                    {/* Placeholder map - replace with an actual embed or iframe when deploying */}
                    <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Map embed placeholder</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600">© {new Date().getFullYear()} Manav Utthan Samiti — All rights reserved.</p>
            <div className="flex items-center justify-center mt-4 space-x-4 text-gray-600">
              <a href="#" onClick={(e) => { e.preventDefault(); changePage('home'); }} className="hover:text-orange-600">Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); changePage('about'); }} className="hover:text-orange-600">About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); changePage('work'); }} className="hover:text-orange-600">Our Work</a>
              <a href="#" onClick={(e) => { e.preventDefault(); changePage('contact'); }} className="hover:text-orange-600">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );

  // Main render: Header + pages
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">M</div>
              <div>
                <div className="font-bold text-lg">Manav Utthan Samiti</div>
                <div className="text-xs text-gray-500">Serving Uttar Pradesh since 2002</div>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.id} onClick={() => changePage(item.id)} className={`flex items-center space-x-2 ${currentPage === item.id ? 'text-orange-600 font-semibold' : 'text-gray-700 hover:text-orange-600'}`}>
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center md:hidden">
              <button aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md border">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button key={item.id} onClick={() => changePage(item.id)} className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg ${currentPage === item.id ? 'bg-orange-50 text-orange-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'work' && <WorkPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

import { Heart, Stethoscope, BookOpen, Shirt, Calendar, Users, Target } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      icon: Heart,
      title: 'Nirdhan Kanya Vivah',
      badge: 'Flagship Initiative',
      description: 'Our annual mass wedding ceremony supports underprivileged families in organizing dignified weddings for their daughters. We provide complete wedding arrangements, financial assistance, and ensure traditional customs are honored.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
      stats: [
        { label: 'Marriages Supported', value: '50+' },
        { label: 'Families Helped', value: '200+' },
        { label: 'Annual Events', value: '1' },
      ],
      features: [
        'Complete wedding ceremony arrangements',
        'Traditional rituals and customs',
        'Financial assistance for the bride',
        'Community celebration and support',
        'Post-wedding follow-up care',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Medical Camps',
      badge: 'Health Initiative',
      description: 'Regular free medical camps providing essential healthcare services to underserved communities. Our camps offer consultations, medicines, and health education to promote wellness and prevent diseases.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      stats: [
        { label: 'People Treated', value: '1000+' },
        { label: 'Camps Organized', value: '25+' },
        { label: 'Medical Partners', value: '10+' },
      ],
      features: [
        'Free health check-ups and consultations',
        'Essential medicines distribution',
        'Specialized medical screenings',
        'Health awareness programs',
        'Referral services for serious cases',
      ],
    },
    {
      icon: BookOpen,
      title: 'Education & Stationery Support',
      badge: 'Education Initiative',
      description: 'Supporting education for underprivileged children through stationery distribution, scholarship programs, and educational workshops. We believe education is the key to breaking the cycle of poverty.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      stats: [
        { label: 'Students Supported', value: '300+' },
        { label: 'Schools Covered', value: '15+' },
        { label: 'Scholarships Given', value: '50+' },
      ],
      features: [
        'Free stationery and book distribution',
        'Merit-based scholarship programs',
        'Career guidance workshops',
        'Digital literacy training',
        'School infrastructure support',
      ],
    },
    {
      icon: Shirt,
      title: 'Winter Relief & Clothing Drive',
      badge: 'Relief Initiative',
      description: 'Annual winter relief program distributing warm clothing, blankets, and essential supplies to protect vulnerable populations from harsh winter conditions in our region.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      stats: [
        { label: 'People Reached', value: '500+' },
        { label: 'Items Distributed', value: '2000+' },
        { label: 'Villages Covered', value: '20+' },
      ],
      features: [
        'Warm clothing distribution',
        'Blanket and quilt distribution',
        'Essential winter supplies',
        'Door-to-door delivery for elderly',
        'Community distribution centers',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Initiatives</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto">
            Comprehensive social welfare programs designed to uplift communities and transform lives across Raebareli
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    !isEven ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  <div className={!isEven ? 'md:col-start-2' : ''}>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                      <Icon className="h-4 w-4" />
                      <span>{initiative.badge}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {initiative.title}
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {initiative.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {initiative.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="text-center p-3 bg-orange-50 rounded-lg"
                        >
                          <div className="text-2xl font-bold text-orange-600">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Target className="h-5 w-5 text-orange-600" />
                        <span>Key Features</span>
                      </h3>
                      <ul className="space-y-2">
                        {initiative.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-3 text-gray-700"
                          >
                            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-green-600"></div>
                            </div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={!isEven ? 'md:col-start-1 md:row-start-1' : ''}>
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="rounded-lg shadow-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Consistent Impact
              </h3>
              <p className="text-gray-600">
                Year-round programs ensuring continuous support for communities in need
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Programs designed with community input and executed with local participation
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Measurable Results
              </h3>
              <p className="text-gray-600">
                Data-driven approach with clear metrics to track and improve our impact
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Support Our Initiatives
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Your contribution directly impacts lives. Choose to support a specific initiative or contribute to our general fund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-green-700 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Make a Donation
            </a>
            <a
              href="/volunteer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;

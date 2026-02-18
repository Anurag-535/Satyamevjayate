import { Link } from 'react-router-dom';
import { Heart, Users, HandHeart, Trophy, ArrowRight, Quote } from 'lucide-react';

const Home = () => {
  const metrics = [
    { icon: Heart, value: '500+', label: 'Lives Impacted' },
    { icon: Users, value: '50+', label: 'Marriages Supported' },
    { icon: HandHeart, value: '100+', label: 'Active Volunteers' },
    { icon: Trophy, value: '15+', label: 'Years of Service' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Beneficiary',
      quote: 'The support I received from Satyamev Jayate Seva Sanstha changed my life. They didn\'t just help with my marriage, they gave me hope and dignity.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Community Member',
      quote: 'This organization truly embodies the spirit of seva. Their dedication to helping underprivileged families is inspiring and deeply impactful.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    },
    {
      name: 'Anita Devi',
      role: 'Parent',
      quote: 'I never thought my daughter would have a proper wedding. The Sanstha made it possible with such love and respect. Forever grateful.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative bg-cover bg-center py-20 sm:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Lives,<br />Uniting Communities
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Supporting underprivileged families in Raebareli through compassion, dedication, and community service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-orange-600 text-white rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Donate Now</span>
            </Link>
            <Link
              to="/initiatives"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Our Initiatives</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-shadow duration-200"
                >
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                FLAGSHIP INITIATIVE
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Nirdhan Kanya Vivah
              </h2>
              <p className="text-lg text-orange-50 mb-6 leading-relaxed">
                Our annual flagship event in Babuganj, Unchahar, supports marriages for underprivileged girls,
                providing them with dignity, respect, and a beautiful start to their new lives. This initiative
                embodies our core mission of social upliftment and community empowerment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>Complete wedding arrangements with traditional ceremonies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>Financial assistance and gifts for the bride</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span>Community participation and cultural celebration</span>
                </li>
              </ul>
              <Link
                to="/initiatives"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=700&fit=crop"
                alt="Wedding celebration"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-lg shadow-xl max-w-xs">
                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Successful marriages supported annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Voices from Our Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the people whose lives have been touched by our work
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 relative"
              >
                <Quote className="h-10 w-10 text-orange-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Be a Part of the Change
          </h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            Your contribution can transform lives. Join us in our mission to create a more equitable
            and compassionate society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-green-700 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Make a Donation
            </Link>
            <Link
              to="/volunteer"
              className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-800 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

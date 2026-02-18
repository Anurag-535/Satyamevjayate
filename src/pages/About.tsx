import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower underprivileged communities through sustainable social welfare initiatives, focusing on education, healthcare, and social upliftment.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A society where every individual has access to basic dignity, opportunities for growth, and the support needed to thrive.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, compassion, transparency, and unwavering commitment to serving humanity with respect and dedication.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in grassroots engagement, ensuring our initiatives are designed by and for the communities we serve.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Verma',
      role: 'Founder & President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Leading the organization with 20+ years of social work experience',
    },
    {
      name: 'Sunita Sharma',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
      bio: 'Overseeing programs and community outreach initiatives',
    },
    {
      name: 'Amit Kumar',
      role: 'Secretary',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'Managing operations and volunteer coordination',
    },
    {
      name: 'Priya Singh',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
      bio: 'Ensuring financial transparency and resource management',
    },
    {
      name: 'Manoj Tiwari',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop',
      bio: 'Designing and implementing community programs',
    },
    {
      name: 'Anita Yadav',
      role: 'Community Relations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Building bridges between the organization and local communities',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto">
            Discover the story behind Satyamev Jayate Seva Sanstha and our commitment to transforming lives in Raebareli
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Satyamev Jayate Seva Sanstha was founded in the heart of Babuganj, Unchahar, Raebareli, with a
                  simple yet powerful vision: to bring hope and dignity to those who need it most. What started as a
                  small community initiative has grown into a comprehensive social welfare organization touching
                  hundreds of lives each year.
                </p>
                <p>
                  Our journey began with the observation that many underprivileged families in our region struggled
                  to provide proper weddings for their daughters. This sparked our flagship initiative, the Nirdhan
                  Kanya Vivah program, which has since become a beacon of hope for families across Raebareli.
                </p>
                <p>
                  Over the years, we've expanded our reach to include healthcare camps, educational support,
                  winter relief programs, and various other community welfare initiatives. Each program is designed
                  with the same core principle: to serve with dignity, respect, and genuine compassion.
                </p>
                <p>
                  Today, Satyamev Jayate Seva Sanstha stands as a testament to what dedicated volunteers and
                  compassionate donors can achieve when they come together for a common cause. We continue to grow,
                  adapt, and serve, always staying true to our roots in the communities of Raebareli.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=700&fit=crop"
                alt="Community gathering"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-sm">Years of Dedicated Service</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our mission and ensure every initiative creates meaningful impact
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg text-green-50 mb-8">
            Whether through donations, volunteering, or spreading awareness, you can be part of our mission
            to create lasting positive change in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="px-8 py-4 bg-white text-green-700 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-900 transition-colors border-2 border-white"
            >
              Support Our Cause
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

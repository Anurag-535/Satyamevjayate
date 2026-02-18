import { Video, Image as ImageIcon, FileText, TrendingUp, Users, Heart } from 'lucide-react';

const Media = () => {
  const videos = [
    {
      title: 'Nirdhan Kanya Vivah 2023 Highlights',
      thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      title: 'Community Healthcare Camp - Village Outreach',
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      title: 'Education Initiative - Back to School Program',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ',
    },
    {
      title: 'Winter Relief Drive 2023',
      thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      videoId: 'dQw4w9WgXcQ',
    },
  ];

  const photos = [
    'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=400&fit=crop',
  ];

  const financialData = [
    {
      icon: Heart,
      label: 'Total Donations Received',
      value: '₹25,00,000',
      color: 'orange',
    },
    {
      icon: Users,
      label: 'Direct Program Spending',
      value: '₹20,00,000',
      percentage: '80%',
      color: 'green',
    },
    {
      icon: TrendingUp,
      label: 'Administrative Costs',
      value: '₹3,00,000',
      percentage: '12%',
      color: 'blue',
    },
    {
      icon: FileText,
      label: 'Marketing & Awareness',
      value: '₹2,00,000',
      percentage: '8%',
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Media & Transparency
          </h1>
          <p className="text-xl text-orange-50 max-w-3xl mx-auto">
            Witness our impact through visual stories and explore our commitment to financial transparency
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <Video className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">Video Gallery</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Watch our latest videos showcasing the impact of our initiatives and the stories of those we serve.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative group cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-orange-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center space-x-2"
                  >
                    <span>Watch on YouTube</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <ImageIcon className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-gray-900">Photo Gallery</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Browse through moments captured during our events and initiatives across Raebareli.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={photo}
                  alt={`Event photo ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FileText className="h-8 w-8 text-orange-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Financial Transparency
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency. Here's how your contributions are making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {financialData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg border-2 border-orange-100 hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-10 w-10 text-orange-600 mb-4" />
                  <div className="text-sm text-gray-600 mb-2">{item.label}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {item.value}
                  </div>
                  {item.percentage && (
                    <div className="text-sm font-semibold text-green-600">
                      {item.percentage} of total
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How We Utilize Your Donations
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">
                    Direct Program Spending
                  </span>
                  <span className="font-bold text-green-700">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Directly funding initiatives like Nirdhan Kanya Vivah, healthcare camps, education support, and relief programs
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">
                    Administrative & Operational Costs
                  </span>
                  <span className="font-bold text-blue-700">12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '12%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Essential operational expenses including staff salaries, office maintenance, and logistics
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">
                    Marketing & Awareness
                  </span>
                  <span className="font-bold text-purple-700">8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-purple-600 h-3 rounded-full" style={{ width: '8%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Building awareness, donor engagement, and expanding our reach to serve more communities
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-green-300">
              <h4 className="font-bold text-gray-900 mb-3">Our Commitment</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Annual financial audits by independent certified auditors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Quarterly financial reports shared with major donors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Complete documentation of all expenses and beneficiary details</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Regular updates on social media and our website about fund utilization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Work?</h2>
          <p className="text-lg text-orange-50 mb-8">
            We're committed to complete transparency. If you have any questions about how we operate or how funds are utilized, we're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Media;

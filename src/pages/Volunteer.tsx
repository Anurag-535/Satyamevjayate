import { useState } from 'react';
import { Users, Heart, Calendar, Lightbulb, CheckCircle } from 'lucide-react';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    interests: [] as string[],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Event Management',
    'Logistics & Coordination',
    'Digital Support & Marketing',
    'Healthcare Services',
    'Education & Teaching',
    'Fundraising',
    'Photography & Videography',
    'Other',
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        interests: [],
        message: '',
      });
    }, 3000);
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Directly impact lives and contribute to meaningful social change in your community.',
    },
    {
      icon: Users,
      title: 'Build Connections',
      description: 'Meet like-minded individuals and build lasting friendships while serving together.',
    },
    {
      icon: Lightbulb,
      title: 'Learn & Grow',
      description: 'Develop new skills, gain experience, and broaden your perspective on social issues.',
    },
    {
      icon: Calendar,
      title: 'Flexible Commitment',
      description: 'Choose opportunities that fit your schedule and areas of interest.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Join our community of passionate volunteers and be part of the change you wish to see
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-all duration-200"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-700 mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Registration
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get in touch with you about volunteer opportunities
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-700">
                Your registration has been received. We'll contact you soon with volunteer opportunities.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="City, State"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Areas of Interest (Select all that apply)
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-green-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tell Us About Yourself (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Share your motivation, skills, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-green-700 text-white rounded-lg text-lg font-semibold hover:bg-green-800 transition-colors shadow-md hover:shadow-lg"
              >
                Submit Registration
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                By submitting this form, you agree to be contacted about volunteer opportunities.
              </p>
            </form>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What to Expect Next
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Application Review
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our team will review your application within 3-5 business days.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Welcome Call
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We'll contact you to discuss volunteer opportunities that match your interests.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-orange-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Start Volunteering
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Begin your journey of making a difference in your community!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;

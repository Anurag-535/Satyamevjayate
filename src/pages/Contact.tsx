import { MapPin, Phone, Mail, Clock, CreditCard, Building2, QrCode, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact & Donate</h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Get in touch with us or make a contribution to support our cause
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Satyamev Jayate Seva Sanstha<br />
                      Babuganj, Unchahar<br />
                      Raebareli, Uttar Pradesh 229406
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@satyamevjayate.org</p>
                    <p className="text-gray-600">contact@satyamevjayate.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Google Map</p>
                    <p className="text-sm text-gray-500">
                      Babuganj, Unchahar, Raebareli
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Make a Donation
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your generous contribution helps us continue our mission of serving underprivileged
                communities. Every donation, big or small, makes a significant difference in someone's life.
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Bank Transfer</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-sm font-semibold text-gray-700">
                      Account Name:
                    </div>
                    <div className="col-span-2 text-sm text-gray-900 font-medium">
                      Satyamev Jayate Seva Sanstha
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-sm font-semibold text-gray-700">
                      Account Number:
                    </div>
                    <div className="col-span-2 text-sm text-gray-900 font-mono font-bold">
                      XXXX XXXX XXXX XXXX
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-sm font-semibold text-gray-700">
                      IFSC Code:
                    </div>
                    <div className="col-span-2 text-sm text-gray-900 font-mono font-bold">
                      XXXXXX0XXXX
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-sm font-semibold text-gray-700">
                      Bank Name:
                    </div>
                    <div className="col-span-2 text-sm text-gray-900 font-medium">
                      State Bank of India
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-sm font-semibold text-gray-700">
                      Branch:
                    </div>
                    <div className="col-span-2 text-sm text-gray-900 font-medium">
                      Raebareli Main Branch
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-lg p-6 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <QrCode className="h-6 w-6 text-green-700" />
                  <h3 className="text-xl font-bold text-gray-900">UPI Payment</h3>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-white p-6 rounded-lg shadow-md mb-4">
                    <div className="w-48 h-48 bg-gray-100 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <QrCode className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500 font-medium">UPI QR Code</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 mb-2">UPI ID:</p>
                    <p className="text-lg font-mono font-bold text-gray-900">
                      satyamev@upi
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-lg p-6">
                <Heart className="h-8 w-8 mb-3" />
                <h3 className="text-xl font-bold mb-2">Tax Benefits</h3>
                <p className="text-orange-50 text-sm">
                  All donations to Satyamev Jayate Seva Sanstha are eligible for tax deductions under
                  Section 80G of the Income Tax Act. We'll provide you with the necessary receipts and
                  certificates for your tax filings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Ways to Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Can't donate financially? There are many other ways you can support our cause
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                In-Kind Donations
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Donate clothes, books, stationery, medical supplies, or other materials that directly
                benefit our initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Volunteer Your Time
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Join our team of dedicated volunteers and contribute your time, skills, and energy to our programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Spread Awareness
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share our mission on social media, tell your friends and family, and help us reach more people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Thank You for Your Support</h2>
          <p className="text-lg text-orange-50 mb-8">
            Every contribution, whether through donations, volunteering, or spreading awareness, brings us
            closer to our goal of creating a more equitable society. Together, we can transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/volunteer"
              className="px-8 py-4 bg-white text-orange-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Become a Volunteer
            </a>
            <a
              href="/initiatives"
              className="px-8 py-4 bg-orange-700 text-white rounded-lg text-lg font-semibold hover:bg-orange-800 transition-colors border-2 border-white shadow-lg"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

'use client';

import React from 'react';

// Contact Methods
function ContactMethods() {
  const methods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'p.chhengthai@gmail.com',
      link: 'mailto:p.chhengthai@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Pheav Chhengthai',
      link: 'https://www.linkedin.com/in/chhengthai-pheav-39a683255/',
      description: 'Connect with me professionally'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: '@sys-thai69',
      link: 'https://github.com/sys-thai69',
      description: 'Check out my code'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      link: '#',
      description: 'Available for remote work'
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      {methods.map((method, index) => (
        <a
          key={index}
          href={method.link}
          target={method.link.startsWith('http') ? '_blank' : undefined}
          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="glass p-6 rounded-xl hover:glow-hover transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
            {method.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
          <p className="text-indigo-400 font-medium mb-2">{method.value}</p>
          <p className="text-sm text-gray-400">{method.description}</p>
        </a>
      ))}
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // TODO: Implement actual form submission logic here
    // For now, simulate a submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          <option value="">Select a subject</option>
          <option value="job">Job Opportunity</option>
          <option value="project">Project Collaboration</option>
          <option value="internship">Internship</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
          placeholder="Tell me about your project or opportunity..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none glow-hover"
      >
        {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
          Thank you! I'll get back to you as soon as possible.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
          Oops! Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
}

// Availability Status
function AvailabilityStatus() {
  return (
    <div className="glass p-6 rounded-xl mb-8 border-l-4 border-green-500">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <h3 className="text-lg font-bold text-white">Currently Available</h3>
      </div>
      <p className="text-gray-300">
        I'm actively looking for new opportunities in AI/ML and full-stack development. Open to internships, projects, and collaborations.
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm currently open to new opportunities, internships, and collaborations in the AI or development space. Whether you have a specific project proposal or just want to chat about technology, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <AvailabilityStatus />
            <ContactMethods />

            {/* Quick Response Time */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Response within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Professional and friendly communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Open to remote collaborations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-gray-300">Flexible schedule for meetings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-16 text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Prefer Email?</h3>
          <p className="text-gray-300 mb-6">
            You can also reach me directly at:
          </p>
          <a
            href="mailto:p.chhengthai@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 glow-hover"
          >
            p.chhengthai@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

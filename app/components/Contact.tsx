import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Message sent successfully! I will get back to you soon.'
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
        console.error('Error sending message:', error);
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full mt-20 sm:mt-28"
    >
      <h2 className="text-[#fff] text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)] mb-5">
        <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
          04.
        </span>
        Let&apos;s Connect{" "} {/* eslint-disable-line react/no-unescaped-entities */}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          <p className="text-[#c4c4c4] font-[family-name:var(--font-geist-sans)] font-light">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
          </p>
          <div className="flex flex-col gap-4 mt-2 sm:mt-4 text-[#c4c4c4]">
            {[
              {
                href: "mailto:jeroldgomez345@gmail.com", 
                icon: <Image src="/email-w.png" alt="Email" width={20} height={20} className="group-hover:opacity-100"/>,
                text: "jeroldgomez345@gmail.com",
                label: "Email Jerold Gomez"
              },
              {
                href: "https://www.linkedin.com/in/jeroldgomez/",
                icon: <Image src="/linkedin-logo.png" alt="LinkedIn" width={20} height={20} className="group-hover:opacity-100"/>,
                text: "linkedin.com/in/jeroldgomez",
                label: "Jerold Gomez on LinkedIn"
              },
              {
                href: "https://github.com/JeroldGomez", 
                icon: <Image src="/github.png" alt="GitHub" width={20} height={20} className="group-hover:opacity-100"/>,
                text: "github.com/JeroldGomez",
                label: "Jerold Gomez on GitHub"
              },
              {
                href: "https://www.facebook.com/JeroldGomezzz",
                icon: <Image src="/facebook.png" alt="Facebook" width={20} height={20} className="group-hover:opacity-100"/>,
                text: "facebook.com/JeroldGomezzz",
                label: "Jerold Gomez on Facebook"
              },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="
                  group flex items-center gap-3 p-3 rounded-md
                  font-[family-name:var(--font-geist-mono)] text-sm sm:text-base
                  text-[color:var(--secondary-blue)]
                  border border-transparent hover:border-neutral-700 dark:hover:border-neutral-600
                  hover:bg-neutral-800/30 dark:hover:bg-neutral-900/40
                  transition-all duration-200 ease-out
                "
              >
                <span className="flex-shrink-0 text-[color:var(--primary-blue)] group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="truncate group-hover:text-white">{link.text}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="p-6 rounded-xl bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 hover:border-neutral-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/20"
        >
          <h3 className="text-xl sm:text-lg font-normal mb-5 sm:mb-3 font-[family-name:var(--font-geist-sans)] text-[#fff]">
            Send a Quick Message
          </h3>
          <div className="h-[1px] w-full bg-[#383838] opacity-50"></div>
          <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-[#c4c4c4] block text-[14px] mb-1.5 font-medium opacity-70 font-[family-name:var(--font-geist-sans)]">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-neutral-900/60 dark:bg-black/30 border ${
                  errors.name ? 'border-red-500' : 'border-neutral-700/70'
                } rounded-md focus:outline-none focus:border-[color:var(--primary-blue)] focus:ring-1 focus:ring-[color:var(--primary-blue)] transition-colors duration-200 text-white placeholder:text-neutral-500 font-[family-name:var(--font-geist-mono)]`}
                placeholder="entry_name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 font-[family-name:var(--font-geist-mono)]">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="text-[#c4c4c4] block text-[14px] mb-1.5 opacity-70 font-medium font-[family-name:var(--font-geist-sans)]">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-neutral-900/60 dark:bg-black/30 border ${
                  errors.email ? 'border-red-500' : 'border-neutral-700/70'
                } rounded-md focus:outline-none focus:border-[color:var(--primary-blue)] focus:ring-1 focus:ring-[color:var(--primary-blue)] transition-colors duration-200 text-white placeholder:text-neutral-500 font-[family-name:var(--font-geist-mono)]`}
                placeholder="user@domain.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 font-[family-name:var(--font-geist-mono)]">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="text-[#c4c4c4] block text-[14px] opacity-70 mb-1.5 font-medium font-[family-name:var(--font-geist-sans)]">
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2.5 bg-neutral-900/60 dark:bg-black/30 border ${
                  errors.message ? 'border-red-500' : 'border-neutral-700/70'
                } rounded-md focus:outline-none focus:border-[color:var(--primary-blue)] focus:ring-1 focus:ring-[color:var(--primary-blue)] transition-colors duration-200 text-white placeholder:text-neutral-500 font-[family-name:var(--font-geist-mono)] resize-none`}
                placeholder="compose_message_here..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 font-[family-name:var(--font-geist-mono)]">{errors.message}</p>
              )}
            </div>
            {submitStatus.type && (
              <div className={`p-3 rounded-md ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/10 border border-green-500/20 text-green-500' 
                  : 'bg-red-500/10 border border-red-500/20 text-red-500'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <motion.button
              whileHover={{ boxShadow: "0px 0px 15px rgba(48, 48, 48, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`text-[#000] font-[family-name:var(--font-geist-sans)] rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-[#fff] gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Image src="/mail.png" alt="Send Email" width={20} height={20} />
                  Send Email
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 
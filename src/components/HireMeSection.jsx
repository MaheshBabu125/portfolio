import React from 'react';
import { useForm } from 'react-hook-form';
import HireMeGameButton from './HireMeGameButton';

const HireMeForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    setValue,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    // Set the hidden form values to the data from React Hook Form
    document.getElementById('real-form').querySelector('input[name="name"]').value = data.name;
    document.getElementById('real-form').querySelector('input[name="email"]').value = data.email;
    document.getElementById('real-form').querySelector('input[name="message"]').value = data.message;

    // Submit the real hidden form
    document.getElementById('real-form').submit();

    // Reset the form after submission
    reset();
  };

  return (
    <section className="text-white py-20 px-6 md:px-12">
      <div className="w-200 mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Hire Me</h2>
        <p className="text-center text-gray-400 mb-6">
          Fill the form and I'll reach out to you!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Protect against spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-400"
              {...control.register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-400"
              {...control.register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg placeholder-gray-400"
              {...control.register('message', { required: 'Message is required' })}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <HireMeGameButton formIsValid={isValid} />

          {/* Real form to send data to FormSubmit (hidden) */}
          <form
            id="real-form"
            action="https://formsubmit.co/maheshbabukethineni@gmail.com"
            method="POST"
            className="hidden"
          >
            <input type="hidden" name="name" />
            <input type="hidden" name="email" />
            <input type="hidden" name="message" />
          </form>
        </form>
      </div>
    </section>
  );
};

export default HireMeForm;

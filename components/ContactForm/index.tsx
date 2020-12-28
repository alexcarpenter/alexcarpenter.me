import clsx from 'clsx';
import { useState } from 'react';
import styles from './contact-form.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('IDLE');
  const [message, setMessage] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
    setTimeout(() => {
      setStatus('IDLE');
    }, 2000);
  };

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/f/mrgooqyl"
      method="POST"
    >
      <fieldset disabled={status === 'SUBMITTING'}>
        <legend className="sr-only">Contact form</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="full-name" className="block mb-1 text-gray-600">
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="full-name"
              className="w-full px-4 py-2 text-base bg-white border rounded-md shadow-sm text-primary focus:outline-none focus:ring focus:border-blue"
              required
            />
          </div>
          <div>
            <label htmlFor="email-address" className="block mb-1 text-gray-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email-address"
              className="w-full px-4 py-2 text-base bg-white border rounded-md shadow-sm text-primary focus:outline-none focus:ring focus:border-blue"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-1 text-gray-600">
              Message
            </label>
            <div className={styles.grow} data-replicated-value={message}>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                className="w-full px-4 py-2 text-base bg-white border rounded-md shadow-sm text-primary focus:outline-none focus:ring focus:border-blue"
                rows={3}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div>
              <button
                type="submit"
                className={clsx(
                  'px-4 py-2 text-white transition-colors rounded-md shadow-sm bg-blue hover:bg-black focus:outline-none focus:ring focus:border-blue',
                  [
                    {
                      'opacity-50 pointer-events-none': status === 'SUBMITTING',
                    },
                  ],
                )}
              >
                {status === 'SUBMITTING' ? 'Sending' : 'Send message'}
              </button>
              {status === 'SUCCESS' && (
                <span className="ml-4 text-gray-600">
                  Success, thanks for the message.
                </span>
              )}
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

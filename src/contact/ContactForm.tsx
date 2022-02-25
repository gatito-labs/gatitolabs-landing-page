import { useState } from 'react';

const ContactForm = function ContactForm() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (event) => {
    event.preventDefault();
    setMessage('');
    setIsLoading(true);
    const res = await fetch('https://api.staticforms.xyz/submit', {
      body: JSON.stringify({
        accessKey: event.target.accessKey.value,
        email: event.target.email.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    await res.json();
    setIsLoading(false);
    setMessage('Recibimos tu correo. Pronto te contactaremos.');
    // result.user => 'Ada Lovelace'
  };

  return (
    <div
      className="w-full flex flex-col bg-blue-300 justify-center items-center"
      id="contact"
    >
      <div className="self-center text-center w-full xl:w-1/3 px-4 sm:px:0 mt-40">
        <h2 className="font-bold tracking-widest text-gray-900 text-4xl mb-4">
          Déjanos tu correo
        </h2>
        <div className="font-light text-gray-900 text-xl">Te contactaremos</div>
        <form className="w-full max-w-lg my-20 mx-auto" onSubmit={registerUser}>
          <div className="flex items-center border-b border-blue-600 py-2">
            <input
              type="hidden"
              name="accessKey"
              value="658ead41-b1a7-4219-a124-e0716e99f580"
            />
            <input
              className="appearance-none  border text-gray-900 w-full focus:outline-none focus:bg-gray-400 focus:text-gray-800 focus:border-gray-400 mr-3 py-2 px-3"
              type="email"
              name="email"
              placeholder="juan.carlos@treintayunminutos.com"
              aria-label="Email Address"
              required
            />
            {isLoading ? (
              <p> Enviando...</p>
            ) : (
              <button
                className="flex-shrink-0 bg-pink-800 border-pink-800 hover:bg-gray-800 hover:text-gray-200 border text-gray-200 py-2 px-4"
                type="submit"
                name="subscribe"
              >
                Inscribirme
              </button>
            )}
          </div>
        </form>
        <h3 className="font-bold text-gray-900 text-2xl h-40">{message}</h3>
      </div>
    </div>
  );
};

export { ContactForm };

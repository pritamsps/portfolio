import Head from 'next/head';
import React, {useState} from 'react';
import Image from 'next/image';
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!'); // Placeholder for form submission logic
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };
  return (
    <div
      className="min-h-screen font-inter text-white"
      style={{
    background: `linear-gradient(
      180deg,
      black 0%,        /* Start black */
      black 85%,       /* Keep most of it black */      
      black 100%       /* Back to black after the glow */
    )`,
  }}
    >
      <Head>
        <title>Pritam | Frontend Developer</title>
        <meta name="description" content="Pritam's personal portfolio website." />
      </Head>

      <main className="p-4 md:p-8 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-xl font-bold bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Pritam Sanjay
          </div>
          <div className="hidden md:flex space-x-6 text-gray-200">
            <a href="#about" className="hover:text-pink-300">About Me</a>
            <a href="#services" className="hover:text-pink-300">Services</a>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:opacity-80 transition-opacity">
            GET IN TOUCH
          </button>
        </nav>

        <section className="container mx-auto text-center md:text-left mb-24">
          <p className="text-sm font-semibold text-orange-300 mb-2">👋 HEY, I AM PRITAM</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 leading-tight">
            A YOUNG CREATIVE <br /> DEVELOPER BASED IN <br /> CHENNAI
          </h1>
          <div className="flex space-x-4 justify-center md:justify-start mt-8">
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:opacity-80 transition-opacity">
              MY WORKS
            </button>
            <button className="border border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors">
              LET&#39;S TALK
            </button>
          </div>
        </section>

        <section className="container mx-auto flex flex-wrap justify-center md:justify-start items-center space-x-8 mt-20 opacity-50">
          <a href="https://www.linkedin.com/in/pritam-sanjay-s" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
<path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>
          </a>
          <a href="https://github.com/pritamsps" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
<linearGradient id="rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1" x1="4" x2="44" y1="23.508" y2="23.508" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4c4c4c"></stop><stop offset="1" stop-color="#343434"></stop></linearGradient><path fill="url(#rL2wppHyxHVbobwndsT6Ca_AZOZNnY73haj_gr1)" d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36	C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"></path><path d="M30.01,41.996L30,36.198c0-0.939-0.22-1.856-0.642-2.687c5.641-1.133,8.386-4.468,8.386-10.177	c0-2.255-0.665-4.246-1.976-5.92c0.1-0.317,0.174-0.645,0.22-0.981c0.188-1.369-0.023-2.264-0.193-2.984l-0.027-0.116	c-0.186-0.796-0.409-1.364-0.418-1.388l-0.111-0.282l-0.111-0.282l-0.302-0.032l-0.303-0.032c0,0-0.199-0.021-0.501-0.021	c-0.419,0-1.04,0.042-1.627,0.241l-0.196,0.066c-0.74,0.249-1.439,0.485-2.417,1.069c-0.286,0.171-0.599,0.366-0.934,0.584	C27.334,12.881,25.705,12.69,24,12.69c-1.722,0-3.365,0.192-4.889,0.571c-0.339-0.22-0.654-0.417-0.942-0.589	c-0.978-0.584-1.677-0.819-2.417-1.069l-0.196-0.066c-0.585-0.199-1.207-0.241-1.626-0.241c-0.302,0-0.501,0.021-0.501,0.021	l-0.302,0.032l-0.3,0.031l-0.112,0.281l-0.113,0.283c-0.01,0.026-0.233,0.594-0.419,1.391l-0.027,0.115	c-0.17,0.719-0.381,1.615-0.193,2.983c0.048,0.346,0.125,0.685,0.23,1.011c-1.285,1.666-1.936,3.646-1.936,5.89	c0,5.695,2.748,9.028,8.397,10.17c-0.194,0.388-0.345,0.798-0.452,1.224c-0.197,0.067-0.378,0.112-0.538,0.137	c-0.238,0.036-0.487,0.054-0.739,0.054c-0.686,0-1.225-0.134-1.435-0.259c-0.313-0.186-0.872-0.727-1.414-1.518	c-0.463-0.675-1.185-1.558-1.992-1.927c-0.698-0.319-1.437-0.502-2.029-0.502c-0.138,0-0.265,0.01-0.376,0.028	c-0.517,0.082-0.949,0.366-1.184,0.78c-0.203,0.357-0.235,0.773-0.088,1.141c0.219,0.548,0.851,0.985,1.343,1.255	c0.242,0.133,0.765,0.619,1.07,1.109c0.229,0.368,0.335,0.63,0.482,0.992c0.087,0.215,0.183,0.449,0.313,0.732	c0.47,1.022,1.937,1.924,2.103,2.023c0.806,0.483,2.161,0.638,3.157,0.683l0.123,0.003c0,0,0.001,0,0.001,0	c0.24,0,0.57-0.023,1.004-0.071v2.613c0.002,0.529-0.537,0.649-1.25,0.638l0.547,0.184C19.395,43.572,21.645,44,24,44	c2.355,0,4.605-0.428,6.703-1.176l0.703-0.262C30.695,42.538,30.016,42.422,30.01,41.996z" opacity=".05"></path><path d="M30.781,42.797c-0.406,0.047-1.281-0.109-1.281-0.795v-5.804c0-1.094-0.328-2.151-0.936-3.052	c5.915-0.957,8.679-4.093,8.679-9.812c0-2.237-0.686-4.194-2.039-5.822c0.137-0.365,0.233-0.75,0.288-1.147	c0.175-1.276-0.016-2.086-0.184-2.801l-0.027-0.116c-0.178-0.761-0.388-1.297-0.397-1.319l-0.111-0.282l-0.303-0.032	c0,0-0.178-0.019-0.449-0.019c-0.381,0-0.944,0.037-1.466,0.215l-0.196,0.066c-0.714,0.241-1.389,0.468-2.321,1.024	c-0.332,0.198-0.702,0.431-1.101,0.694C27.404,13.394,25.745,13.19,24,13.19c-1.762,0-3.435,0.205-4.979,0.61	c-0.403-0.265-0.775-0.499-1.109-0.699c-0.932-0.556-1.607-0.784-2.321-1.024l-0.196-0.066c-0.521-0.177-1.085-0.215-1.466-0.215	c-0.271,0-0.449,0.019-0.449,0.019l-0.302,0.032l-0.113,0.283c-0.009,0.022-0.219,0.558-0.397,1.319l-0.027,0.116	c-0.169,0.715-0.36,1.524-0.184,2.8c0.056,0.407,0.156,0.801,0.298,1.174c-1.327,1.62-1.999,3.567-1.999,5.795	c0,5.703,2.766,8.838,8.686,9.806c-0.395,0.59-0.671,1.255-0.813,1.964c-0.33,0.13-0.629,0.216-0.891,0.256	c-0.263,0.04-0.537,0.06-0.814,0.06c-0.69,0-1.353-0.129-1.69-0.329c-0.44-0.261-1.057-0.914-1.572-1.665	c-0.35-0.51-1.047-1.417-1.788-1.755c-0.635-0.29-1.298-0.457-1.821-0.457c-0.11,0-0.21,0.008-0.298,0.022	c-0.366,0.058-0.668,0.252-0.828,0.534c-0.128,0.224-0.149,0.483-0.059,0.708c0.179,0.448,0.842,0.85,1.119,1.002	c0.335,0.184,0.919,0.744,1.254,1.284c0.251,0.404,0.37,0.697,0.521,1.067c0.085,0.209,0.178,0.437,0.304,0.712	c0.331,0.719,1.353,1.472,1.905,1.803c0.754,0.452,2.154,0.578,2.922,0.612l0.111,0.002c0.299,0,0.8-0.045,1.495-0.135v3.177	c0,0.779-0.991,0.81-1.234,0.81c-0.031,0,0.503,0.184,0.503,0.184C19.731,43.64,21.822,44,24,44c2.178,0,4.269-0.36,6.231-1.003	C30.231,42.997,30.812,42.793,30.781,42.797z" opacity=".07"></path><path fill="#fff" d="M36.744,23.334c0-2.31-0.782-4.226-2.117-5.728c0.145-0.325,0.296-0.761,0.371-1.309	c0.172-1.25-0.031-2-0.203-2.734s-0.375-1.25-0.375-1.25s-0.922-0.094-1.703,0.172s-1.453,0.469-2.422,1.047	c-0.453,0.27-0.909,0.566-1.27,0.806C27.482,13.91,25.785,13.69,24,13.69c-1.801,0-3.513,0.221-5.067,0.652	c-0.362-0.241-0.821-0.539-1.277-0.811c-0.969-0.578-1.641-0.781-2.422-1.047s-1.703-0.172-1.703-0.172s-0.203,0.516-0.375,1.25	s-0.375,1.484-0.203,2.734c0.077,0.562,0.233,1.006,0.382,1.333c-1.31,1.493-2.078,3.397-2.078,5.704	c0,5.983,3.232,8.714,9.121,9.435c-0.687,0.726-1.148,1.656-1.303,2.691c-0.387,0.17-0.833,0.33-1.262,0.394	c-1.104,0.167-2.271,0-2.833-0.333s-1.229-1.083-1.729-1.813c-0.422-0.616-1.031-1.331-1.583-1.583	c-0.729-0.333-1.438-0.458-1.833-0.396c-0.396,0.063-0.583,0.354-0.5,0.563c0.083,0.208,0.479,0.521,0.896,0.75	c0.417,0.229,1.063,0.854,1.438,1.458c0.418,0.674,0.5,1.063,0.854,1.833c0.249,0.542,1.101,1.219,1.708,1.583	c0.521,0.313,1.562,0.491,2.688,0.542c0.389,0.018,1.308-0.096,2.083-0.206v3.75c0,0.639-0.585,1.125-1.191,1.013	C19.756,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.585,43.127,29,42.641,29,42.002v-5.804	c0-1.329-0.527-2.53-1.373-3.425C33.473,32.071,36.744,29.405,36.744,23.334z M11.239,32.727c-0.154-0.079-0.237-0.225-0.185-0.328	c0.052-0.103,0.22-0.122,0.374-0.043c0.154,0.079,0.237,0.225,0.185,0.328S11.393,32.806,11.239,32.727z M12.451,33.482	c-0.081,0.088-0.255,0.06-0.389-0.062s-0.177-0.293-0.096-0.381c0.081-0.088,0.255-0.06,0.389,0.062S12.532,33.394,12.451,33.482z M13.205,34.732c-0.102,0.072-0.275,0.005-0.386-0.15s-0.118-0.34-0.016-0.412s0.275-0.005,0.386,0.15	C13.299,34.475,13.307,34.66,13.205,34.732z M14.288,35.673c-0.069,0.112-0.265,0.117-0.437,0.012s-0.256-0.281-0.187-0.393	c0.069-0.112,0.265-0.117,0.437-0.012S14.357,35.561,14.288,35.673z M15.312,36.594c-0.213-0.026-0.371-0.159-0.353-0.297	c0.017-0.138,0.204-0.228,0.416-0.202c0.213,0.026,0.371,0.159,0.353,0.297C15.711,36.529,15.525,36.62,15.312,36.594z M16.963,36.833c-0.227-0.013-0.404-0.143-0.395-0.289c0.009-0.146,0.2-0.255,0.427-0.242c0.227,0.013,0.404,0.143,0.395,0.289	C17.381,36.738,17.19,36.846,16.963,36.833z M18.521,36.677c-0.242,0-0.438-0.126-0.438-0.281s0.196-0.281,0.438-0.281	c0.242,0,0.438,0.126,0.438,0.281S18.762,36.677,18.521,36.677z"></path>
</svg>
          </a>
          
          <a href="#" className="hover:opacity-100 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gmail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </section>
      </main>

      <section id="about" className="py-16 relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center p-4">
          <div className="flex-1 mb-8 md:mb-0 md:mr-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-2xl opacity-50"></div>
            <div className="relative z-10 w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-pink-300">
              <Image src="/download.jpg" alt="Pritam's profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 md:w-1/2">
            <p className="text-sm font-semibold text-pink-300 mb-2">ABOUT</p>
            <h2 className="text-4xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-pink-400">
              ENGINEERING THE NEXT <br /> GENERATION <br /> OF TECH
            </h2>
            <p className="text-gray-200 mb-6 max-w-lg">
              With a solid foundation in Computer Science and a passion for full-stack development, my journey began with building responsive web interfaces...
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:opacity-80 transition-opacity">
              SCHEDULE A CALL
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-widest mb-3 text-pink-300">
            SERVICES
          </p>
          <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-orange-300 via-pink-400 to-purple-400 text-transparent bg-clip-text">
            HOW CAN I HELP
          </h2>

          <div className="flex flex-col md:flex-row items-center mb-20 md:space-x-12 group">
            <div className="flex-1 mb-8 md:mb-0 transform transition duration-500 group-hover:scale-105">
              <Image
                src="/Pin on templates.jpg"
                alt="Full Stack Dev"
                
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10 hover:shadow-pink-500/40 transition-all duration-500"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-orange-300 group-hover:text-pink-400 transition-colors">
                Full Stack Development
              </h3>
              <p className="text-gray-200 mb-5 leading-relaxed">
                Building robust, end-to-end web applications with clean, responsive user interfaces and scalable, secure APIs. I&#39;m proficient in the MERN stack (React, Node.js, Express, MongoDB) to create full-featured applications.

              </p>
              
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-12 group">
            <div className="flex-1 mb-8 md:mb-0 md:order-2 transform transition duration-500 group-hover:scale-105">
              <Image
                src="/AI Developer Vector Illustration.jpg"
                alt="AI/ML Development"
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10 hover:shadow-orange-400/40 transition-all duration-500"
              />
            </div>
            <div className="flex-1 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-pink-300 group-hover:text-orange-300 transition-colors">
                AI/ML Application Development
              </h3>
              <p className="text-gray-200 mb-5 leading-relaxed">
Applying intelligent models to solve real-world problems. My work involves developing efficient data pipelines and building complete AI-powered products using YOLOv8, TensorFlow, and Python.              </p>
              
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto p-4 flex flex-col md:flex-row md:space-x-12">
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">CONTACT</h2>
            <p className="text-gray-600 mb-6 max-w-sm">
              Ready to elevate your visual presence? I&#39;m here to bring your creative visions to life. Feel free to reach out.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-600">Chennai, India</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-600">+91 6363636363</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-600">pritamsanjay029@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-500 py-4 text-center text-sm">
        <div className="container mx-auto p-4">
          <p>&copy; {new Date().getFullYear()} Pritam. All Rights Reserved.</p>
        </div>
      </footer>
      
    </div>
    
  );
}



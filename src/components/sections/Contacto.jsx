import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contacto() {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Noe Vázquez",
          from_email: form.email,
          to_email: "famvazpom@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will contact you as soon as possible..");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Somethin went wrong... Please try again later");
        }
      );
  };
  return (

    <div id="contact" className="pattern" >
      <div className='mb-5'>
        <h1 className="text-center text-4xl separator-line">
        Lets get in touch!
        </h1>
      </div>
      <div className='flex flex-col sm:flex-row p-8 '>
        <div className="sm:px-40 w-full  ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col'
          >
            <label className='flex flex-col p-2'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className='bg-tertiary py-4 px-6 placeholder:text-third text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col p-2'>
              <span className='text-white font-medium mb-4'>Mail</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Mail"
                className='bg-tertiary py-4 px-6 placeholder:text-third text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col p-2'>
              <span className='text-white font-medium mb-4'>Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Something you want to tell me?'
                className='bg-tertiary py-4 px-6 placeholder:text-third text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className={`bg-complementary text-2xl w-fit p-2 mt-2 rounded-md shadow-md hover:shadow-2xl cursor-pointer `}
              disabled={loading ? true : false}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto

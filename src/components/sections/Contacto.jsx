import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "../../context/LanguageContext";


function Contacto() {
  const { t } = useContext(LanguageContext);

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
          alert(t('contact.success'));

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert(t('contact.error'));
        }
      );
  };
  return (

    <section id="contact" className="section-shell pattern" >
      <div className='mb-8'>
        <p className='section-kicker'>{t('contact.kicker')}</p>
        <h1 className="section-title">
          {t('contact.title')}
        </h1>
      </div>
      <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
        <div className='glass-card p-8'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyber'>{t('contact.available')}</p>
          <h2 className='mt-4 text-3xl font-black'>{t('contact.mission')}</h2>
          <p className='mt-5 leading-8 text-muted'>
            {t('contact.description')}
          </p>
          <div className='mt-8 rounded-2xl border border-secondary/30 bg-secondary/10 p-5'>
            <p className='text-sm font-bold uppercase tracking-[0.25em] text-secondary'>Email</p>
            <p className='mt-2 text-lg font-bold'>famvazpom@gmail.com</p>
          </div>
        </div>
        <div className="glass-card w-full p-6 sm:p-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col'
          >
            <label className='flex flex-col p-2'>
              <span className='mb-3 font-bold text-neutral'>{t('contact.name')}</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                className='rounded-2xl border border-white/10 bg-primary/70 px-6 py-4 font-medium text-white outline-none transition-all duration-300 placeholder:text-muted focus:border-cyber focus:shadow-glow'
              />
            </label>
            <label className='flex flex-col p-2'>
              <span className='mb-3 font-bold text-neutral'>{t('contact.mail')}</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t('contact.mail')}
                className='rounded-2xl border border-white/10 bg-primary/70 px-6 py-4 font-medium text-white outline-none transition-all duration-300 placeholder:text-muted focus:border-cyber focus:shadow-glow'
              />
            </label>
            <label className='flex flex-col p-2'>
              <span className='mb-3 font-bold text-neutral'>{t('contact.message')}</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                className='rounded-2xl border border-white/10 bg-primary/70 px-6 py-4 font-medium text-white outline-none transition-all duration-300 placeholder:text-muted focus:border-cyber focus:shadow-glow'
              />
            </label>

            <button
              type='submit'
              className={`danger-button mt-4 w-fit disabled:cursor-not-allowed disabled:opacity-60`}
              disabled={loading ? true : false}
            >
              {loading ? t('contact.sending') : t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto

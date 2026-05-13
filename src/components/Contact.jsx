import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeSimple, Phone, MapPin,
  PaperPlaneTilt, CheckCircle, ChatCircleDots, ArrowUpRight, Palette, LinkedinLogo,
} from '@phosphor-icons/react';
import { useReveal } from '../hooks/useReveal.js';
import { TextScramble } from './ui/text-scramble.tsx';

const PHONE = '+33 7 66 80 79 25';
const PHONE_RAW = '+33766807925';
const EMAIL = 'onanakono0707@yahoo.com';
const ARTSTATION = 'https://www.artstation.com/jeankono';
const LINKEDIN = 'https://www.linkedin.com/in/jean-marie-onana-kono-8033b3194';
const ADDRESS = '78 rue Parmentier, 69190';

const budgets = ['< 2k €', '2k – 5k €', '5k – 10k €', '10k – 25k €', '25k+ €'];
const projectTypes = [
  'Animation 3D',
  'Storyboard',
  'Modélisation',
  'Motion design',
  'VFX / compositing',
  'Direction artistique',
  'Autre',
];

export default function Contact() {
  const [ref, inView] = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', project: 'Animation 3D', budget: '5k – 10k €', message: '',
  });

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Projet ${form.project} — ${form.name}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nProjet: ${form.project}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="section-eyebrow">Contact</span>
            <h2 className="display mt-6 text-5xl text-white md:text-7xl">
              <TextScramble text="Travaillons" />
              <br />
              <TextScramble text="ensemble." className="display-strong text-cyan-300" />
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/60 lg:col-span-5 max-w-[55ch]">
            Décrivez-moi votre projet : animation, storyboard, modélisation… Je reviens
            vers vous rapidement avec une première réflexion.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Nom" name="name" value={form.name} onChange={handle} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handle} required />
              <Select label="Type de projet" name="project" value={form.project} onChange={handle} options={projectTypes} />
              <Select label="Budget" name="budget" value={form.budget} onChange={handle} options={budgets} />
            </div>

            <div className="mt-6">
              <Field
                as="textarea"
                rows={6}
                label="Décrivez votre projet"
                name="message"
                value={form.message}
                onChange={handle}
                required
              />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary">
                <span className="pl-1">{sent ? 'Envoyé' : 'Envoyer le brief'}</span>
                <span className="btn-trail">
                  {sent ? <CheckCircle size={14} weight="fill" /> : <PaperPlaneTilt size={14} weight="light" />}
                </span>
              </button>
              <span className="text-xs text-white/40">Réponse rapide · Lyon, France.</span>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="lg:col-span-5"
          >
            <div className="bezel">
              <div className="bezel-core p-8">
                <div className="text-xs uppercase tracking-widest2 text-cyan-300">Contact direct</div>

                <ContactLine icon={EnvelopeSimple} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
                <ContactLine icon={Phone} label="Téléphone" value={PHONE} href={`tel:${PHONE_RAW}`} />
                <ContactLine icon={ChatCircleDots} label="WhatsApp" value="Discutons en direct" href={`https://wa.me/${PHONE_RAW.replace('+', '')}`} external />
                <ContactLine icon={MapPin} label="Localisation" value={ADDRESS} />

                <div className="mt-8 hairline" />

                <div className="mt-8 text-xs uppercase tracking-widest2 text-cyan-300">Réseaux pro</div>
                <div className="mt-4 flex gap-2">
                  <SocialIcon icon={Palette} href={ARTSTATION} label="ArtStation" />
                  <SocialIcon icon={LinkedinLogo} href={LINKEDIN} label="LinkedIn" />
                </div>
              </div>
            </div>

            <a
              href={ARTSTATION}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 flex items-center justify-between rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-transparent px-7 py-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-cyan-500 hover:from-cyan-500/20"
            >
              <div>
                <div className="text-[10px] uppercase tracking-widest2 text-cyan-300">Portfolio complet</div>
                <div className="mt-2 display text-2xl text-white md:text-3xl">Voir sur ArtStation</div>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
                <ArrowUpRight size={20} weight="light" className="text-cyan-400" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ as = 'input', label, name, value, onChange, type = 'text', required, rows }) {
  const Tag = as;
  return (
    <label className="group relative block">
      <span className="block text-[10px] uppercase tracking-widest2 text-white/40">{label}</span>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="mt-2 w-full resize-none border-b border-white/10 bg-transparent py-3 text-base text-white placeholder-white/30 outline-none transition-colors duration-500 focus:border-cyan-500"
      />
    </label>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-widest2 text-white/40">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 w-full appearance-none border-b border-white/10 bg-transparent py-3 text-base text-white outline-none transition-colors duration-500 focus:border-cyan-500"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-900">{o}</option>
        ))}
      </select>
    </label>
  );
}

function ContactLine({ icon: Icon, label, value, href, external }) {
  const Wrapper = href ? 'a' : 'div';
  const props = href ? { href, target: external ? '_blank' : undefined, rel: external ? 'noreferrer' : undefined } : {};
  return (
    <Wrapper
      {...props}
      className="group mt-5 flex items-center justify-between gap-4 border-b border-white/5 py-4 transition hover:border-cyan-500/40"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-cyan-500/50">
          <Icon size={16} weight="light" className="text-cyan-400" />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-widest2 text-white/40">{label}</div>
          <div className="text-sm text-white">{value}</div>
        </div>
      </div>
      {href && (
        <ArrowUpRight size={14} weight="light" className="text-white/30 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-400" />
      )}
    </Wrapper>
  );
}

function SocialIcon({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 transition hover:border-cyan-500 hover:bg-white/[0.05] hover:text-cyan-400"
    >
      <Icon size={16} weight="light" />
      <span className="text-[12px] uppercase tracking-widest2">{label}</span>
    </a>
  );
}

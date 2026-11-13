import React, { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Check, Copy, ExternalLink, Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { portfolioData } from "@/src/data/portfolio";
import { SectionReveal } from "@/src/components/SectionReveal";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const formContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const formFieldVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function ContactSection() {
  const { profile } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = "Please provide a valid email address.";
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = "Please enter a brief message (at least 10 characters).";
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    toast.success("Message validated and prepared", {
      description: `You can also send directly to ${profile.email} using your mail client.`,
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy automatically — please use the email link.");
    }
  };

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name.trim() || "Visitor"}`
  )}&body=${encodeURIComponent(
    `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Direct Contact Column */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                  07. Contact
                </p>
                <h2
                  id="contact-heading"
                  className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
                >
                  Let&apos;s build or collaborate on AI systems
                </h2>

                <div className="mt-4 inline-flex items-center rounded-md border border-indigo-500/35 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/40 dark:bg-indigo-500/12 dark:text-indigo-300">
                  {profile.availabilityBadge}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Reach out for AI/ML engineering internships, research collaborations, or technical discussions around RAG, computer vision, and full-stack ML tooling.
                </p>
              </div>

              <div className="mt-8 space-y-3 border-t border-zinc-200/80 pt-6 dark:border-[#202027]">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-[#23232A] dark:bg-[#111114]">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex min-w-0 items-center gap-3 text-sm font-medium text-zinc-900 hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    <span className="truncate font-mono text-xs sm:text-sm">
                      {profile.email}
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-[#272730] dark:text-zinc-400 dark:hover:bg-[#1A1A22] dark:hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500/50 dark:border-[#23232A] dark:bg-[#111114] dark:text-zinc-200 dark:hover:border-indigo-500/50"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="h-4 w-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" />
                      <span>GitHub</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                  </a>

                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-500/50 dark:border-[#23232A] dark:bg-[#111114] dark:text-zinc-200 dark:hover:border-indigo-500/50"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin className="h-4 w-4 text-zinc-500 dark:text-zinc-400" aria-hidden="true" />
                      <span>LinkedIn</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Client-Side Validated Form */}
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 lg:col-span-7 dark:border-[#23232A] dark:bg-[#111114]">
              {submitted ? (
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex h-full flex-col justify-center space-y-4 py-6"
                >
                  <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                    Message Ready
                  </p>
                  <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                    Thanks, {name.trim()}. Your message has been validated.
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Because this portfolio is hosted as a static client site, click below to launch your email client pre-filled, or write directly to{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
                    >
                      {profile.email}
                    </a>
                    .
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button asChild>
                      <a href={mailtoHref}>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Open Email Client</span>
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setErrors({});
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  noValidate
                  variants={shouldReduceMotion ? undefined : formContainerVariants}
                  initial={shouldReduceMotion ? false : "hidden"}
                  whileInView={shouldReduceMotion ? undefined : "visible"}
                  viewport={{ once: true, amount: 0.25 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <motion.div variants={shouldReduceMotion ? undefined : formFieldVariants}>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Name
                      </label>
                      <Input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                          {errors.name}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={shouldReduceMotion ? undefined : formFieldVariants}>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@domain.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          role="alert"
                          className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                        >
                          {errors.email}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div variants={shouldReduceMotion ? undefined : formFieldVariants}>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-medium text-zinc-700 dark:text-zinc-300"
                    >
                      Message
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Share details about an internship opportunity, project, or technical inquiry..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors((prev) => ({ ...prev, message: undefined }));
                        }
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600 dark:text-red-400"
                      >
                        {errors.message}
                      </p>
                    )}
                  </motion.div>

                  <motion.div
                    variants={shouldReduceMotion ? undefined : formFieldVariants}
                    className="flex flex-wrap items-center justify-between gap-4 pt-1"
                  >
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      Client-side validated · No tracking
                    </p>
                    <Button type="submit">
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Prepare Message</span>
                    </Button>
                  </motion.div>
                </motion.form>
              )}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  company,
  contactContent,
  contactDetails,
  contactFormFields,
  inquiryMessageLabels,
  inquiryProductOptions,
} from "@/data/main";

import { reveal } from "./animations";
import { ContactField } from "./ContactField";
import { ContactLink } from "./ContactLink";
import { SectionLabel } from "./SectionLabel";

type InquiryFormState = {
  name: string;
  business: string;
  phone: string;
  email: string;
  product: string;
  subject: string;
  message: string;
};

type ContactIcon = (typeof contactDetails)[number]["icon"];

function contactIcon(icon: ContactIcon) {
  if (icon === "mail") {
    return <Mail className="size-4" />;
  }

  if (icon === "map") {
    return <MapPin className="size-4" />;
  }

  return <Phone className="size-4" />;
}

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const [formState, setFormState] = useState<InquiryFormState>({
    name: "",
    business: "",
    phone: "",
    email: "",
    product: inquiryProductOptions[0],
    subject: "",
    message: "",
  });

  function updateField(field: keyof InquiryFormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      contactContent.introMessage,
      `${inquiryMessageLabels.name}: ${formState.name || "-"}`,
      `${inquiryMessageLabels.business}: ${formState.business || "-"}`,
      `${inquiryMessageLabels.phone}: ${formState.phone || "-"}`,
      `${inquiryMessageLabels.email}: ${formState.email || "-"}`,
      `${inquiryMessageLabels.product}: ${formState.product}`,
      `${inquiryMessageLabels.subject}: ${formState.subject || "-"}`,
      `${inquiryMessageLabels.message}: ${formState.message || "-"}`,
    ].join("\n");

    window.open(`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <section id="contact" className="bg-[#f8f8f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
          <SectionLabel>{contactContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            {contactContent.title}
          </h2>
          <p className="mt-5 text-sm leading-6 text-neutral-600 sm:text-base">
            {contactContent.body}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.aside
            {...(shouldReduceMotion ? {} : reveal())}
            className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-neutral-200"
          >
            <SectionLabel>{contactContent.detailsEyebrow}</SectionLabel>
            <Separator className="my-8" />
            <div className="space-y-5 text-sm">
              {contactDetails.map((detail) => (
                <ContactLink
                  key={detail.href}
                  icon={contactIcon(detail.icon)}
                  label={detail.label}
                  value={detail.value}
                  href={detail.href}
                />
              ))}
            </div>
          </motion.aside>

          <motion.form
            {...(shouldReduceMotion ? {} : reveal(1))}
            onSubmit={handleSubmit}
            className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-neutral-200 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <ContactField label={contactFormFields.name.label}>
                <Input
                  required
                  value={formState.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder={contactFormFields.name.placeholder}
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </ContactField>

              <ContactField label={contactFormFields.email.label}>
                <Input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder={contactFormFields.email.placeholder}
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </ContactField>

              <ContactField label={contactFormFields.phone.label}>
                <Input
                  value={formState.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder={contactFormFields.phone.placeholder}
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </ContactField>

              <ContactField label={contactFormFields.business.label}>
                <Input
                  value={formState.business}
                  onChange={(event) => updateField("business", event.target.value)}
                  placeholder={contactFormFields.business.placeholder}
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </ContactField>

              <ContactField label={contactFormFields.product.label}>
                <select
                  value={formState.product}
                  onChange={(event) => updateField("product", event.target.value)}
                  className="h-11 w-full border-x-0 border-t-0 border-input bg-transparent text-sm outline-none"
                >
                  {inquiryProductOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </ContactField>

              <ContactField label={contactFormFields.subject.label}>
                <Input
                  value={formState.subject}
                  onChange={(event) => updateField("subject", event.target.value)}
                  placeholder={contactFormFields.subject.placeholder}
                  className="h-11 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </ContactField>

              <ContactField label={contactFormFields.message.label} className="sm:col-span-2">
                <Textarea
                  value={formState.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder={contactFormFields.message.placeholder}
                  className="min-h-28 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:ring-0"
                />
              </ContactField>
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-8 h-11 rounded-lg bg-neutral-950 px-5 text-white hover:bg-neutral-800"
            >
              {contactContent.submitLabel} <ArrowRight className="size-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

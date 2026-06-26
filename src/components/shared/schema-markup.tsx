import React from 'react';
import { siteConfig } from '@/config/seo';

export function SchemaMarkup() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contacts.phone,
    email: siteConfig.contacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contacts.address.streetAddress,
      addressLocality: siteConfig.contacts.address.addressLocality,
      addressRegion: siteConfig.contacts.address.addressRegion,
      postalCode: siteConfig.contacts.address.postalCode,
      addressCountry: siteConfig.contacts.address.addressCountry,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default SchemaMarkup;

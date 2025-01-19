import type { Metadata } from "next";

import Cta from "@/components/cta";
import PageHeader from "@/components/page-header";
import Accordion from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about Strapex's payment infrastructure, integration process, and platform capabilities.",
};

export default function Faq() {
  const faqs = [
    {
      title: "When will Strapex be available?",
      text: "We're currently in private beta, building and testing our infrastructure. Join our waitlist to be among the first to access our platform when we launch in Q2 2024.",
      active: false,
    },
    {
      title: "What makes Strapex different from other payment solutions?",
      text: "Strapex leverages Starknet's Layer 2 technology to provide faster, more cost-effective payments while maintaining Ethereum's security. Our developer-first approach means simple integration, comprehensive documentation, and powerful APIs.",
      active: false,
    },
    {
      title: "How does Strapex ensure transaction security?",
      text: "We utilize Starknet's zero-knowledge proof technology for transaction validation, combining the security of Ethereum with enhanced privacy features. Our infrastructure is regularly audited and follows industry best practices.",
      active: false,
    },
    {
      title: "What integration options are available?",
      text: "We offer multiple integration methods: our JavaScript SDK for web applications, REST APIs for backend integration, and native mobile SDKs (coming soon). Detailed documentation and examples are provided for each option.",
      active: false,
    },
    {
      title: "What types of payments can I process?",
      text: "Initially, we'll support major cryptocurrencies and stablecoins on Starknet, with plans to expand to more payment methods. Our platform handles both one-time payments and recurring subscriptions.",
      active: false,
    },
    {
      title: "How does pricing work?",
      text: "We're finalizing our pricing structure, but it will be transparent and competitive, with no hidden fees. Early adopters from our waitlist will receive preferential rates.",
      active: false,
    },
    {
      title: "What kind of support do you provide?",
      text: "We offer comprehensive technical support through our documentation, Discord community, and dedicated support team. Enterprise customers will have access to priority support channels.",
      active: false,
    },
    {
      title: "How can I start integrating Strapex?",
      text: "Currently, you can join our waitlist for early access. Once approved, you'll receive API keys and detailed integration guides to start building with Strapex.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pb-12 pt-32 md:pb-20 md:pt-44">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Frequently Asked Questions"
              description="Find answers to common questions about Strapex's payment infrastructure, integration process, and platform capabilities."
            >
              Quick Answers
            </PageHeader>

            <div className="mx-auto max-w-3xl">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}

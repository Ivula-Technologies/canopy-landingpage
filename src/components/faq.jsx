import {useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
   const faqs = [
    {
        question:"What is Ivula Canopy and how does it work?",
        answer: <p> Ivula Canopy is a cloud-based SaaS platform that helps nonprofits, churches, volunteer groups, youth organizations, and community associations replace spreadsheets with one dashboard.
            It provides tools for managing members, volunteers, programs, teams, and engagement insights. Users can import or register members, organize events, create teams, and track engagement through a user-friendly interface.</p>
    },
    {
        question:"Can I track member participation and engagement?",
        answer: "Yes, Ivula Canopy provides robust analytics and reporting features that allow you to track member participation and engagement levels. You can monitor activity, contributions, and overall involvement within the platform.",
    },
    {
        question:"How does donation management work?",
        answer: "Ivula Canopy includes a donation management system that enables organizations to track their donors and donation history, and print donation receipts.",
    },
    {
        question:"Is the platform suitable for both small and large organizations?",
        answer: "Yes, Ivula Canopy is designed to be flexible and scalable, making it suitable for organizations of all sizes. It works well for organizations from a handful of members to several hundred people and volunteers."
    },
    {
        question:"Do I require technical expertise to use the system?",
        answer:" No, Ivula Canopy is designed to be user-friendly and intuitive, requiring no technical expertise. The platform provides a simple and straightforward interface that allows users to easily navigate and utilize its features without the need for advanced technical skills."
    },
    {
        question:"Is our data secure?",
        answer:"Yes, the platform prioritizes data security and implements industry-standard measures to protect user information. Data is encrypted in transit, every account signs in securely, and each organization's records are kept separate so only your team can see them."
    },
    {
        question:" Can our organization start with a free plan and upgrade later?",
        answer:"Yes. Every organization starts with a 14-day free trial with no credit card required. After the trial, Canopy is $25 per month per organization."
    }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
    return(
        <section id="faq" className="py-20 bg-white">
            <div className="container max-w-4xl mx-auto px-10">
                <Reveal>
                <h2 className="text-4xl font-bold text-center">
                    Questions? We've Got Answers
                </h2>
                </Reveal>

                {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4"
          >
            <button
              type="button"
              aria-expanded={openIndex === index}
              className="flex w-full items-center gap-3 text-left"
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
            >
                <span
  className={`inline-block transition-transform duration-300 ${
    openIndex === index ? "rotate-90" : ""
  }`}
>
  ▸
</span>
              <span className="font-medium">
                {faq.question}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
                
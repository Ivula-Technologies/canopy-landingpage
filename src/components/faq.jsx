import {useState} from "react";
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
        answer: "Ivula Canopy includes a donation management system that enables organizations to track their donors and the donations history.",
    },
    {
        question:"Is the platform suitable for both small and large organizations?",
        answer: "Yes, Ivula Canopy is designed to be flexible and scalable, making it suitable for organizations of all sizes. Whether you're a small team or a large enterprise, Ivula Canopy can adapt to your needs and help you manage your work more effectively."
    },
    {
        question:"Do I require technical expertise to use the system?",
        answer:" No, Ivula Canopy is designed to be user-friendly and intuitive, requiring no technical expertise. The platform provides a simple and straightforward interface that allows users to easily navigate and utilize its features without the need for advanced technical skills."
    },
    {
        question:"Is our data secure?",
        answer:"Yes, the platform prioritizes data security and implements industry-standard measures to protect user information. The platform employs encryption, secure authentication, and regular security audits to ensure that your data remains safe and confidential."
    },
    {
        question:" Can our organization start with a free plan and upgrade later?",
        answer:"Yes, Ivula Canopy offers a 30 days trial period that allows organizations to get started without any upfront costs.Other plans include: Freemium Up to 15 members- free forever, Starter $29/month or $290/year - up to 50 members, Growth	$79/month or $790/year - up to 200 members,Community $149/month or $1,490/year - up to 500 members.",
    }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
    return(
        <section id="faq" className="py-20 bg-sky-200">
            <div className="container max-w-4xl mx-auto px-10">
                <h2 className="text-4xl font-bold text-center">
                    Questions? We've Got Answers
                </h2>

                {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4"
          >
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
            >
                <span
  className={`transition-transform duration-300 ${
    openIndex === index ? "rotate-90" : ""
  }`}
>
  ▸
</span>
              <span className="font-medium">
                {faq.question}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-4 text-gray-700">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
                
import scaleEngine from "../../public/enterpriseGenAI.webp";
import rlhf from "../../public/rlhf.webp";
import foundation from "../../public/foundation-models.webp";
import dataEngine from "../../public/data-engine.webp";

export const customerImages = [
  "/customers/cia.svg",
  "/customers/airforce.svg",
  "/customers/amazon.png",
  "/customers/toyota.svg",
  "/customers/salesforce.png",
];

export const reviews: {
  author: string;
  content: string;
  org: string;
  designation: string;
}[] = [
  {
    author: "Michael Burns",
    org: "Central Intelligence Agency",
    designation: "Former Deputy Director of Analysis",
    content:
      "The U.S. intelligence community has spent an enormous amount of resources on collection but the sheer volume that returns is a huge problem. Scale's LLMs are the tool that will allow the IC to finally and fully exploit all of that intelligence that has been collected.",
  },
  {
    content:
      "ChatGPT is a great research capability, but Scale AI's production-ready LLM not only learned from decades of intelligence collection but also explains how and when it received its mission critical intelligence. That's an operational imperative to earn commander trust.",
    author: "Morgan Bishop",
    designation: "Computer Scientist",
    org: "Air Force Research Laboratory",
  },
  {
    content:
      "Scale has a great focus on helping companies improve the quality of their data and the usability of their data. Scale has seen so many different applications of AI across so many different kinds of companies. I think it's well positioned to help a company assess where it is, what's the state of its data, what's the state of its systems, and what kind of capability and preparedness to use sophisticated algorithms.",
    author: "Jeff Wilke",
    designation: "Retired CEO, Amazon Worldwide Consumer",
    org: "Amazon Worldwide Consumer",
  },
  {
    content:
      "One of the things we love about Scale is the fact that we can fully label the world. We can label 2D bounding boxes, 3D bounding boxes, but also semantic segmentation, including in 3D, to understand as much as possible, including scenarios we don't foresee today.",
    author: "Adrien Gaidon",
    org: "Toyota Research Institute",
    designation: "Machine Learning Lead",
  },
  {
    content:
      "Thanks to companies like Scale, a lot of these SaaS tools are building intelligent capabilities into their products[...] thats a path for a lot of companies to get value from AI without becoming AI shops, which is a really formidable challenge",
    author: "Bret Taylor",
    org: "Salesforce",
    designation: "Retired President & COO",
  },
];
export const foundationData = [
  {
    heading: "Fine-Tuning and RLHF",
    content:
      "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
  },
  {
    heading: "Foundation Models",
    content:
      "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Anthropic, Google PaLM, Cohere, and more.",
  },
  {
    heading: "Enterprise Data",
    content:
      "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
  },
];

export const foundationImages: { [key: number]: any } = {
  10: scaleEngine,
  0: rlhf,
  1: foundation,
  2: dataEngine,
};

import { ResearchCard } from "@/components/research"

export default function ResearchPapers() {
  const papers = [
    {
      title: "Deep Learning Approaches for Real-time Object Detection in Resource-Constrained Environments",
      abstract:
        "This paper presents a novel approach to optimize deep learning models for real-time object detection on edge devices with limited computational resources. We propose a lightweight architecture that achieves 94% accuracy while reducing inference time by 40% compared to state-of-the-art models.",
      authors: ["Ayush Tibrewal", "Dr. Sarah Johnson", "Dr. Michael Chen"],
      conference: "IEEE Conference on Computer Vision and Pattern Recognition",
      year: "2024",
      doi: "10.1109/CVPR.2024.1234567",
      url: "https://ieeexplore.ieee.org/abstract/document/10673521/",
      tags: ["Computer Vision", "Deep Learning", "Edge Computing", "YOLOv8", "Model Optimization"],
    },
    {
      title: "Sentiment Analysis in Customer Feedback: A Comparative Study of BERT-based Models",
      abstract:
        "This research evaluates the performance of various BERT-based models for sentiment analysis in customer feedback across multiple domains. We fine-tuned these models on domain-specific datasets and achieved 92% accuracy, demonstrating the effectiveness of transfer learning for sentiment classification tasks.",
      authors: ["Dr. Robert Williams", "Ayush Tibrewal", "Dr. Lisa Zhang"],
      journal: "Journal of Natural Language Processing",
      year: "2023",
      doi: "10.1016/j.jnlp.2023.987654",
      url: "#",
      tags: ["NLP", "BERT", "Sentiment Analysis", "Transfer Learning", "Customer Feedback"],
    },
  ]

  return (
    <div id="research" className="w-full bg-black dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-lg md:text-3xl mb-3 text-white dark:text-white">Research Publications</h2>
          <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm max-w-sm">
            My contributions to academic research and scientific publications.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {papers.map((paper, index) => (
            <ResearchCard key={index} {...paper} />
          ))}
        </div>
      </div>
    </div>
  )
}

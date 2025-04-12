import { ResearchCard } from "@/components/research"

export default function ResearchPapers() {
  const papers = [
    {
      title: "The Effectiveness of Advance Deep Learning Architectures for Classification of Stress using Raw EEG Data",
      abstract:
        "Understanding and detecting stress in today’s fast-paced world remains challenging. Previous research has explored various physiological signals, including EEG (Electroencephalography), to quantify stress. However, accurately assessing stress poses a significant challenge, particularly in preprocessing and feature extraction of EEG signals. Hence, this paper employs advanced deep learning algorithms, including ResNet18-1D, DenseNet-1D, and VGG16-1D, on raw EEG signals for automated stress classification..",
      authors: ["Ayush Tibrewal", "Shikha", "Divyashikha Sethia"],
      conference: "Asia Pacific Conference on Innovation in Technology (APCIT)",
      year: "2024",
      doi: "10.1109/APCIT62007.2024.10673521",
      url: "https://ieeexplore.ieee.org/abstract/document/10673521",
      tags: ["Image Processing", "Raw EEG", "Deep Learning", "CNN"],
    },
    {
      title: "Enhancing Detection Accuracy of Brain Stroke Through Cropped CT Scans With CNN Architectures",
      abstract:
        "A stroke is a life-threatening condition caused by a sudden disruption in the brain's blood supply, potentially resulting in severe neurological damage or even death. Early and accurate identification of strokes is vital for prompt treatment and better health outcomes. This study utilizes advanced deep learning architectures to predict strokes and non-strokes from CT (Computed Tomography) images. Cropping techniques are employed to reduce noise and enhance image quality. Various deep learning algorithms, including EfficientNetB0, VGG16, MobileNet, and DenseNet, are explored, Notably,",
      authors: ["Ayush Tibrewal","Priya Pahwa", "Surbhi Bharti", "Ashwni Kumar"],
      conference: "8th International Conference on Parallel, Distributed and Grid Computing (PDGC)",
      year: "2024",
      doi: "NA",
      url: "https://drive.google.com/file/d/1lVNkMNW9L3eFiGZColKcxDMZ7VaPzgyD/view",
      tags: ["Deep Learning", "Stroke Classification", "Medical Imaging", "CT Scans", "Image Cropping"],
    },
  ]

  return (
    <div id="research" className="w-full bg-black dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-5xl text-white dark:text-white text-center mt-5 mb-5">Research Publications</h2>
          {/* <p className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm max-w-sm">
            My contributions to academic research and scientific publications.
          </p> */}
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

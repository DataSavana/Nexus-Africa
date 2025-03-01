// import React, { useState } from "react";

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//           About Us
//         </h2>
//         <p className="text-xl text-center mb-16 text-gray-700">
//           Nexus Africa is building the first large-scale African AI data
//           platform. We provide high-quality, ethically sourced datasets to make
//           AI more inclusive and representative of Africa's diversity.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
// import React from "react";
// import "./styles/About.css"; // Import the CSS file

// const About = () => {
//   return (
//     <div id="about" className="about-container">
//       <div className="about-content">
//         <h2 className="about-title">About Us</h2>
//         <p className="about-text">
//           Nexus Africa is pioneering the first large-scale African AI data
//           platform. We collect, process, and curate high-quality, ethically
//           sourced datasets tailored for AI companies, researchers, and
//           developers. Our datasets power
//           <strong> fine-tuning</strong> of language models,{" "}
//           <strong>speech recognition</strong>,<strong> computer vision</strong>,
//           and <strong>bias reduction</strong> in AI. By providing diverse
//           African data, we help create AI models that{" "}
//           <strong>
//             understand African languages, dialects, and cultural contexts
//           </strong>
//           , making AI more inclusive and globally representative.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./styles/About.css"; // Import the updated CSS file

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Nexus Africa is pioneering the first large-scale African AI data
          platform. We collect, process, and curate high-quality, ethically
          sourced datasets tailored for AI companies, researchers, and
          developers. Our datasets power
          <strong> fine-tuning</strong> of language models,{" "}
          <strong>speech recognition</strong>, <strong>computer vision</strong>,
          and <strong>bias reduction</strong> in AI. By providing diverse
          African data, we help create AI models that{" "}
          <strong>
            understand African languages, dialects, and cultural contexts
          </strong>
          , making AI more inclusive and globally representative.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import "./styles/DataPipeline.css";

const sources = [
  "Web Scraping",
  "User Input",
  "Sensor Data",
  "Public Datasets",
  "Enterprise Databases",
];
const processingSteps = [
  "Data Cleaning",
  "Normalization",
  "Feature Extraction",
  "Labeling & Annotation",
];
const storageSteps = ["Raw Data", "Processed Data", "Model Training Data"];
const accessMethods = [
  "API",
  "Downloadable Data",
  "Real-Time Streaming",
  "Fine-Tuning Datasets",
];

const DataPipeline = () => {
  return (
    <div className="pipeline-container">
      {/* Pipeline Title */}
      <motion.h1
        className="pipeline-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our AI Data Processing Pipeline
      </motion.h1>

      <div className="pipeline-flow">
        {/* Sources Section */}
        <div className="section sources" id="sources">
          <h2>Sources</h2>
          {sources.map((source, index) => (
            <motion.div
              key={index}
              className="source-item"
              id="source-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 + index * 0.1 }}
            >
              {source}
            </motion.div>
          ))}
        </div>

        {/* Arrow from Sources to Processing */}
        <div className="arrow" id="arrow-source-processing">
          <svg viewBox="0 0 100 10">
            <line className="arrow-line" x1="0" y1="5" x2="90" y2="5" />
            <polygon className="arrow-head" points="90,0 100,5 90,10" />
          </svg>
        </div>

        {/* Processing Section */}
        <div className="section processing">
          <h2>Processing</h2>
          <ul>
            {processingSteps.map((step, index) => (
              <motion.li
                key={index}
                className="processing-step"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                {step}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Arrow from Processing to Storage */}
        <div className="arrow" id="arrow-processing-storage">
          <svg viewBox="0 0 100 10">
            <line className="arrow-line" x1="0" y1="5" x2="90" y2="5" />
            <polygon className="arrow-head" points="90,0 100,5 90,10" />
          </svg>
        </div>

        {/* Storage Section */}
        <div className="section storage">
          <h2>Storage</h2>
          <ul>
            {storageSteps.map((data, index) => (
              <motion.li
                key={index}
                className="storage-step"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                {data}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Arrow from Storage to Access Methods */}
        <div className="arrow" id="arrow-storage-access">
          <svg viewBox="0 0 100 10">
            <line className="arrow-line" x1="0" y1="5" x2="90" y2="5" />
            <polygon className="arrow-head" points="90,0 100,5 90,10" />
          </svg>
        </div>

        {/* Data Access Section */}
        <div className="section access">
          <h2>Ways to Access Data</h2>
          <ul>
            {accessMethods.map((method, index) => (
              <motion.li
                key={index}
                className="access-method"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 + index * 0.1 }}
              >
                {method}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataPipeline;

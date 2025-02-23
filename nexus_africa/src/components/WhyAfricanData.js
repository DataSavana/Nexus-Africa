import React, { useState } from "react";
import "./styles/WhyAfricanData.css";

const WhyAfricanData = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const comparisons = [
    {
      title: "AI Struggles with African Accents",
      description:
        "Most speech recognition systems fail to understand African accents.",
      aiVideoId: "your_ai_video_id_1", // Replace with AI output video ID
      realVideoId: "your_real_video_id_1", // Replace with the real representation video ID
    },
    {
      title: "Better Translations for African Languages",
      description:
        "Google Translate and other AI tools often struggle with African languages.",
      aiVideoId: "your_ai_video_id_2",
      realVideoId: "your_real_video_id_2",
    },
    {
      title: "Reducing AI Bias in Image Recognition",
      description: "AI often misidentifies African faces and objects.",
      aiVideoId: "your_ai_video_id_3",
      realVideoId: "your_real_video_id_3",
    },
    {
      title: "Understanding African Contexts",
      description:
        "AI struggles to identify African foods, places, and traditions.",
      aiVideoId: "your_ai_video_id_4",
      realVideoId: "your_real_video_id_4",
    },
  ];

  return (
    <div className="african-data-section">
      <h2>Why African Data Matters</h2>
      <p>
        AI models trained on predominantly Western data fail to understand
        African languages, cultures, and socio-economic contexts. We provide
        ethically sourced datasets to bridge this gap.
      </p>
      <div className="african-data-grid">
        {comparisons.map((comparison, index) => (
          <div key={index} className="african-data-row">
            {/* AI Generated Video */}
            <div className="african-data-card">
              <h3>AI Output</h3>
              <p>{comparison.description}</p>
              <div
                className="video-container"
                onClick={() => setPlayingVideo(comparison.aiVideoId)}
              >
                {playingVideo === comparison.aiVideoId ? (
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${comparison.aiVideoId}?autoplay=1`}
                    title="AI Output"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${comparison.aiVideoId}/hqdefault.jpg`}
                    alt="AI Output Thumbnail"
                    className="video-thumbnail"
                  />
                )}
              </div>
            </div>

            {/* Real Representation Video */}
            <div className="african-data-card">
              <h3>True Representation</h3>
              <p>{comparison.description}</p>
              <div
                className="video-container"
                onClick={() => setPlayingVideo(comparison.realVideoId)}
              >
                {playingVideo === comparison.realVideoId ? (
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${comparison.realVideoId}?autoplay=1`}
                    title="True Representation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${comparison.realVideoId}/hqdefault.jpg`}
                    alt="True Representation Thumbnail"
                    className="video-thumbnail"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAfricanData;

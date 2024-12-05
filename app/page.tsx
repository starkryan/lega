"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";
import Head from "next/head";

const HomePage = () => {
  // WhatsApp phone number and message
  const whatsappNumber = "17788324598"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello! I'm interested in learning more about your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  useEffect(() => {
    // Automatically redirect to WhatsApp after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, [whatsappUrl]);

  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>Chat with Us on WhatsApp!</title>
        <meta
          name="description"
          content="Instantly connect with us on WhatsApp for quick assistance and exclusive offers."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={whatsappUrl} />
        <meta property="og:title" content="Chat with Us on WhatsApp!" />
        <meta
          property="og:description"
          content="Instantly connect with us on WhatsApp for quick assistance and exclusive offers."
        />
        <meta property="og:url" content={whatsappUrl} />
        <meta
          property="og:image"
          content="https://aadharseva.vercel.app/preview.png" // Replace with your image URL
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Speed Insights */}
      <SpeedInsights />

      {/* Content */}
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>Redirecting to WhatsApp...</h1>
        <p>
          If you are not redirected automatically, click the button below:
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full w-12 h-12 flex justify-center items-center shadow-lg hover:bg-green-600"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
        >
          💬
        </a>
      </main>
    </>
  );
};

export default HomePage;

"use client";
import { useEffect } from "react";
import Head from "next/head";

const HomePage = () => {
  // WhatsApp phone number and message
  const phoneNumber = "919876543210"; // Replace with your number (country code + number)
  const message = "Hello! I'm interested in learning more about your services."; // Customizable message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Redirect to WhatsApp automatically on page load
    window.location.href = whatsappUrl;
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
          content="https://yourdomain.com/preview.png" // Replace with your image URL
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Fallback Content */}
      <main style={{ textAlign: "center", padding: "20px" }}>
        <h1>Redirecting to WhatsApp...</h1>
        <p>
          If you are not redirected automatically,{" "}
          <a href={whatsappUrl}>click here to chat</a>.
        </p>
      </main>
    </>
  );
};

export default HomePage;

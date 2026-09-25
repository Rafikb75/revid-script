/**
 * AI Video Toolkit - Global Application Configuration
 * Contains application metadata, navigation routes, categories, and partnership attribution settings.
 */

var APP_CONFIG = {
  appName: "AI Video Toolkit",
  appTagline: "The Creator's Benchmark & Workflow Directory for AI Video Production",
  version: "2.4.0",
  baseUrl: "https://script.google.com/macros/s/AKfycbx_aivideotoolkit/exec",
  supportEmail: "editorial@aivideotoolkit.io",
  year: 2025,
  
  // Navigation Route Registry
  routes: {
    home: { id: "home", label: "Overview", template: "Home", title: "AI Video Toolkit — Benchmarks & Workflows" },
    tools: { id: "tools", label: "Directory & Benchmarks", template: "Tools", title: "AI Video Tools Directory & Benchmarks" },
    revid: { id: "revid", label: "Revid AI Deep Dive", template: "Revid", title: "Revid AI Review & Workflow Benchmark (2025)" },
    details: { id: "tool", label: "Tool Analysis", template: "ToolDetails", title: "Tool Specifications & Scorecard" }
  },

  // Primary Tool Taxonomy Categories
  categories: [
    { id: "all", label: "All Categories", icon: "video" },
    { id: "short-form", label: "Short-Form & Repurposing", icon: "zap", desc: "Automated TikTok, Reels, & Shorts generation from text, links, or podcasts" },
    { id: "generative", label: "Generative World & B-Roll", icon: "film", desc: "High-fidelity text-to-video, image-to-video, and camera simulation" },
    { id: "avatar", label: "AI Avatars & Presenters", icon: "user-check", desc: "Digital humans, photorealistic lip-sync, and automated multilingual presentations" },
    { id: "editorial", label: "Editorial & Speech Editing", icon: "scissors", desc: "Text-based transcription timeline editing, filler removal, and studio audio" }
  ],

  // Evaluation Benchmark Dimensions
  benchmarkCriteria: [
    { key: "speed", label: "Render & Pipeline Latency", weight: 0.20, max: 10 },
    { key: "quality", label: "Visual Fidelity & Realism", weight: 0.25, max: 10 },
    { key: "easeOfUse", label: "Creator Usability & UX", weight: 0.20, max: 10 },
    { key: "value", label: "Cost-per-Minute & ROI", weight: 0.15, max: 10 },
    { key: "automation", label: "Autonomous Workflow Power", weight: 0.20, max: 10 }
  ],

  // Partner / Affiliate Attribution Configuration
  partnerLinks: {
    "revid-ai": {
      url: "https://www.revid.ai/?via=creator-toolkit",
      badge: "Featured Viral Engine",
      promoCode: "TOOLKIT20",
      promoText: "20% off first 3 months"
    },
    "runway-gen3": {
      url: "https://runwayml.com/?ref=aivideotoolkit",
      badge: "VFX Pioneer",
      promoCode: null,
      promoText: "Standard Free 125 Credits"
    },
    "descript": {
      url: "https://www.descript.com/?ref=aivideotoolkit",
      badge: "Editorial Standard",
      promoCode: null,
      promoText: "Free 1 hr transcription"
    },
    "heygen": {
      url: "https://www.heygen.com/?via=creator-toolkit",
      badge: "Avatar Leader",
      promoCode: "HEYGENAI",
      promoText: "Free 1-credit trial"
    },
    "pika": {
      url: "https://pika.art/?ref=aivideotoolkit",
      badge: "Motion Stylist",
      promoCode: null,
      promoText: "Daily free generation credits"
    },
    "kling-ai": {
      url: "https://klingai.com/?ref=aivideotoolkit",
      badge: "Physics Realism",
      promoCode: null,
      promoText: "Daily login bonus"
    },
    "synthesia": {
      url: "https://www.synthesia.io/?ref=aivideotoolkit",
      badge: "Enterprise Training",
      promoCode: null,
      promoText: "Interactive demo"
    },
    "invideo-ai": {
      url: "https://invideo.io/?ref=aivideotoolkit",
      badge: "Script-to-Video",
      promoCode: null,
      promoText: "10 min free weekly"
    }
  },

  // Author / Editorial Board Metadata
  editorialBoard: {
    leadEditor: "Marcus Vance",
    leadEditorRole: "Principal Video Production Technologist",
    testedDate: "September 2025",
    testingRig: "Dual RTX 4090 Workstation + Cloud API Benchmark Suite",
    ethicsPolicyUrl: "#editorial-ethics"
  }
};

/**
 * Returns configuration object for client injection
 */
function getConfig() {
  return APP_CONFIG;
}

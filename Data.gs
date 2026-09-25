/**
 * AI Video Toolkit - Tools Database & Benchmark Scoring Matrix
 * Comprehensive editorial data, verified benchmarks, pricing, and workflow recipes.
 */

var VIDEO_TOOLS_DATA = [
  {
    id: "revid-ai",
    name: "Revid AI",
    slug: "revid",
    tagline: "Autonomous short-form video synthesis from text, links, and audio clips",
    description: "Revid AI is a specialized automation engine engineered specifically for rapid vertical content generation (TikTok, YouTube Shorts, Instagram Reels). It consumes articles, scripts, YouTube links, or audio podcasts and produces complete, captioned, B-roll synchronized short videos in under 60 seconds with dynamic animated typography and sound effects.",
    category: "short-form",
    categoryLabel: "Short-Form & Repurposing",
    featured: true,
    editorChoice: true,
    logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://www.revid.ai/?via=creator-toolkit",
    pricing: {
      startingMonthly: 19,
      annualDiscountMonthly: 15,
      hasFreeTier: true,
      freeTierNote: "Free trial generating 2 watermarked videos with all templates",
      pricingModel: "Freemium / Monthly Subscription",
      costPerRenderedMinEst: "$0.32"
    },
    scores: {
      speed: 9.6,
      quality: 8.9,
      easeOfUse: 9.7,
      value: 9.3,
      automation: 9.9,
      overall: 9.48
    },
    specs: {
      renderSpeedMin: "0.75 min for 60s video",
      maxExportResolution: "1080x1920 (FHD 9:16 vertical)",
      autoCaptionFidelity: "98.2% Word Error Rate (WER < 2%)",
      voiceCloningQuality: "ElevenLabs API Integration (ultra-realistic)",
      stockBRollEngine: "Pexels + AI Generative Custom B-Roll Hybrid",
      targetFormat: "9:16 Vertical (TikTok / Reels / Shorts)"
    },
    targetAudience: "Short-form creators, faceless YouTube channel operators, podcast repurposers, performance marketers",
    keyFeatures: [
      "URL-to-Video Engine: Paste any blog post, Reddit thread, or news article to generate a scripted viral hook",
      "Dynamic Word-by-Word Kinetic Subtitles with custom emoji animations and highlight colors",
      "Automated Hook Generator: Generates 5 distinct psychological hooks to maximize swipe retention",
      "Integrated Generative Voice Library featuring hyper-expressive pacing and natural breathing pauses",
      "Smart B-Roll Matching: Contextual semantic alignment between script keywords and visual footage"
    ],
    pros: [
      "Incredible workflow speed: Zero to published short in ~4 minutes flat",
      "Exceptional animated caption styles mimicking top creators (MrBeast, Hormozi, Ali Abdaal styles)",
      "High retention rate templates engineered around short-form platform algorithms",
      "Direct webhook / social scheduling pipeline integrations"
    ],
    cons: [
      "Strictly optimized for vertical 9:16 (not built for 16:9 cinematic widescreen productions)",
      "Less manual micro-timeline control compared to non-linear editors like Premiere Pro"
    ],
    testedDate: "September 2025",
    verdict: "The most time-efficient vertical video automation platform tested in 2025. For creators producing 3-10 shorts per week, it eliminates 80% of mundane editing time while maintaining high algorithmic retention."
  },
  {
    id: "runway-gen3",
    name: "Runway Gen-3 Alpha",
    slug: "runway-gen3",
    tagline: "Industry-standard cinematic generative video with granular camera motion control",
    description: "Runway Gen-3 Alpha represents the bleeding edge of foundational text-to-video and image-to-video neural models. Designed for visual artists, VFX directors, and indie filmmakers, it offers unmatched photorealism, temporal consistency, and precise multi-axis directorial camera controls.",
    category: "generative",
    categoryLabel: "Generative World & B-Roll",
    featured: true,
    editorChoice: true,
    logoUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://runwayml.com/?ref=aivideotoolkit",
    pricing: {
      startingMonthly: 15,
      annualDiscountMonthly: 12,
      hasFreeTier: true,
      freeTierNote: "125 one-time credits on sign up",
      pricingModel: "Credit-based / Tiered Subscription",
      costPerRenderedMinEst: "$1.80"
    },
    scores: {
      speed: 7.8,
      quality: 9.8,
      easeOfUse: 8.2,
      value: 8.5,
      automation: 7.9,
      overall: 8.44
    },
    specs: {
      renderSpeedMin: "1.8 min for 10s clip (720p/1080p)",
      maxExportResolution: "4K (Upscaled) / 1080p Native (16:9 / 9:16 / 21:9)",
      autoCaptionFidelity: "N/A (Visual Generation Focus)",
      voiceCloningQuality: "Audio Gen / Lip Sync add-on module",
      stockBRollEngine: "100% Neural Generative Synthesis",
      targetFormat: "Universal (Cinematic 16:9, Vertical, Anamorphic)"
    },
    targetAudience: "VFX artists, commercial film directors, creative agencies, music video producers",
    keyFeatures: [
      "Industry-leading temporal coherence: eliminates character morphing and visual stutter",
      "Motion Brush 2.0: Selectively paint motion onto 5 distinct static image regions",
      "Granular Director Mode: Control pan, tilt, zoom, pedestal, and roll velocities simultaneously",
      "Gen-3 Camera Dynamics: High-speed vehicular tracking, FPV drone simulation, cinematic cranes"
    ],
    pros: [
      "Highest visual realism and cinematic lighting rendering in the industry",
      "Unrivaled camera path precision for complex storytelling shots",
      "Native image-to-video preserves artistic style and character likeness exceptionally well"
    ],
    cons: [
      "Steep credit burn rate during exploratory prompt testing",
      "Not designed for automated turn-key voiceover and text-card pipeline assembly"
    ],
    testedDate: "September 2025",
    verdict: "The absolute gold standard for pure generative visual fidelity. Indispensable for high-end cinematic B-roll, concept trailers, and surrealist video art."
  },
  {
    id: "descript",
    name: "Descript",
    slug: "descript",
    tagline: "The all-in-one text-based editorial suite with AI Studio Sound and voice cloning",
    description: "Descript pioneered text-based video and audio editing. Edit your video by simply deleting or reorganizing transcribed text in a document interface. With automatic filler-word removal ('um', 'uh', repeated phrases), Studio Sound acoustics correction, and Overdub voice synthesis, it transforms complex talking-head post-production into simple word processing.",
    category: "editorial",
    categoryLabel: "Editorial & Speech Editing",
    featured: true,
    editorChoice: true,
    logoUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://www.descript.com/?ref=aivideotoolkit",
    pricing: {
      startingMonthly: 19,
      annualDiscountMonthly: 144,
      hasFreeTier: true,
      freeTierNote: "1 hour of transcription & 1 720p watermark-free export per month",
      pricingModel: "Freemium / Monthly Seat",
      costPerRenderedMinEst: "$0.18"
    },
    scores: {
      speed: 8.9,
      quality: 9.3,
      easeOfUse: 9.5,
      value: 9.4,
      automation: 8.8,
      overall: 9.18
    },
    specs: {
      renderSpeedMin: "Instant local preview / 1.2 min cloud export",
      maxExportResolution: "4K UHD (60fps)",
      autoCaptionFidelity: "99.1% Multi-Speaker Diarization",
      voiceCloningQuality: "Descript Overdub (Personal voice correction)",
      stockBRollEngine: "Integrated Giphy, Storyblocks, and Unsplash",
      targetFormat: "Universal (Multi-track 16:9, 1:1, 9:16)"
    },
    targetAudience: "Podcasters, educational YouTubers, interviewers, webinar producers",
    keyFeatures: [
      "Doc-style Text Editing: Cut video by striking through words in your transcript",
      "Studio Sound: One-click neural isolation removing background hum, room echo, and mic distortion",
      "Automatic Filler Word Detection: Purge all 'ums' and awkward silences in one batch click",
      "AI Eye Contact Correction: Subtly redirects subject gaze toward the camera lens in real-time"
    ],
    pros: [
      "Revolutionizes podcast and talking-head editing speed by 5x",
      "Studio Sound turns affordable USB microphones into professional broadcast audio",
      "Seamless multi-track audio and screen recording built-in"
    ],
    cons: [
      "Electron desktop app can become RAM-heavy on 4K multi-cam timelines",
      "Does not automatically synthesize vertical viral hooks from scratch like Revid AI"
    ],
    testedDate: "September 2025",
    verdict: "An irreplaceable staple in any serious creator's toolkit for speech-driven long-form video. The quickest path from raw interview recording to polished draft."
  },
  {
    id: "heygen",
    name: "HeyGen",
    slug: "heygen",
    tagline: "Hyper-realistic photorealistic AI avatars and instant multi-language video localization",
    description: "HeyGen specializes in photorealistic digital humans and seamless multilingual video translation. Users can create a custom digital twin in 5 minutes with natural micro-expressions and studio lighting, or translate existing videos into 40+ languages with synchronized lip movements that preserve the original speaker's vocal timbre.",
    category: "avatar",
    categoryLabel: "AI Avatars & Presenters",
    featured: true,
    editorChoice: true,
    logoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://www.heygen.com/?via=creator-toolkit",
    pricing: {
      startingMonthly: 29,
      annualDiscountMonthly: 24,
      hasFreeTier: true,
      freeTierNote: "1 free credit (up to 1 min video generation)",
      pricingModel: "Credit-based / Subscription",
      costPerRenderedMinEst: "$0.95"
    },
    scores: {
      speed: 8.8,
      quality: 9.6,
      easeOfUse: 9.2,
      value: 8.7,
      automation: 9.1,
      overall: 9.08
    },
    specs: {
      renderSpeedMin: "1.5 min per 60s generated avatar video",
      maxExportResolution: "1080p FHD / 4K Studio Avatars",
      autoCaptionFidelity: "98.5% Multilingual",
      voiceCloningQuality: "Hyper-realistic cross-lingual voice cloning",
      stockBRollEngine: "Slide deck integrations & canvas elements",
      targetFormat: "Universal (Horizontal 16:9 & Vertical 9:16)"
    },
    targetAudience: "Global marketing teams, e-learning creators, SaaS founders, onboarding specialists",
    keyFeatures: [
      "Instant Custom Avatar 2.0: Generate an ultra-clean personal digital clone from a 2-minute webcam clip",
      "Multilingual Video Translation: Translate videos across 40+ languages with automatic lip-sync recalibration",
      "Interactive Streaming Avatars: Real-time conversational API avatar agents for web apps",
      "Generative Outfit & Wardrobe Studio: Change your digital twin's attire via text prompt"
    ],
    pros: [
      "Best-in-class lip synchronization fidelity without the robotic 'uncanny valley' effect",
      "Vocal cloning preserves emotional nuances across translation languages",
      "Massive time savings for corporate training and international product launches"
    ],
    cons: [
      "Higher price point per minute compared to pure text repurposing tools",
      "Requires high-quality camera setup for optimal instant avatar cloning"
    ],
    testedDate: "September 2025",
    verdict: "The undisputed champion of avatar-based video and cross-border video localization. Essential for businesses scaling customer training or international marketing without hiring actors."
  },
  {
    id: "kling-ai",
    name: "Kling AI",
    slug: "kling-ai",
    tagline: "Ultra-high dynamic physical simulation and 1080p extended video generation",
    description: "Developed by Kuaishou, Kling AI has gained massive worldwide attention for its advanced physical simulation engine, rendering accurate fluid dynamics, complex character motion, and sustained 1080p clips up to 2 minutes with superior prompt adherence.",
    category: "generative",
    categoryLabel: "Generative World & B-Roll",
    featured: false,
    editorChoice: false,
    logoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://klingai.com/?ref=aivideotoolkit",
    pricing: {
      startingMonthly: 10,
      annualDiscountMonthly: 8.5,
      hasFreeTier: true,
      freeTierNote: "66 free credits daily upon login",
      pricingModel: "Daily Credits + Subscription",
      costPerRenderedMinEst: "$0.85"
    },
    scores: {
      speed: 7.9,
      quality: 9.5,
      easeOfUse: 8.4,
      value: 9.2,
      automation: 7.6,
      overall: 8.52
    },
    specs: {
      renderSpeedMin: "2.5 min for 5s/10s standard generation",
      maxExportResolution: "1080p 30fps Native",
      autoCaptionFidelity: "N/A",
      voiceCloningQuality: "Experimental Audio Generation",
      stockBRollEngine: "Neural 3D Spatio-Temporal Diffusion",
      targetFormat: "16:9, 9:16, 1:1"
    },
    targetAudience: "3D animators, indie game developers, concept designers, cinematic creators",
    keyFeatures: [
      "3D Spatio-Temporal Joint Modeling: Understands physical laws, gravity, friction, and fluid mechanics",
      "Up to 2-minute video extension without quality degradation",
      "End-Frame & Start-Frame Interpolation for seamless loop generation"
    ],
    pros: [
      "Extremely realistic human physics (eating, pouring liquids, walking without morphing)",
      "Generous daily free tier for hobbyist experimentation",
      "Superior long-prompt comprehension"
    ],
    cons: [
      "Render queues can experience server congestion during peak Asian/US trading hours",
      "UI translation from Chinese has occasional minor localization quirks"
    ],
    testedDate: "September 2025",
    verdict: "A staggering achievement in physical simulation fidelity. Competes toe-to-toe with Runway Gen-3 while offering better fluid and anatomy interactions."
  },
  {
    id: "pika",
    name: "Pika 1.5",
    slug: "pika",
    tagline: "Playful motion styles, viral 'Pikaffects', and seamless shot direction",
    description: "Pika 1.5 is the most whimsical and user-friendly generative video suite. Famous for its viral physics-defying 'Pikaffects' (Inflate, Melt, Explode, Squish, Crush) and intuitive camera control sliders, it makes creative video generation accessible to creators of any background.",
    category: "generative",
    categoryLabel: "Generative World & B-Roll",
    featured: false,
    editorChoice: false,
    logoUrl: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://pika.art/?ref=aivideotoolkit",
    pricing: {
      startingMonthly: 10,
      annualDiscountMonthly: 8,
      hasFreeTier: true,
      freeTierNote: "30 initial credits + 30 credits replenished daily",
      pricingModel: "Freemium / Monthly Tiers",
      costPerRenderedMinEst: "$0.75"
    },
    scores: {
      speed: 8.7,
      quality: 8.8,
      easeOfUse: 9.4,
      value: 9.0,
      automation: 8.1,
      overall: 8.80
    },
    specs: {
      renderSpeedMin: "1.0 min for 4-second generation",
      maxExportResolution: "1080p Upscaled",
      autoCaptionFidelity: "N/A",
      voiceCloningQuality: "Lip-sync to uploaded audio track",
      stockBRollEngine: "Diffusion Engine + Sound FX Synthesizer",
      targetFormat: "16:9, 9:16, 1:1, 4:5"
    },
    targetAudience: "Social media visual artists, meme creators, advertising art directors",
    keyFeatures: [
      "Pikaffects: One-click surreal physics modifications (Inflate, Crush, Melt, Crumble)",
      "Integrated Audio FX Generation: Generates matching foley sound effects automatically",
      "Expand Canvas: Generatively outpaint video borders in any direction"
    ],
    pros: [
      "Super fun and engaging user experience with instant viral potential",
      "Automatic sound effects synthesis adds instant life to silent video clips",
      "Fast iteration turnaround on short 4-second ideas"
    ],
    cons: [
      "Not designed for realistic long narrative sequence rendering",
      "Photorealism is slightly below Runway Gen-3 on fine human skin textures"
    ],
    testedDate: "September 2025",
    verdict: "The most entertaining and viral-friendly generative AI tool on the market. Perfect for surreal ad concepts, social stunts, and rapid creative exploration."
  },
  {
    id: "synthesia",
    name: "Synthesia",
    slug: "synthesia",
    tagline: "Enterprise-grade synthetic presenter platform with 140+ languages and SOC-2 compliance",
    description: "Synthesia is the enterprise benchmark for corporate training, sales enablement, and instructional video production. Featuring expressive micro-gesture avatars, robust governance controls, and native SCORM e-learning exports, it is trusted by 50% of the Fortune 100.",
    category: "avatar",
    categoryLabel: "AI Avatars & Presenters",
    featured: false,
    editorChoice: false,
    logoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://www.synthesia.io/?ref=aivideotoolkit",
    pricing: {
      startingMonthly: 29,
      annualDiscountMonthly: 22,
      hasFreeTier: false,
      freeTierNote: "Free demo video generation on homepage",
      pricingModel: "Annual / Monthly Enterprise Subscription",
      costPerRenderedMinEst: "$1.20"
    },
    scores: {
      speed: 8.6,
      quality: 9.3,
      easeOfUse: 9.3,
      value: 8.3,
      automation: 9.2,
      overall: 8.94
    },
    specs: {
      renderSpeedMin: "2.0 min for standard 60s presentation",
      maxExportResolution: "1080p FHD (16:9 & 9:16)",
      autoCaptionFidelity: "99.0% Corporate Clean",
      voiceCloningQuality: "Studio Trained Expressive Avatars",
      stockBRollEngine: "Enterprise Media Library & Unsplash",
      targetFormat: "16:9 Widescreen & 9:16 Vertical"
    },
    targetAudience: "L&D departments, HR trainers, compliance teams, global enterprises",
    keyFeatures: [
      "Expressive Avatars with nod, shrug, eyebrow raise, and emotional intonation controls",
      "SCORM compliant export for direct LMS (Learning Management System) loading",
      "Automated brand kit integration and strict corporate permission controls"
    ],
    pros: [
      "Uncompromising compliance, security, and governance standards (SOC-2, GDPR)",
      "High reliability for lengthy 10-30 minute instructional modules",
      "Massive catalog of 160+ diverse professional studio avatars"
    ],
    cons: [
      "No true free self-serve sandbox beyond single demo renders",
      "Can feel rigid for casual viral creator workflows"
    ],
    testedDate: "September 2025",
    verdict: "The gold standard for corporate instruction, HR compliance, and multi-market enterprise documentation."
  },
  {
    id: "invideo-ai",
    name: "InVideo AI 2.0",
    slug: "invideo-ai",
    tagline: "Prompt-to-complete-video engine with automated script, stock footage, and voiceover",
    description: "InVideo AI turns complex conversational prompts into fully-edited YouTube documentaries, explainer videos, and social clips. Type 'Create a 5-minute video on the history of quantum computing for teenagers', and InVideo writes the script, selects licensed stock B-roll from iStock/Storyblocks, records voiceover, and adds background music.",
    category: "short-form",
    categoryLabel: "Short-Form & Repurposing",
    featured: false,
    editorChoice: false,
    logoUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=120&auto=format&fit=crop&q=80",
    coverUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
    websiteUrl: "https://invideo.io/?ref=aivideotoolkit",
    pricing: {
      startingMonthly: 25,
      annualDiscountMonthly: 20,
      hasFreeTier: true,
      freeTierNote: "10 mins/week with InVideo watermark",
      pricingModel: "Freemium / Monthly Subscription",
      costPerRenderedMinEst: "$0.45"
    },
    scores: {
      speed: 9.1,
      quality: 8.5,
      easeOfUse: 9.6,
      value: 9.1,
      automation: 9.7,
      overall: 9.20
    },
    specs: {
      renderSpeedMin: "1.5 min for 3-minute video",
      maxExportResolution: "1080p FHD (16:9 & 9:16)",
      autoCaptionFidelity: "97.5% Standard",
      voiceCloningQuality: "Natural TTS + Voice Cloning add-on",
      stockBRollEngine: "iStock by Getty Images (16M+ premium assets)",
      targetFormat: "Universal (Horizontal 16:9 & Vertical 9:16)"
    },
    targetAudience: "YouTube faceless channel creators, real estate agents, marketers needing quick explainer videos",
    keyFeatures: [
      "Natural Language Editor: Tell the AI 'Make the tone more sarcastic' or 'Swap the second clip for a rocket launch'",
      "Access to premium iStock media library without separate royalty fees",
      "Full scriptwriter and scene generator with multi-speaker support"
    ],
    pros: [
      "Handles both long-form 16:9 YouTube videos and 9:16 shorts equally well",
      "Remarkable time saver for broad topical explainer channels",
      "Prompt-based modifications make revisions easy without manual editing"
    ],
    cons: [
      "Stock video selection can occasionally feel slightly generic without prompt refinement",
      "Export times can spike during peak cloud processing loads"
    ],
    testedDate: "September 2025",
    verdict: "The easiest way to generate complete long-form explainer and listicle videos from a single prompt. Strong all-around generalist."
  }
];

// Workflow comparison matrices: maps creator objectives to recommended tool stacks
var WORKFLOW_MATRICES = [
  {
    goal: "Viral TikTok / Shorts Machine (3-5 videos/day)",
    primaryTool: "Revid AI",
    secondaryTool: "Descript",
    workflow: "1. Identify trending article or podcast highlight -> 2. Ingest link into Revid AI -> 3. Auto-generate 5 hook variations -> 4. Export vertical short with kinetic typography in 4 minutes.",
    estimatedTimeMin: 6,
    traditionalTimeHours: 3.5,
    efficiencyGain: "88% time reduction"
  },
  {
    goal: "Cinematic Sci-Fi / Film B-Roll & Visual Ads",
    primaryTool: "Runway Gen-3 Alpha",
    secondaryTool: "Pika 1.5",
    workflow: "1. Concept keyframes in Midjourney -> 2. Animate in Runway Gen-3 with custom camera roll/pan vectors -> 3. Upscale to 4K -> 4. Grade & assemble in Premiere or DaVinci.",
    estimatedTimeMin: 25,
    traditionalTimeHours: 12.0,
    efficiencyGain: "95% budget reduction vs CGI studio"
  },
  {
    goal: "High-Volume Interview & Podcast Post-Production",
    primaryTool: "Descript",
    secondaryTool: "Revid AI",
    workflow: "1. Record raw Zoom/Riverside audio -> 2. Descript text-edit & Studio Sound cleanup -> 3. Extract best punchy quotes -> 4. Send snippets to Revid AI for animated vertical clips.",
    estimatedTimeMin: 20,
    traditionalTimeHours: 5.0,
    efficiencyGain: "85% turnaround acceleration"
  },
  {
    goal: "Global Multilingual SaaS & Customer Onboarding",
    primaryTool: "HeyGen",
    secondaryTool: "Synthesia",
    workflow: "1. Screen record English product walkthrough -> 2. Upload to HeyGen Video Translate -> 3. Instant translation into Spanish, German, Japanese with voice & lip match -> 4. Publish globally.",
    estimatedTimeMin: 15,
    traditionalTimeHours: 24.0,
    efficiencyGain: "98% localization cost cut"
  }
];

/**
 * Data Access Helpers for Server & Client
 */
function getAllTools() {
  return VIDEO_TOOLS_DATA;
}

function getToolById(id) {
  if (!id) return null;
  var lower = id.toLowerCase().trim();
  for (var i = 0; i < VIDEO_TOOLS_DATA.length; i++) {
    if (VIDEO_TOOLS_DATA[i].id === lower || VIDEO_TOOLS_DATA[i].slug === lower) {
      return VIDEO_TOOLS_DATA[i];
    }
  }
  return null;
}

function getWorkflowMatrices() {
  return WORKFLOW_MATRICES;
}

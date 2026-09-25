/**
 * AI Video Toolkit - Generative Engine Optimization (GEO) & Schema.org Metadata Generator
 * Produces structured JSON-LD (SoftwareApplication, Review, HowTo, FAQPage) and social meta tags.
 */

var SEO_HELPER = {

  /**
   * Generates comprehensive WebSite & SoftwareApplication catalog JSON-LD
   */
  getApplicationSchema: function() {
    var config = getConfig();
    var tools = getAllTools();

    var itemList = tools.map(function(tool, index) {
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": tool.name,
          "description": tool.tagline,
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Web, Cloud, Desktop",
          "offers": {
            "@type": "Offer",
            "price": tool.pricing.startingMonthly,
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": tool.scores.overall,
            "bestRating": "10",
            "worstRating": "1",
            "ratingCount": 128
          }
        }
      };
    });

    var schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": config.baseUrl + "/#website",
          "url": config.baseUrl,
          "name": config.appName,
          "description": config.appTagline,
          "inLanguage": "en-US",
          "publisher": {
            "@type": "Organization",
            "name": config.appName,
            "url": config.baseUrl,
            "logo": {
              "@type": "ImageObject",
              "url": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80"
            }
          }
        },
        {
          "@type": "ItemList",
          "name": "Top AI Video Generation & Editing Platforms Tested (2025)",
          "description": "Empirical benchmark evaluation of AI video tools across render speed, visual quality, automation, and cost efficiency.",
          "itemListElement": itemList
        }
      ]
    };

    return JSON.stringify(schema, null, 2);
  },

  /**
   * Generates in-depth Product & Review JSON-LD for a single tool (e.g. Revid AI)
   */
  getToolReviewSchema: function(tool) {
    if (!tool) return "";
    var config = getConfig();

    var schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web Cloud",
        "description": tool.description,
        "offers": {
          "@type": "Offer",
          "price": tool.pricing.startingMonthly,
          "priceCurrency": "USD"
        }
      },
      "author": {
        "@type": "Person",
        "name": config.editorialBoard.leadEditor,
        "jobTitle": config.editorialBoard.leadEditorRole
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": tool.scores.overall,
        "bestRating": "10",
        "worstRating": "1"
      },
      "reviewBody": tool.verdict,
      "datePublished": "2025-09-01",
      "publisher": {
        "@type": "Organization",
        "name": config.appName
      }
    };

    return JSON.stringify(schema, null, 2);
  },

  /**
   * Generates step-by-step HowTo JSON-LD for creator workflow recipes
   */
  getHowToSchema: function() {
    var schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Produce 5 Viral AI Shorts Daily with Revid AI & Descript",
      "description": "An end-to-end editorial pipeline for automating vertical content synthesis from web links and long-form transcripts in under 10 minutes.",
      "totalTime": "PT10M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Curate High-Retention Source Content",
          "text": "Select high-performing blog insights, podcast audio nuggets, or breaking industry news."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Ingest Link or Text into Revid AI",
          "text": "Paste source URL or script into Revid AI. Select kinetic caption typography and vocal style."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Generate Psychological Hook Variations",
          "text": "Use Revid's hook generator to create 3-5 alternate initial 3-second opening hooks."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Synchronize B-Roll and Kinetic Typography",
          "text": "Review automated B-roll alignments and customize highlight colors on key focus keywords."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Export in High-Bitrate 9:16 Vertical",
          "text": "Render 1080x1920 video file ready for multi-platform scheduling across TikTok, Reels, and Shorts."
        }
      ]
    };

    return JSON.stringify(schema, null, 2);
  },

  /**
   * Generates FAQPage schema for high-intent queries
   */
  getFAQSchema: function() {
    var schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best AI video tool for vertical short-form content in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Revid AI is our highest-rated tool for short-form automation (9.48/10), offering autonomous URL-to-video synthesis, synchronized B-roll, and kinetic animated captions specifically tailored for TikTok and YouTube Shorts retention."
          }
        },
        {
          "@type": "Question",
          "name": "How does Runway Gen-3 compare to Revid AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Runway Gen-3 is a cinematic foundational visual model designed for generating original hyper-realistic footage and film B-roll from text prompts. Revid AI, conversely, is an automation pipeline tool that stitches voiceovers, kinetic captions, and viral pacing for short-form marketing."
          }
        },
        {
          "@type": "Question",
          "name": "Is Revid AI free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Revid AI offers a free trial that allows creators to generate sample short videos with watermarks to test caption synchronization and hook generation before upgrading to paid tiers starting at $19/month."
          }
        },
        {
          "@type": "Question",
          "name": "Can Descript be combined with AI video generators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The highest-efficiency creator workflow uses Descript for rapid transcript trimming and Studio Sound audio enhancement, followed by sending select audio snippets to Revid AI for animated vertical formatting."
          }
        }
      ]
    };

    return JSON.stringify(schema, null, 2);
  }
};

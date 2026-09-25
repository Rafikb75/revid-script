/**
 * AI Video Toolkit - Main Server-Side Controller & Router (Google Apps Script)
 * Handles doGet(e), template compilation, dynamic routing, and sub-template inclusion.
 */

/**
 * Main Web App Entry Point
 * @param {Object} e Event object containing query parameters
 * @return {HtmlOutput} Rendered web application
 */
function doGet(e) {
  e = e || { parameter: {} };
  var params = e.parameter || {};
  
  // API JSON Endpoint handling for programmatic consumers or client fetch
  if (params.api) {
    return handleApiRequest(params);
  }

  // Determine active route
  var requestedPage = (params.page || "home").toLowerCase();
  var selectedToolId = params.tool || null;
  var selectedCat = params.cat || "all";

  // Template resolution
  var templateName = "Home";
  var pageTitle = APP_CONFIG.appName + " — AI Video Benchmarks & Workflows";
  var currentTool = null;

  if (requestedPage === "tools") {
    templateName = "Tools";
    pageTitle = "Tools Directory & Benchmark Comparator — " + APP_CONFIG.appName;
  } else if (requestedPage === "revid" || selectedToolId === "revid-ai" || selectedToolId === "revid") {
    templateName = "Revid";
    currentTool = getToolById("revid-ai");
    pageTitle = "Revid AI In-Depth Review & Benchmark (2025) — " + APP_CONFIG.appName;
  } else if (requestedPage === "tool" && selectedToolId) {
    currentTool = getToolById(selectedToolId);
    if (currentTool) {
      templateName = "ToolDetails";
      pageTitle = currentTool.name + " Review & Benchmark Scores — " + APP_CONFIG.appName;
    } else {
      templateName = "Tools";
    }
  }

  // Initialize HTML Template
  var template = HtmlService.createTemplateFromFile(templateName);
  
  // Bind server data to template context
  template.config = APP_CONFIG;
  template.tools = getAllTools();
  template.tool = currentTool;
  template.selectedCat = selectedCat;
  template.workflowMatrices = getWorkflowMatrices();
  template.activePage = requestedPage;
  template.seoSchema = SEO_HELPER.getApplicationSchema();
  template.faqSchema = SEO_HELPER.getFAQSchema();
  template.howToSchema = SEO_HELPER.getHowToSchema();
  
  if (currentTool) {
    template.toolReviewSchema = SEO_HELPER.getToolReviewSchema(currentTool);
  } else {
    template.toolReviewSchema = "";
  }

  // Evaluate template and configure headers
  return template.evaluate()
    .setTitle(pageTitle)
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=5.0")
    .addMetaTag("description", APP_CONFIG.appTagline)
    .addMetaTag("theme-color", "#0b0f19")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Sub-template file inclusion helper for Apps Script
 * Allows <?!= include('Styles'); ?> and <?!= include('Scripts'); ?> in HTML templates
 * @param {string} filename Name of the HTML file to include (without extension)
 * @return {string} Evaluated HTML content
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Handles lightweight JSON API requests (?api=tools or ?api=tool&id=xxx)
 * @param {Object} params Request parameters
 * @return {TextOutput} JSON response
 */
function handleApiRequest(params) {
  var responseData = {};
  var endpoint = params.api.toLowerCase();

  if (endpoint === "tools") {
    var category = params.cat;
    var all = getAllTools();
    if (category && category !== "all") {
      responseData = all.filter(function(t) { return t.category === category; });
    } else {
      responseData = all;
    }
  } else if (endpoint === "tool") {
    var tool = getToolById(params.id);
    responseData = tool || { error: "Tool not found", id: params.id };
  } else if (endpoint === "config") {
    responseData = getConfig();
  } else if (endpoint === "workflows") {
    responseData = getWorkflowMatrices();
  } else {
    responseData = {
      error: "Unknown API endpoint",
      availableEndpoints: ["tools", "tool", "config", "workflows"]
    };
  }

  return ContentService.createTextOutput(JSON.stringify(responseData))
    .setMimeType(ContentService.MimeType.JSON);
}

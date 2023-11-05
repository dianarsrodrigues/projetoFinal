function encodeHTML(html) {
    return html
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
}

// Function to decode HTML entities
function decodeHTML(encodedHtml) {
return encodedHtml
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}
  
  
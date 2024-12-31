export function stripMarkdown(markdown: string) {
  return markdown
    .replace(/[#*_>`\-\[\]()*~+!]/g, "") // Remove Markdown characters
    .replace(/\n/g, " ") // Replace newlines with spaces
    .trim(); // Remove leading/trailing whitespace
}

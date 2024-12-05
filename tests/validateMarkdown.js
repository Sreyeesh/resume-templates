const fs = require("fs");
const markdownlint = require("markdownlint");

describe("Markdown Tests", () => {
  test("Resume files pass markdownlint", () => {
    const options = {
      files: ["resumes/*.md"],
    };
    const result = markdownlint.sync(options);
    expect(result.toString()).toBe(""); // Expect no linting errors
  });

  test("Markdown contains required headings", () => {
    const files = ["resumes/master-resume.md"];
    files.forEach((file) => {
      const content = fs.readFileSync(file, "utf-8");
      expect(content).toMatch(/# Summary/); // Check for a # Summary heading
      expect(content).toMatch(/# Skills/); // Check for a # Skills heading
    });
  });
});

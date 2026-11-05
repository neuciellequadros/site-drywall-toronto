import { test, expect } from "@playwright/test";

test.describe("MS Drywall Finish Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("1. Page loads with correct title and SEO metadata", async ({ page }) => {
    await expect(page).toHaveTitle(/MS Drywall Finish/);
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute(
      "content",
      /MS Drywall Finish delivers premier drywall/
    );

    // Verify Schema.org JSON-LD
    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toHaveCount(1);
    const text = await jsonLdScript.textContent();
    expect(text).toContain("HomeAndConstructionBusiness");
    expect(text).toContain("Toronto");
  });

  test("2. Hero section displays brand headline and CTAs", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toContainText("Professional");
    await expect(heading).toContainText("Drywall");

    const quoteBtn = page.getByRole("link", { name: /Get a Free Quote/i }).first();
    await expect(quoteBtn).toBeVisible();
    await expect(quoteBtn).toHaveAttribute("href", "#contact");
  });

  test("3. Services section displays all 6 drywall services", async ({ page }) => {
    const servicesSection = page.locator("#services");
    await expect(servicesSection).toBeVisible();

    const serviceTitles = [
      "Drywall Installation",
      "Master Taping & Mudding",
      "Level 5 Mirror Finishes",
      "Architectural & Cove Ceilings",
      "Drywall Repair & Restoration",
      "Commercial & Condo Fit-Outs",
    ];

    for (const title of serviceTitles) {
      await expect(servicesSection.getByText(title, { exact: true })).toBeVisible();
    }
  });

  test("4. Interactive Project Gallery filters and lightbox modal work", async ({
    page,
  }) => {
    const projectsSection = page.locator("#projects");
    await projectsSection.scrollIntoViewIfNeeded();

    // Verify category buttons
    const ceilingsBtn = projectsSection.getByRole("button", { name: "Custom Ceilings" });
    await expect(ceilingsBtn).toBeVisible();
    await ceilingsBtn.click();

    // Project visible
    const projectCard = projectsSection.getByText("Curved Bulkhead & Reveal Trim");
    await expect(projectCard).toBeVisible();

    // Click project to trigger Lightbox
    await projectCard.click();

    const dialog = page.locator('div[role="dialog"]');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText("Penthouse Suite • Yorkville, Toronto")).toBeVisible();

    // Close lightbox
    const closeBtn = dialog.getByRole("button", { name: /Close image preview/i });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
  });

  test("5. Floating WhatsApp contact has pre-filled message", async ({ page }) => {
    const waLink = page.locator('a[aria-label="Chat with MS Drywall Finish on WhatsApp"]');
    // On desktop, this link should be present
    if (await waLink.isVisible()) {
      const href = await waLink.getAttribute("href");
      expect(href).toContain("https://wa.me/14379982003");
      expect(href).toContain("text=");
    }
  });

  test("6. Quote estimate form validates and submits successfully", async ({ page }) => {
    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();

    const nameInput = page.locator('input[name="fullName"]');
    const emailInput = page.locator('input[name="email"]');
    const phoneInput = page.locator('input[name="phone"]');
    const projectSelect = page.locator('select[name="projectType"]');
    const detailsInput = page.locator('textarea[name="details"]');
    const submitBtn = page.getByRole("button", { name: /Send Estimate Request/i });

    // Fill valid data
    await nameInput.fill("Alexander Miller");
    await emailInput.fill("alexander@millerbuilds.ca");
    await phoneInput.fill("(437) 555-0199");
    await projectSelect.selectOption("Level 5 Skim / Mirror Finish");
    await detailsInput.fill("Need Level 5 finish for open concept 14ft high ceiling in Oakville custom build.");

    await submitBtn.click();

    // Expect success message
    await expect(
      page.getByText(/Thank you! Your quote request has been submitted successfully/i)
    ).toBeVisible({ timeout: 10000 });
  });
});


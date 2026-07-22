---
version: alpha
name: Edob Editing
description: A high-contrast neon-accented portfolio system with cinematic dark surfaces and bold editorial typography.
colors:
  primary: "#B4E000"
  primary-60: "#8DAE00"
  primary-30: "#5D7300"
  secondary: "#FFFFFF"
  tertiary: "#8E7DFF"
  neutral: "#121212"
  surface: "#1C1C1C"
  surface-2: "#232323"
  on-surface: "#FFFFFF"
  muted: "#B8B8B8"
  border: "#FFFFFF33"
  success: "#2DBE60"
  warning: "#FFC83D"
  error: "#FF5A5F"
typography:
  headline-display:
    fontFamily: Inter
    fontSize: 66px
    fontWeight: 900
    lineHeight: 68.88px
    letterSpacing: -1.312px
  headline-lg:
    fontFamily: Inter
    fontSize: 50px
    fontWeight: 900
    lineHeight: 60px
    letterSpacing: 0px
  headline-md:
    fontFamily: Inter
    fontSize: 38px
    fontWeight: 600
    lineHeight: 46px
    letterSpacing: 0px
  headline-sm:
    fontFamily: Inter
    fontSize: 29px
    fontWeight: 600
    lineHeight: 35px
    letterSpacing: 0px
  body-lg:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0px
  label-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px
  label-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0px
  overline:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 14px
  xl: 24px
  full: 9999px
spacing:
  xs: 6px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 150px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-secondary-outline:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "40px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "16px 13px"
  card-elevated:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  stat-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-lg}"
    rounded: "{rounded.lg}"
    padding: "16px"
  media-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "0px"
# Edob Editing

## Overview
Edob Editing feels bold, cinematic, and highly energetic, with a strong creator-portfolio personality. The interface is built to impress quickly: large type, dark surfaces, and neon-lime accents make it feel modern and social-media fluent rather than corporate. Spatially, it is generous and presentation-driven, with big hero zones and card clusters that foreground achievements, tools, and samples.

## Colors
- **Primary (#B4E000):** A vivid lime-green accent used for brand energy, section headings, emphasis, and glow-like highlights. It gives the system its signature neon presence and should be used sparingly for strongest impact.
- **Primary-60 (#8DAE00):** A deeper lime for hover states, shaded fills, and subtle emphasis where the brand color needs to feel less electric.
- **Primary-30 (#5D7300):** An even darker olive-lime for recessed backgrounds, overlays, or low-emphasis accent surfaces.
- **Secondary (#FFFFFF):** Clean white for main text, logos, UI icons, and high-contrast calls to action.
- **Tertiary (#8E7DFF):** A cool purple accent that appears well-suited to badges, status pills, or supporting highlights when a second brand hue is needed.
- **Neutral (#121212):** The core background black-brown used across the page, keeping the composition dramatic and allowing the accent color to pop.
- **Surface (#1C1C1C):** Slightly lifted dark panels for cards and modular content areas.
- **Surface-2 (#232323):** A modestly lighter dark layer for nested or elevated content blocks.
- **On-surface (#FFFFFF):** Primary foreground text and icon color on all dark surfaces.
- **Muted (#B8B8B8):** Secondary text for metadata, captions, and supportive labels.
- **Border (#FFFFFF33):** Subtle translucent borders that define cards without flattening the composition.
- **Success (#2DBE60):** Positive state color for availability, progress, or success indicators.
- **Warning (#FFC83D):** Warm highlight for ratings, stars, and attention-grabbing metadata.
- **Error (#FF5A5F):** Reserved for destructive or critical states; keep usage minimal.

## Typography
Inter is the sole type family and carries the whole system with a crisp, contemporary sans-serif voice. The hierarchy is assertive: `headline-display` and `headline-lg` are ultra-bold and large, while lower headings remain strong but slightly less imposing for section titles and card labels. Body text stays clean and readable at 16px–22px, and labels are heavier than body copy to help stats, buttons, and metadata stand out. Letter spacing is mostly tight or neutral, with the only notable tracking reserved for small overline-style labels, which should feel compact and polished rather than shouty.

## Layout
The layout is presentation-first and wide, with generous horizontal breathing room and large vertical separations between major content zones. Use a fixed-max-width mindset for content groups, but allow hero elements and media blocks to stretch visually across the viewport so the page feels expansive and portfolio-like. The spacing rhythm is built from 6px, 16px, 24px, 32px, and a very large 150px gap for major section breaks, producing a mix of dense detail and dramatic open space. Cards and panels use comfortable internal padding rather than tight grids, reinforcing the premium showcase feel.

## Elevation & Depth
Depth comes from contrast, borders, and soft shadowing rather than glossy material effects. The page uses dark layered surfaces with translucent borders, while cards get modest drop shadows to separate them from the background without becoming floating glass objects. The strongest visual hierarchy is created by the neon primary accent and by tonal differences between `neutral`, `surface`, and `surface-2`. Overall the system is more flat-minimal than volumetric, but it still feels tactile because the panels sit in clearly separated planes.

## Shapes
The shape language is gently rounded and modern, not playful. Small controls use `rounded.sm` at 4px, while cards and media containers use `rounded.lg` at about 14px to soften the otherwise hard-edged dark composition. Full pill shapes are reserved for chips, badges, and status elements. This creates a balance between precision and approachability, with enough roundness to feel current but not overly soft.

## Components
Buttons should stay simple and high contrast. `button-primary` is a white-filled action with dark text, intended for the most important next step. `button-secondary` and `button-secondary-outline` should remain minimal, using transparent or dark fills with white text and a 1px border where needed. Keep button height around 40px with 8px 16px padding, and avoid heavy shadows or oversized radii. `button-link` should be text-only and underlined for lightweight navigation or secondary actions.

Cards are foundational. Use `card` and `card-elevated` for stat tiles, content previews, and testimonial-style blocks; they should keep dark backgrounds, subtle borders, and `rounded.lg`. Add only modest shadow depth so cards read as structured containers, not floating widgets. `stat-tile` can inherit the same visual language but should emphasize large numeric values and compact supporting labels.

Inputs should feel restrained and functional, with dark fills, white text, and soft rounded corners. Use `input` with 12px–16px padding, and keep borders understated so form elements don’t compete with hero content. Placeholders and helper text should use `Muted` rather than white.

Chips and badges should be pill-shaped and compact. `chip` is best for statuses like availability or tags, using the primary lime background with dark text for maximum legibility. For media-heavy modules, `media-panel` should hold screenshots, videos, or previews with zero internal padding and a consistent dark frame. Use iconography and small metadata labels liberally, but keep them visually subordinate to the large headings and hero numbers.

## Do's and Don'ts
- Do use the neon primary color for focal points, highlights, and brand moments.
- Do keep typography bold, large, and highly legible, especially in the hero area.
- Do preserve dark surfaces and subtle borders to maintain the cinematic mood.
- Do use generous spacing between sections so the portfolio feels premium and uncluttered.
- Don't introduce bright multi-color palettes that dilute the lime-and-black identity.
- Don't over-round surfaces or buttons; keep the geometry controlled and professional.
- Don't rely on heavy glassmorphism or complex gradients to simulate depth.
- Don't crowd cards with too many actions or labels; let the visuals breathe.
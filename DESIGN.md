---
name: Luminous Grace
colors:
  surface: '#fff8f0'
  surface-dim: '#e1d9cc'
  surface-bright: '#fff8f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e5'
  surface-container: '#f5eddf'
  surface-container-high: '#efe7da'
  surface-container-highest: '#eae1d4'
  on-surface: '#1f1b13'
  on-surface-variant: '#4d4635'
  inverse-surface: '#343027'
  inverse-on-surface: '#f8f0e2'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#6d5d2f'
  on-secondary: '#ffffff'
  secondary-container: '#f7e1a6'
  on-secondary-container: '#736334'
  tertiary: '#415ba4'
  on-tertiary: '#ffffff'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#f7e1a6'
  secondary-fixed-dim: '#dac58d'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#544519'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#fff8f0'
  on-background: '#1f1b13'
  surface-variant: '#eae1d4'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is crafted for a high-end Church Management experience, blending the precision of modern SaaS with the warmth of a spiritual community. The aesthetic is "Elevated Minimalist"—drawing inspiration from the clean, systematic layout of Stripe and Linear while introducing a luxurious, organic warmth tailored for the Nigerian ecclesiastical context.

The UI should evoke a sense of serenity, stewardship, and professional excellence. It avoids the coldness of traditional enterprise software by utilizing soft, glowing accents and a creamy foundation. The visual narrative balances authority with accessibility, ensuring that leadership feels empowered and members feel welcomed.

## Colors

The palette is anchored in a soft, creamy off-white background that feels more prestigious and welcoming than standard digital white. 

- **Primary Accents:** Rich Royal Gold is used for high-importance actions and branding, while the Sunny Yellow-Gold is reserved for interactive states and "spiritual light" accents (glows).
- **Secondary Palette:** Used primarily for categorization (e.g., Ministry types, Group tags, or Departmental statuses). These are desaturated to ensure they do not compete with the primary gold.
- **Neutrals:** Headings use a deep, near-black navy to provide a grounded, authoritative contrast. Body text uses a warm gray to maintain readability without the harshness of pure black.

## Typography

This design system utilizes a dual-sans-serif pairing to achieve a "Modern Professional" look. **Hanken Grotesk** provides a sharp, contemporary edge for headlines, giving the software a high-end SaaS feel. **Plus Jakarta Sans** is used for body text and interface labels; its slightly rounded terminals add a friendly, approachable touch necessary for community-focused software.

Maintain a tight hierarchy. Display sizes should use tighter letter spacing to feel "designed" and editorial. Body text should maintain generous line heights to ensure long-form pastoral reports or member directories remain legible and airy.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with generous internal white space to prevent the UI from feeling cluttered. We utilize an 8px base unit for all spacing increments.

- **Desktop:** 12-column grid with 24px gutters. Use wide 40px outer margins to create a "contained" luxury feel, like a high-end printed journal.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters.

Information density should be kept moderate. Avoid cramming data; instead, use progressive disclosure and large padding (e.g., 32px or 48px) between major sections to allow the design to "breathe."

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Ambient Shadows** rather than harsh borders. 

- **The Base:** The creamy background (#F8F5F0) acts as the foundation.
- **Surface Level:** Cards and primary containers use pure white (#FFFFFF) with a very soft, diffused shadow (Blur: 20px, Opacity: 4%, Color: #4A4742).
- **Interactive Depth:** When an element is hovered, the shadow deepens slightly, and a subtle "inner glow" using a 10% opacity version of the primary gold may be applied.
- **Glow Effects:** High-value areas (like a "Giving" total or "New Member" alert) may feature a soft radial background blur in sunny yellow-gold at 5% opacity to simulate a gentle spiritual light.

## Shapes

The design system uses a "Rounded" shape language to maintain its friendly and modern character. 

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main content areas and large modal dialogues use a 1rem (16px) radius to emphasize a softer, more premium aesthetic.
- **Avatars:** Use 100% circular shapes for member profiles to signify community and wholeness.

## Components

### Buttons
- **Primary:** Solid Royal Gold background with white text. Apply a very subtle top-down gradient (Gold to a slightly darker Gold).
- **Secondary:** Transparent background with a 1px border in Gold or a soft Sage Green. 
- **Tertiary/Ghost:** No border, deep navy text, becoming a soft cream on hover.

### Cards
Cards are the primary vehicle for information. They must have pure white backgrounds, 8px or 16px corner radii, and no visible borders—only the soft ambient shadow defined in the Elevation section.

### Input Fields
Inputs should feel tactile. Use a soft off-white fill that is slightly darker than the main background, with a 1px border that turns Royal Gold on focus. Labels should always be visible above the field in **label-md** typography.

### Chips & Tags
Used for ministry categories (e.g., "Choir," "Youth"). These use the secondary palette (Sky Blue, Sage, Lavender) with a high-transparency fill (15% opacity) and deep-toned text for readability.

### Navigation
A "Linear-style" sidebar or top-nav using the Deep Navy text. Icons should be thin-stroke (2pt) to maintain the "luxurious" feel. Active states are indicated by a small Gold vertical bar or a subtle Gold glow behind the icon.
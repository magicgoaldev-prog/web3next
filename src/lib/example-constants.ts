export const EXAMPLE_PAGE_CONFIG = {
  title: "Example Page",
  description: "This is an example page",
  layout: {
    flexDirection: "row" as const,
    justify: "evenly" as const,
    align: "start" as const,
    gap: 12,
  },
} as const;

export const TYPOGRAPHY_EXAMPLES = {
  h1: "Example h1 header",
  h2: "Example h2 header",
  h3: "Example h3 header",
  h4: "Example h4 header",
  paragraph: "Example paragraph text",
  small: "Example small text",
  extraSmall: "Example extra small text",
  muted: "Example muted text",
  lead: "Example lead text",
  large: "Example large text",
  blockquote: "Example blockquote text",
  list: ["Example list item 1", "Example list item 2", "Example list item 3"],
  inlineCode: "Example inline code",
} as const;

export const BUTTON_EXAMPLES = {
  title: "Button Examples",
  variants: {
    default: "Default Button",
    destructive: "Destructive Button",
    outline: "Outline Button",
    secondary: "Secondary Button",
    ghost: "Ghost Button",
    link: "Link Button",
  },
} as const;

export const STYLES = {
  typographyContainer: "flex flex-col gap-4",
  buttonContainer: "flex flex-col gap-8 justify-center items-center",
} as const;


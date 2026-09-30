import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const gtmContainerId = process.env.GTM_CONTAINER_ID ?? "GTM-P4FNLHQF";
const gaMeasurementId = process.env.GA_MEASUREMENT_ID ?? "G-L8T8ZZ8RSG";
const githubEditBaseUrl = "https://github.com/basilisk-labs/agentplane-web/edit/main";
const githubRepoUrl = "https://github.com/basilisk-labs/agentplane";

function repoEditUrl(sourcePath: string): string {
  const cleanPath = sourcePath.replace(/^(?:\.\.\/)+/, "");
  return `${githubEditBaseUrl}/${cleanPath}`;
}

function blogEditUrl(blogPath: string): string {
  return repoEditUrl(`blog/${blogPath}`);
}

const config = {
  title: "Agentplane",
  tagline: "The Git-native control plane for coding agents.",
  titleDelimiter: "·",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://agentplane.org",
  baseUrl: "/",
  organizationName: "basilisk-labs",
  projectName: "agentplane-web",
  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  themes: ["@docusaurus/theme-mermaid"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          postsPerPage: "ALL",
          routeBasePath: "/blog",
          blogListComponent: "@site/src/pages/blog/index.tsx",
          blogTitle: "Agentplane Blog",
          blogDescription: "Release notes, workflow deep dives, and implementation guidance.",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: ({ blogPath }: { blogPath: string }) => blogEditUrl(blogPath),
        },
        gtag: {
          trackingID: gaMeasurementId,
          anonymizeIP: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/og-image.png",
    metadata: [
      {
        name: "keywords",
        content:
          "coding agent control plane, Git-native agent workflow, coding agent authority, coding agent verification, agent governance, agent change record, agentplane, ai coding agent guardrails",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Agentplane" },
      {
        property: "og:title",
        content: "The Git-native control plane for coding agents",
      },
      {
        property: "og:description",
        content:
          "Let agents write code. Keep authority, observed proof, recovery, and closure in Git.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "The Git-native control plane for coding agents",
      },
      {
        name: "twitter:description",
        content:
          "Let agents write code. Keep authority, observed proof, recovery, and closure in Git.",
      },
      { name: "twitter:site", content: "@agentplaneorg" },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: "Agentplane Logo",
        src: "img/agentplane.svg",
        width: 160,
        height: 32,
      },
      items: [
        {
          to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/index.mdx",
          label: "Docs",
          position: "left",
        },
        {
          to: "/examples",
          label: "Examples",
          position: "left",
          activeBaseRegex: "^/examples",
        },
        {
          to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/compare.mdx",
          label: "Compare",
          position: "left",
        },
        {
          to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/start/quickstart.mdx",
          label: "Quickstart",
          position: "left",
          className: "navbar-quickstart-cta",
        },
        {
          href: "https://www.npmjs.com/package/agentplane",
          label: "npm i -g agentplane",
          position: "right",
          className: "navbar-install-command",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Product",
          items: [
            {
              label: "What is Agentplane",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/user/overview.mdx",
            },
            {
              label: "Quickstart",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/start/quickstart.mdx",
            },
            {
              label: "Upgrade to 0.7",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/user/v0-7-migration.mdx",
            },
            {
              label: "Examples",
              to: "/examples",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Agent Change Records",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/reference/acr.mdx",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "Harness engineering",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/concepts/harness-engineering.mdx",
            },
            {
              label: "Context engineering",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/concepts/context-engineering.mdx",
            },
            {
              label: "Traces",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/concepts/traces.mdx",
            },
            {
              label: "CLI Reference",
              to: "https://github.com/basilisk-labs/agentplane/blob/main/docs/user/cli-reference.generated.mdx",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              href: githubRepoUrl,
            },
            {
              label: "Contributing",
              href: "https://github.com/basilisk-labs/agentplane/blob/main/CONTRIBUTING.md",
            },
            {
              label: "Issues",
              href: "https://github.com/basilisk-labs/agentplane/issues",
            },
            {
              label: "Discussions",
              href: "https://github.com/basilisk-labs/agentplane/discussions",
            },
            {
              label: "Roadmap",
              href: "https://github.com/basilisk-labs/agentplane/blob/main/ROADMAP.md",
            },
            {
              label: "Releases",
              href: "https://github.com/basilisk-labs/agentplane/releases",
            },
            {
              label: "Security",
              href: "https://github.com/basilisk-labs/agentplane/blob/main/SECURITY.md",
            },
            {
              label: "License",
              href: "https://github.com/basilisk-labs/agentplane/blob/main/LICENSE",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agentplane.`,
    },
  } satisfies Preset.ThemeConfig,
  customFields: {
    gtmContainerId,
    gaMeasurementId,
    githubRepoUrl,
  },
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicon-32x32.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicon-16x16.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/apple-touch-icon.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    },
  ],
} satisfies Config;

export default config;

import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { ConnectWalletButton } from "@/components/ui/connect-button";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import { Typography } from "@/components/ui/typography";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";
import {
  EXAMPLE_PAGE_CONFIG,
  TYPOGRAPHY_EXAMPLES,
  BUTTON_EXAMPLES,
  STYLES,
} from "@/lib/example-constants";

interface Props {}

const ExamplePage: NextPage<Props> = ({}) => {
  return (
    <PageLayout
      title={EXAMPLE_PAGE_CONFIG.title}
      description={EXAMPLE_PAGE_CONFIG.description}
      flexDirection={EXAMPLE_PAGE_CONFIG.layout.flexDirection}
      justify={EXAMPLE_PAGE_CONFIG.layout.justify}
      align={EXAMPLE_PAGE_CONFIG.layout.align}
      gap={EXAMPLE_PAGE_CONFIG.layout.gap}
    >
      <div className={STYLES.typographyContainer}>
        <Typography variant="h1">{TYPOGRAPHY_EXAMPLES.h1}</Typography>
        <Typography variant="h2">{TYPOGRAPHY_EXAMPLES.h2}</Typography>
        <Typography variant="h3">{TYPOGRAPHY_EXAMPLES.h3}</Typography>
        <Typography variant="h4">{TYPOGRAPHY_EXAMPLES.h4}</Typography>

        <Typography variant={"paragraph"}>{TYPOGRAPHY_EXAMPLES.paragraph}</Typography>
        <Typography variant={"small"}>{TYPOGRAPHY_EXAMPLES.small}</Typography>
        <Typography variant={"extraSmall"}>{TYPOGRAPHY_EXAMPLES.extraSmall}</Typography>
        <Typography variant={"muted"}>{TYPOGRAPHY_EXAMPLES.muted}</Typography>
        <Typography variant={"lead"}>{TYPOGRAPHY_EXAMPLES.lead}</Typography>
        <Typography variant={"large"}>{TYPOGRAPHY_EXAMPLES.large}</Typography>
        <Typography variant={"blockquote"}>{TYPOGRAPHY_EXAMPLES.blockquote}</Typography>
        <Typography variant={"list"}>
          {TYPOGRAPHY_EXAMPLES.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Typography>
        <Typography variant={"inlineCode"}>{TYPOGRAPHY_EXAMPLES.inlineCode}</Typography>
      </div>

      <div className={STYLES.buttonContainer}>
        <Typography variant="h1">{BUTTON_EXAMPLES.title}</Typography>
        <ThemeToggler />
        <Button>{BUTTON_EXAMPLES.variants.default}</Button>
        <Button variant="destructive">{BUTTON_EXAMPLES.variants.destructive}</Button>
        <Button variant="outline">{BUTTON_EXAMPLES.variants.outline}</Button>
        <Button variant="secondary">{BUTTON_EXAMPLES.variants.secondary}</Button>
        <Button variant="ghost">{BUTTON_EXAMPLES.variants.ghost}</Button>
        <Button variant="link">{BUTTON_EXAMPLES.variants.link}</Button>
        <ConnectButton />
        <ConnectWalletButton />
      </div>
    </PageLayout>
  );
};

export default ExamplePage;

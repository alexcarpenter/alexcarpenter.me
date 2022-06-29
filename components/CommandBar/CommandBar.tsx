import * as React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import {
  KBarProvider,
  KBarPositioner,
  KBarAnimator,
  KBarResults,
  KBarSearch,
  useMatches,
  useKBar,
  VisualState,
} from "kbar";
import { OverlayContainer } from "@react-aria/overlays";
import { FocusScope } from "@react-aria/focus";
import { useActions } from "@/hooks/useActions";
import * as styles from "./CommandBar.css";

export const CommandBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const actions = useActions();
  return <KBarProvider actions={actions}>{children}</KBarProvider>;
};

export const CommandBar = () => {
  const { showing } = useKBar((state) => ({
    showing: state.visualState !== VisualState.hidden,
  }));
  return showing ? (
    <OverlayContainer>
      <FocusScope contain restoreFocus autoFocus>
        <KBarPositioner className={styles.overlay}>
          <KBarAnimator className={styles.dialog}>
            <KBarSearch
              className={styles.searchInput}
              placeholder="Type a command or search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </FocusScope>
    </OverlayContainer>
  ) : null;
};

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === "string" ? (
          <p className={styles.resultHeading}>{item}</p>
        ) : (
          <div className={clsx(styles.result, active && styles.active)}>
            {item.icon ? item.icon : null}
            {item.name}
          </div>
        );
      }}
    />
  );
}

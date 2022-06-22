import * as React from "react";
import clsx from "clsx";
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
        <KBarPositioner
          className={clsx(
            "fixed inset-0 z-50 backdrop-blur-sm",
            "bg-white/75",
            "dark:bg-black/75"
          )}
        >
          <KBarAnimator
            className={clsx(
              "max-w-[600px] mx-auto w-full border rounded-md overflow-hidden",
              "bg-white border-gray-200",
              "dark:bg-black dark:border-gray-700"
            )}
          >
            <KBarSearch
              className={clsx(
                "p-4 w-full border-b outline-none",
                "bg-white border-gray-200",
                "dark:bg-gray-800 dark:border-gray-700"
              )}
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
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <p className="px-4 py-2">{item}</p>
        ) : (
          <div
            className={clsx(
              "px-4 py-2 pl-8 cursor-pointer",
              "bg-trasparent",
              active && "bg-gray-100 dark:bg-gray-800"
            )}
          >
            {item.name}
          </div>
        )
      }
    />
  );
}

import { ThemeSwitch } from "./theme-switch";
export function Footer() {
  return (
    <footer className="pt-16">
      <div className="grid gap-x-16 gap-y-4 md:grid-cols-4">
        <div className="md:col-start-2">
          <ThemeSwitch />
        </div>

        <div className="md:col-start-4">
          <p className="text-foreground">“Less but better”</p>
          <p className="text-foreground-neutral">
            &nbsp;&nbsp;&mdash; Dieter Rams
          </p>
        </div>
      </div>
    </footer>
  );
}

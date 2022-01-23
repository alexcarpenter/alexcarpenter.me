import { cx } from "@/lib/utils";
import RightArrow from "@/components/RightArrow";
import ThemeSelect from "@/components/ThemeSelect";

const socialData: Array<{ label: string; href: string }> = [
  {
    label: "Github",
    href: "https://github.com/alexcarpenter",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/hybrid_alex",
  },
  {
    label: "Email",
    href: "mailto:im.alexcarpenter@gmail.com",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alexcarp/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imalexcarpenter/",
  },
];

const Footer = () => {
  return (
    <footer
      className={cx(
        "pt-12 mt-12 border-t",
        "border-gray-200",
        "dark:border-gray-700"
      )}
    >
      <h2 className="sr-only">Connect</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="col-span-2">
          <ul className="grid grid-cols-2 gap-4">
            {socialData.map((item, index) => {
              return (
                <li key={index}>
                  <RightArrow position="start" />
                  <a href={item.href} className="underline hover:no-underline">
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ThemeSelect />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

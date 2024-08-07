import sindresorhusSlugify from "@sindresorhus/slugify";

export const slugify = (text: string): string => {
  return sindresorhusSlugify(text, { decamelize: false });
};

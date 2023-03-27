import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Link from "./Link";

const LANGUAGE_NAMES = {
  fr: "Français",
  en: "English",
};

export default function Languages() {
  const { asPath, locale: activeLocale, locales } = useRouter();
  const [cookie, setCookie] = useCookies(["NEXT_LOCALE"]);

  return (
    <ul role="list">
      {locales?.map((locale) => (
        <li key={locale}>
          <Link
            href={asPath}
            locale={locale}
            variant="underline-inverse"
            aria-current={locale === activeLocale ? "page" : undefined}
            onClick={() => {
              if (cookie.NEXT_LOCALE !== locale) {
                setCookie("NEXT_LOCALE", locale, { path: "/" });
              }
            }}
          >
            {LANGUAGE_NAMES[locale as "fr" | "en"]}
          </Link>
        </li>
      ))}
    </ul>
  );
}

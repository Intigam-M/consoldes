"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { i18n } from "@/i18n"

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = locale => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map(locale => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

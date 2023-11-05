import { usePathname } from "next/navigation";

export const useCurrentLang = () => {
    const pathName = usePathname()
    if (pathName.includes('/az')) {
        return 'az'
    } else if (pathName.includes('/en')) {
        return 'en'
    }
}
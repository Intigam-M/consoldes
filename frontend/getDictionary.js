import 'server-only'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    az: () => import('@/dictionaries/az.json').then((module) => module.default),
}

export const getDictionary = async locale =>
  dictionaries[locale]?.() ?? dictionaries.en()

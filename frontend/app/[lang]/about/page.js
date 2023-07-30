import AboutContainer from '@/containers/about'
import { getDictionary } from '@/getDictionary'

async function AboutPage({ params }) {
    const lang = await getDictionary(params.lang)
    return <AboutContainer lang={lang} />
}

export default AboutPage
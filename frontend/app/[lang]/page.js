import HomeContainer from '@/containers/home'
import { getDictionary } from '@/getDictionary'

async function page({ params }) {
    const dictionary  = await getDictionary(params.lang)
    return <HomeContainer dictionary={dictionary.homePage } currentLang={params.lang}/>
}

export default page
import { getDictionary } from '@/getDictionary'

const dictionary  = await getDictionary(params.lang)

export const pathContent = {
    front_end_development:{   
        mainTitle: 'Front-End Development',
        secondTitle: dictionary.learningPath.front_end_development.secondTitle,
        mainContent: 'Peşəkar Developer kimi karyera qurmağa çalışırsınızsa, ilk üç və altı ayı Proqramlaşdırma Dillərinin əsaslarını mənimsəməyə həsr etməlisiniz.',
        sections: [
            {
                title: 'HTML & CSS',
                content: 'Front-end Development HTML və CSS ilə başlayır. Bunlar İnternetdəki hər veb səhifənin arxasındakı proqramlaşdırma dilləridir.',
                course: false,
                level: false
            },
            {
                title: 'JavaScript',
                content: 'HTML və CSS yalnız statik səhifələr yaratmaq üçün istifadə olunur. Səhifəyə funksionallıq əlavə etmək üçün JavaScript-i öyrənməlisiniz.',
                course: 'JavaScript Part 1: Fundamental Biliklər',
                level: 'Başlanğıc Səviyyə. 5s'
            },
            {
                title: 'Libraries and Frameworks',
                content: 'Müasir proqramlar mürəkkəbdir. Məhz burada qabaqcıl tool-lar (library/framework) köməyə gəlir və bizə proqramları daha tez yaratmağa və göndərməyə kömək edir. Bunlardan ən məşhur olanı  React-dir, ona görə də əvvəlcə onu öyrənməyinizi tövsiyə edirəm. Lazım olduqda digər tool-lar haqqında həmişə öyrənə bilərsiniz.',
                course: 'React 18 for Beginners',
                level: 'Başlanğıc Səviyyə. 1s 37d'
            },
            {
                title: 'Version Control and Collaboration',
                content: 'Versiyaya nəzarət proqram mühəndisləri üçün zaman maşını kimidir. Bu, keçmişə qayıtmağa və istənilən anda kodunuzun dəqiq vəziyyətini görməyə imkan verir. Bu inanılmaz dərəcədə vacibdir, çünki o deməkdir ki, siz dəyişiklikləri asanlıqla izləyə, səhvləri düzəldə və kodunuzu itirmək və ya qarışdırmaq qorxusu olmadan başqaları ilə əməkdaşlıq edə bilərsiniz.',
                course: false,
                level: false
            },
            {
                title: 'DevOps',
                content: 'Bu günlərdə getdikcə daha çox şirkət DevOps haqqında bir az bilən proqram mühəndisləri axtarır: proqram təminatının çatdırılması üçün bir sıra təcrübələr. Docker bu məkanda istifadə olunan əsas vasitədir. Bunu bilmək proqram mühəndisliyinin daha yüksək səviyyələrinə çatmağınıza kömək edir.',
                course: false,
                level: false
            },
            
        ],
    },
    back_end_development:{   
        mainTitle: 'Back-End Development',
        secondTitle: 'The essential skills every front-end developer must have.',
        mainContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
        sections: [
            {
                title: 'HTML & CSS',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            {
                title: 'JavaScript',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: 'JavaScript Part 1: Fundamentals',
                level: 'Beginner. 5h'
            },
            {
                title: 'Libraries and Frameworks',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: 'React 18 for Beginners',
                level: 'Beginner. 1h 30m'
            },
            {
                title: 'Version Control and Collaboration',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            {
                title: 'DevOps',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            
        ],
    },
    mobil_development:{   
        mainTitle: 'Mobil Development',
        secondTitle: 'The essential skills every front-end developer must have.',
        mainContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
        sections: [
            {
                title: 'HTML & CSS',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            {
                title: 'JavaScript',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: 'JavaScript Part 1: Fundamentals',
                level: 'Beginner. 5h'
            },
            {
                title: 'Libraries and Frameworks',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: 'React 18 for Beginners',
                level: 'Beginner. 1h 30m'
            },
            {
                title: 'Version Control and Collaboration',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            {
                title: 'DevOps',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            
        ],
    },
    game_development:{   
        mainTitle: 'Game Development',
        secondTitle: 'The essential skills every front-end developer must have.',
        mainContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset',
        sections: [
            {
                title: 'HTML & CSS',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            {
                title: 'JavaScript',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: 'JavaScript Part 1: Fundamentals',
                level: 'Beginner. 5h'
            },
            {
                title: 'Libraries and Frameworks',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: 'React 18 for Beginners',
                level: 'Beginner. 1h 30m'
            },
            {
                title: 'Version Control and Collaboration',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            {
                title: 'DevOps',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
                course: false,
                level: false
            },
            
        ],
    }
    
    
};


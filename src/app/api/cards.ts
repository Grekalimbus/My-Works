export interface ICard {
    name:string
    image: string[],
    title: string,
    technology: string[]
    repo: string
    demo?: string
}

export const cards: ICard[] = [
    {name: 'Trend Shoes',
    image: ['https://picsum.photos/600', 'https://picsum.photos/601', 'https://picsum.photos/602'],
    title: 'К тестовым заданиям я пока не готов, т.к моё время ограничено и не могу делать тестовое задание на каждую вакансию, но у меня есть портфолио, которое может сказать о моем опыте и о том, как я пишу код и выполняю разные задачи. Также видно мою активность на гитхабе.',
    technology: ['html', 'css', 'JS', "React"],
    repo: 'https://github.com/Grekalimbus/Miner',
    demo: "https://miner-git-main-grekalimbus-s-team.vercel.app/"}
    
]
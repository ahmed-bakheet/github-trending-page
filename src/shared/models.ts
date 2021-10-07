export interface Repo{
    builtBy: RepoDeveloperMeta[]
    description: string
    forks: number
    language: string
    languageColor: string
    rank: number
    repositoryName: string
    since: string
    starsSince: number
    totalStars: number
    url: string
    username: string
}

export interface RepoDeveloperMeta {
    avatar: string
    url: string
    username: string
}

export interface Developer {
    avatar: string
    name: string
    popularRepository: DeveloperRepoMeta
    rank: number
    since: string
    url: string
    username: string
}

export interface DeveloperRepoMeta{
    description: "✨My portfolio built with Next.js, Tailwind, Prisma, and Vercel."
    repositoryName: "leerob.io"
    url: "https://github.com/leerob/leerob.io"
}
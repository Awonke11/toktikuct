export type Post = {
    accountId: number,
    title: string,
    description: string,
    video: string,
    likes: number
}

export type UserDetails = {
    accountId: number,
    name: string,
    email: string,
    password: string,
    description: string
    followers: number,
    posts: Array<Post>
}
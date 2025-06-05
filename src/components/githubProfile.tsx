'use client'
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Button } from "./ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { useState, useEffect } from "react"
import Link from "next/link"
import axios from "axios"

interface GithubProfile {
    login: string
    avatar_url: string
    html_url: string
    name: string
    location: string
    hireable: boolean
    bio: string | null
    public_repos: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}

const fetchGithubProfile = async (username: string): Promise<GithubProfile | null> => {
    const res = await axios.get(`https://api.github.com/users/${username}`)
        .then((res) => {
            return res.data as GithubProfile
        }).catch((err) => {
            console.log(err)
            return null
        })
    return res
}

export const GithubHoverCard = ({ username, children: children }: { username: string, children: React.ReactNode }) => {
    const [profile, setProfile] = useState<GithubProfile | null>()

    useEffect(() => {
        fetchGithubProfile(username).then((res) => {
            if (res) {
                setProfile(res)
            }
        })
    }, [fetchGithubProfile, setProfile, username])

    return <HoverCard>
        <HoverCardTrigger asChild>
            <Button variant={'link'} className="hover:no-underline">{children}</Button>
        </HoverCardTrigger>
        {profile &&
            <HoverCardContent className="bg-gray-50/60 dark:bg-black/50 top-0 ml-4 backdrop-blur-3xl rounded-lg p-4 border-[2px] w-full">
                <section className="flex flex-wrap items-end gap-4">
                    <Avatar className="size-20">
                        <AvatarImage src={profile.avatar_url} alt={profile.name} />
                        <AvatarFallback>{profile.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <article>
                        <h1 className="text-lg font-bold">{profile.name}</h1>
                        <h2 className="font-semibold">{username}</h2>
                    </article>
                </section>
                <div className="flex flex-col gap-1">
                    <div className="text-sm text-gray-500">{profile.location} 📍</div>
                    <div className="text-sm text-gray-500">{profile.bio}</div>
                </div>
                <Button className="mt-2 w-full">
                    <Link href={profile.html_url} className="cursor-pointer" target="_blank">View Profile</Link>
                </Button>
                {/* <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-500">Repositories: {profile.public_repos}</div>
                <div className="text-sm text-gray-500">Followers: {profile.followers}</div>
                <div className="text-sm text-gray-500">Following: {profile.following}</div>
            </div> */}
            </HoverCardContent>
        }
    </HoverCard>
}
import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

// shortcut: profile is hardcoded, move to MongoDB when editing is needed
const profile = {
  name: "김유나",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요!",
  imageUrl: "/profile.jpg",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 py-16">
      <Profile {...profile} />
      <ul className="mt-10 flex w-full flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={`/go/${link.id}`} />
          </li>
        ))}
      </ul>
    </main>
  );
}

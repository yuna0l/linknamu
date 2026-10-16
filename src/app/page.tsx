import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// shortcut: profile and links are hardcoded, move to MongoDB when editing is needed
const profile = {
  name: "김유나",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요!",
  imageUrl: "/profile.jpg",
};

const links = [
  { title: "🎀  인스타", url: "https://www.instagram.com/yuna_au" },
  { title: "👀  블로그", url: "https://blog.naver.com/kimyuna03140" },
  { title: "🐱  깃허브", url: "https://github.com/yuna0l" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 py-16">
      <Profile {...profile} />
      <ul className="mt-10 flex w-full flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.url}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}

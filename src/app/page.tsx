import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// shortcut: profile and links are hardcoded, move to MongoDB when editing is needed
const profile = {
  name: "김유나",
  bio: "열심히 프로젝트 만드는 중",
  imageUrl: "/profile.jpg",
};

const links = [
  { title: "Instagram", url: "https://instagram.com" },
  { title: "GitHub", url: "https://github.com" },
  { title: "블로그", url: "https://velog.io" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-12">
      <Profile {...profile} />
      <ul className="mt-10 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.url}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>
    </main>
  );
}

type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/70 bg-white/45 px-5 py-4 whitespace-pre-wrap text-center text-[15px] font-medium text-stone-700 shadow-[0_4px_20px_-8px_rgba(190,120,130,0.25)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/65 hover:shadow-[0_8px_24px_-8px_rgba(190,120,130,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
    >
      {title}
    </a>
  );
}

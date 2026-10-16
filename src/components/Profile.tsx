type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_10px_30px_-10px_rgba(190,120,130,0.5)]"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-28 w-28 items-center justify-center rounded-full bg-white/70 text-4xl font-semibold text-rose-400 ring-4 ring-white/80 shadow-[0_10px_30px_-10px_rgba(190,120,130,0.5)]"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{bio}</p>
    </header>
  );
}

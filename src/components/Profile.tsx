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
          className="h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-100 text-5xl font-bold text-emerald-700"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-gray-500">{bio}</p>
    </header>
  );
}

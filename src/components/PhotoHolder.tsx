import Image from "next/image";

interface PhotoHolderProps {
  src?: string;
  alt?: string;
  aspect?: "landscape" | "portrait" | "square" | "cinema" | "wide" | "auto";
  className?: string;
  priority?: boolean;
}

const aspectClasses = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  cinema: "aspect-[16/9]",
  wide: "aspect-[21/9]",
  auto: "",
};

export default function PhotoHolder({
  src,
  alt = "Project image",
  aspect = "landscape",
  className = "",
  priority = false,
}: PhotoHolderProps) {
  return (
    <div
      className={`photo-holder rounded-sm ${aspectClasses[aspect]} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
          priority={priority}
        />
      ) : (
        <div className="absolute inset-0 photo-shimmer flex items-center justify-center">
          <div className="text-mid-grey/40 font-label text-xs tracking-widest">
            {alt}
          </div>
        </div>
      )}
    </div>
  );
}

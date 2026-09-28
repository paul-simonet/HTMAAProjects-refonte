import { ReactNode } from "react";

type Shape = "portrait" | "tall" | "natural";

type FigureProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  shape?: Shape;
};

// A photo with an optional caption.
export const Photo = ({ src, alt, caption, shape = "natural" }: FigureProps) => (
  <figure className={shape === "natural" ? undefined : shape}>
    <img src={src} alt={alt} loading="lazy" />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

type VideoProps = {
  src: string;
  poster: string;
  label: string;
  caption?: ReactNode;
  shape?: Shape;
  className?: string;
};

// A video that only loads when the visitor presses play.
export const Clip = ({ src, poster, label, caption, shape = "natural", className }: VideoProps) => (
  <figure className={[shape === "natural" ? "" : shape, className ?? ""].join(" ").trim() || undefined}>
    <video src={src} poster={poster} controls preload="none" playsInline aria-label={label} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

type EmbedProps = { id: string; title: string; caption?: ReactNode };

// A YouTube video, loaded from the privacy-enhanced domain.
export const YouTube = ({ id, title, caption }: EmbedProps) => (
  <figure>
    <div className="embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

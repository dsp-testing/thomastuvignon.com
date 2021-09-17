import Image from "next/image";

export default function Media({ block }) {
  return (
    <section className="grid" aria-label={block.title}>
      {block.imagesCollection.items.map((image) => (
        <div
          style={{
            "--grid-column-md": block.layout !== "Full width" ? "span 6" : null,
            "--grid-column-lg": block.layout === "3 columns" ? "span 4" : null,
          }}
          data-aos="fade-up"
          key={image.sys.id}
        >
          <figure>
            <Image
              src={image.url}
              alt={block.title}
              width={image.width}
              height={image.height}
              layout="responsive"
              sizes="(min-width: 75em) 1040px, (min-width: 64em) 880px, (min-width: 48em) 640px, (min-width: 35em) 480px, 100vw"
              placeholder="blur"
              blurDataURL={`/_next/image?url=${image.url}&w=16&q=1`}
            />
          </figure>
        </div>
      ))}
    </section>
  );
}

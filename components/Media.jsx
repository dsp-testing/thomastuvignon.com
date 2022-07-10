import { motion } from "framer-motion";
import Image from "./Image";

export default function Media({ block }) {
  return (
    <section data-container="" aria-label={block.title}>
      {block.imagesCollection.items.map((image) => (
        <motion.div
          style={{
            "--grid-column-md": block.layout !== "Full width" ? "span 6" : null,
            "--grid-column-lg": block.layout === "3 columns" ? "span 4" : null,
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          key={image.sys.id}
        >
          <figure>
            <Image
              src={image.url}
              alt={image.description || ""}
              width={image.width}
              height={image.height}
              layout="responsive"
              sizes="(min-width: 1200px) 1040px, (min-width: 1024px) 880px, (min-width: 768px) 640px, (min-width: 560px) 480px, 100vw"
            />
          </figure>
        </motion.div>
      ))}
    </section>
  );
}

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { News } from "@/app/data"

export const Card = ({ item, index, length }: { item: News, index: number, length: number }) => {
    const { name, description, link, image, type, id, cta } = item
    // Responsive grid: base 1 column, sm and above 2 columns
    const columnsSm = 2
    const rowIndexSm = Math.floor(index / columnsSm)
    const rowsSm = Math.ceil(length / columnsSm)
    const isLastColumnSm = (index % columnsSm) === columnsSm - 1
    const isLastRowSm = rowIndexSm === rowsSm - 1
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group p-2"
        >
            <div className="relative">
                {/* Lines: Top & Left always. Right only for last column at sm+, Bottom only for last row at sm+ */}
                {/* Top horizontal (shared between rows) */}
                <div className={`absolute -top-2 md:-top-4 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800 block `}></div>

                {/* Left vertical (shared between columns or outer left) */}
                <div className="absolute bottom-0 -left-2 md:-left-4 w-px h-full bg-zinc-200 dark:bg-zinc-800"></div>

                {/* Right vertical: always on mobile; only for last column at sm+ */}
                <div className={`absolute bottom-0 -right-2 md:-right-4 w-px h-full bg-zinc-200 dark:bg-zinc-800 block ${isLastColumnSm ? 'sm:block' : 'sm:hidden'}`}></div>

                {/* Bottom horizontal: always on mobile; only for last row at sm+ */}
                <div className={`absolute -bottom-2 md:-bottom-4 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800 block ${isLastRowSm ? 'sm:block' : 'sm:hidden'}`}></div>

                <Link
                    href={link}
                    data-id={id}
                    className="block relative overflow-hidden bg-zinc-50/40 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 transition-all duration-300 hover:ring-zinc-300/70 dark:hover:ring-zinc-700/70"
                >
                    {/* Image Container */}
                    <div className="relative aspect-[1/1] overflow-hidden">
                        <Image 
                            src={image} 
                            alt={name} 
                            fill
                            className="object-cover" 
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
                        
                        {/* Type Badge - Top Left */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute top-4 left-4"
                        >
                            <span className="inline-flex items-center text-xs font-extralight uppercase tracking-wider text-white">
                                {type}
                            </span>
                        </motion.div>
                        
                        {/* CTA Button - Top Right */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="absolute top-4 right-4"
                        >
                            <span className="inline-flex items-center text-xs font-extralight uppercase tracking-wider text-white">
                                {cta}
                            </span>
                        </motion.div>
                        
                        {/* Content - Bottom Left */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="absolute bottom-4 left-4 right-4"
                        >
                            <div className="space-y-2">
                                <h3 className="text-xl font-normal text-white leading-tight">
                                    {name}
                                </h3>
                                <p className="text-sm font-normal text-white/80 leading-relaxed line-clamp-2">
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}
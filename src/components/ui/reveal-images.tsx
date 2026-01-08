import { cn } from "@/lib/utils";

interface ImageSource {
    src: string;
    alt: string;
}

interface ShowImageListItemProps {
    text: string;
    images: [ImageSource, ImageSource];
    className?: string;
    textClassName?: string;
}

function RevealImageListItem({ text, images, className, textClassName }: ShowImageListItemProps) {
    const container = "absolute right-0 -top-4 z-40 h-24 w-20";
    const effect =
        "relative duration-500 delay-100 shadow-none group-hover:shadow-2xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-20 h-20 overflow-hidden transition-all rounded-xl border border-white/10";

    return (
        <div className={cn("group relative h-fit w-full overflow-visible py-4 border-b border-white/5 last:border-0", className)}>
            <h3 className={cn("text-2xl md:text-3xl font-display font-medium text-white/70 transition-all duration-500 group-hover:text-white group-hover:translate-x-2", textClassName)}>
                {text}
            </h3>

            <div className={container}>
                <div className={effect}>
                    <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
                </div>
            </div>

            <div
                className={cn(
                    container,
                    "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-8 group-hover:translate-y-6 group-hover:rotate-12",
                )}
            >
                <div className={cn(effect, "duration-200")}>
                    <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export { RevealImageListItem };

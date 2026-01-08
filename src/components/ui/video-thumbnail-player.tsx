import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

// Interface for component props
interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
    thumbnailUrl: string;
    videoUrl: string;
    title: string;
    description?: string;
    aspectRatio?: "16/9" | "4/3" | "1/1";
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
    (
        {
            className,
            thumbnailUrl,
            videoUrl,
            title,
            description,
            aspectRatio = "16/9",
            ...props
        },
        ref
    ) => {
        // State to manage the visibility of the video modal
        const [isModalOpen, setIsModalOpen] = React.useState(false);

        // Effect to handle the 'Escape' key press for closing the modal
        React.useEffect(() => {
            const handleEsc = (event: KeyboardEvent) => {
                if (event.key === "Escape") {
                    setIsModalOpen(false);
                }
            };
            window.addEventListener("keydown", handleEsc);
            return () => {
                window.removeEventListener("keydown", handleEsc);
            };
        }, []);

        // Prevent body scroll when modal is open
        React.useEffect(() => {
            if (isModalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }, [isModalOpen]);

        const isLocalVideo = videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.ogg');

        return (
            <>
                <div
                    ref={ref}
                    className={cn(
                        "group relative cursor-pointer overflow-hidden rounded-[2rem] shadow-2xl border border-white/10",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        className
                    )}
                    style={{ aspectRatio }}
                    onClick={() => setIsModalOpen(true)}
                    onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
                    tabIndex={0}
                    aria-label={`Play video: ${title}`}
                    {...props}
                >
                    {/* Thumbnail Image */}
                    <img
                        src={thumbnailUrl}
                        alt={`Thumbnail for ${title}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/40">
                            <Play className="h-8 w-8 fill-primary text-primary" />
                        </div>
                    </div>

                    {/* Title and Description */}
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                        {description && (
                            <p className="mt-2 text-sm text-slate-300 font-medium tracking-wide uppercase">{description}</p>
                        )}
                    </div>
                </div>

                {/* Video Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-[100] flex animate-in fade-in-0 duration-300 items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-8"
                        aria-modal="true"
                        role="dialog"
                        onClick={() => setIsModalOpen(false)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-6 top-6 z-[110] rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
                            aria-label="Close video player"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Video Container */}
                        <div
                            className="w-full max-w-5xl aspect-video relative shadow-2xl rounded-[2rem] overflow-hidden border border-white/10 bg-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {isLocalVideo ? (
                                <video
                                    src={videoUrl}
                                    controls
                                    autoPlay
                                    className="h-full w-full object-contain"
                                />
                            ) : (
                                <iframe
                                    src={videoUrl}
                                    title={title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="h-full w-full"
                                ></iframe>
                            )}
                        </div>
                    </div>
                )}
            </>
        );
    }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };

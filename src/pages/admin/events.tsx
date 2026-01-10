import { useState, useEffect } from "react";
import AdminLayout from "./layout";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Calendar as CalendarIcon, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Event {
    _id?: string;
    title: string;
    type: string;
    date: string;
    location: string;
    status: string;
    image: string;
}

export default function AdminEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState<Event>({
        title: "",
        type: "Workshop",
        date: "",
        location: "",
        status: "Available",
        image: "",
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await fetch("/api/admin/events");
            const data = await res.json();
            if (data.events) setEvents(data.events);
        } catch (error) {
            toast({ title: "Error", description: "Failed to fetch events", variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (event: Event | null = null) => {
        if (event) {
            setCurrentEvent(event);
            setFormData(event);
        } else {
            setCurrentEvent(null);
            setFormData({ title: "", type: "Workshop", date: "", location: "", status: "Available", image: "" });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const method = currentEvent?._id ? "PUT" : "POST";
            const body = currentEvent?._id ? { ...formData, id: currentEvent._id } : formData;

            const res = await fetch("/api/admin/events", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                toast({ title: "Success", description: `Event ${currentEvent ? "updated" : "created"} successfully` });
                setIsModalOpen(false);
                fetchEvents();
            } else {
                throw new Error();
            }
        } catch (error) {
            toast({ title: "Error", description: "Operation failed", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this event?")) return;
        try {
            const res = await fetch(`/api/admin/events?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                toast({ title: "Deleted", description: "Event removed successfully" });
                fetchEvents();
            }
        } catch (error) {
            toast({ title: "Error", description: "Delete failed", variant: "destructive" });
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">Manage Events</h1>
                    <p className="text-slate-400 mt-2 font-body">Manage workshops, bootcamps and webinars</p>
                </div>
                <Button onClick={() => handleOpenModal()} className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90">
                    <Plus className="mr-2 h-5 w-5" /> Add New Event
                </Button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <motion.div
                            key={event._id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="aspect-[4/3] relative">
                                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase">
                                    {event.type}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{event.title}</h3>
                                <div className="flex items-center gap-4 text-slate-400 text-sm mb-6">
                                    <div className="flex items-center gap-1">
                                        <CalendarIcon className="h-4 w-4 text-primary" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        {event.location}
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm" onClick={() => handleOpenModal(event)} className="flex-1 rounded-xl border-white/10 hover:bg-primary/10 hover:text-primary">
                                        <Pencil className="mr-2 h-4 w-4" /> Edit
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => event._id && handleDelete(event._id)} className="rounded-xl">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-10 overflow-y-auto max-h-[90vh]"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 font-display">{currentEvent ? "Edit Event" : "Create Event"}</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Event Title</label>
                                        <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. Logic over Emotion" required className="bg-white/[0.03] border-white/5 rounded-xl" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Type</label>
                                        <Input value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} placeholder="Workshop / Bootcamp" className="bg-white/[0.03] border-white/5 rounded-xl" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Status</label>
                                        <Input value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} placeholder="Available / Soon" className="bg-white/[0.03] border-white/5 rounded-xl" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Date</label>
                                        <Input value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} placeholder="e.g. Jan 15" className="bg-white/[0.03] border-white/5 rounded-xl" />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Location</label>
                                        <Input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Calicut" className="bg-white/[0.03] border-white/5 rounded-xl" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Image URL</label>
                                        <Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="e.g. /src/assets/event1.jpeg" className="bg-white/[0.03] border-white/5 rounded-xl" />
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <Button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-xl bg-primary text-white font-bold">
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : currentEvent ? "Save Changes" : "Create Event"}
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </AdminLayout>
    );
}

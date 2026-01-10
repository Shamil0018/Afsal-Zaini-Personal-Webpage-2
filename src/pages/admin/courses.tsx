import { useState, useEffect } from "react";
import AdminLayout from "./layout";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Check, Loader2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Course {
    _id?: string;
    title: string;
    image: string;
    description: string;
    features: string[];
}

export default function AdminCourses() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState<Course>({
        title: "",
        image: "",
        description: "",
        features: [""],
    });

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const res = await fetch("/api/admin/courses");
            const data = await res.json();
            if (data.courses) setCourses(data.courses);
        } catch (error) {
            toast({ title: "Error", description: "Failed to fetch courses", variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (course: Course | null = null) => {
        if (course) {
            setCurrentCourse(course);
            setFormData(course);
        } else {
            setCurrentCourse(null);
            setFormData({ title: "", image: "", description: "", features: [""] });
        }
        setIsModalOpen(true);
    };

    const handleAddFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ""] });
    };

    const handleFeatureChange = (index: number, value: string) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData({ ...formData, features: newFeatures });
    };

    const handleRemoveFeature = (index: number) => {
        const newFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({ ...formData, features: newFeatures });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const method = currentCourse?._id ? "PUT" : "POST";
            const body = currentCourse?._id ? { ...formData, id: currentCourse._id } : formData;

            const res = await fetch("/api/admin/courses", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                toast({ title: "Success", description: `Course ${currentCourse ? "updated" : "created"} successfully` });
                setIsModalOpen(false);
                fetchCourses();
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
        if (!confirm("Are you sure you want to delete this course?")) return;
        try {
            const res = await fetch(`/api/admin/courses?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                toast({ title: "Deleted", description: "Course removed successfully" });
                fetchCourses();
            }
        } catch (error) {
            toast({ title: "Error", description: "Delete failed", variant: "destructive" });
        }
    };

    return (
        <AdminLayout>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-bold text-white tracking-tight">Manage Courses</h1>
                    <p className="text-slate-400 mt-2 font-body">Add or edit your signature programs</p>
                </div>
                <Button onClick={() => handleOpenModal()} className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90">
                    <Plus className="mr-2 h-5 w-5" /> Add New Course
                </Button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <motion.div
                            key={course._id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{course.title}</h3>
                                <div className="flex gap-4">
                                    <Button variant="outline" size="sm" onClick={() => handleOpenModal(course)} className="flex-1 rounded-xl border-white/10 hover:bg-primary/10 hover:text-primary">
                                        <Pencil className="mr-2 h-4 w-4" /> Edit
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={() => course._id && handleDelete(course._id)} className="rounded-xl">
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
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh]"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute right-8 top-8 text-slate-400 hover:text-white transition-colors">
                                <X className="h-6 w-6" />
                            </button>

                            <h2 className="text-3xl font-bold text-white mb-8">{currentCourse ? "Edit Course" : "Create New Course"}</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Course Title</label>
                                    <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. Boss Backbone Leadership" required className="bg-white/[0.03] border-white/5 rounded-xl h-12" />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Image URL</label>
                                    <Input value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="Paste image asset path or URL" required className="bg-white/[0.03] border-white/5 rounded-xl h-12" />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 block">Description</label>
                                    <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="Architected for high-level business owners..." rows={4} className="bg-white/[0.03] border-white/5 rounded-2xl resize-none p-4" />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 block">Key Features / Objectives</label>
                                    <div className="space-y-3">
                                        {formData.features.map((feature, idx) => (
                                            <div key={idx} className="flex gap-2">
                                                <Input value={feature} onChange={(e) => handleFeatureChange(idx, e.target.value)} placeholder={`Feature ${idx + 1}`} className="bg-white/[0.03] border-white/5 rounded-xl h-12" />
                                                <Button type="button" variant="ghost" onClick={() => handleRemoveFeature(idx)} className="h-12 w-12 rounded-xl text-slate-500 hover:text-red-500">
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                        <Button type="button" variant="outline" onClick={handleAddFeature} className="w-full h-12 rounded-xl border-dashed border-white/10 hover:bg-white/5 text-slate-400">
                                            <Plus className="mr-2 h-4 w-4" /> Add Feature
                                        </Button>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 rounded-2xl bg-primary text-white font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : currentCourse ? "Save Changes" : "Publish Course"}
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

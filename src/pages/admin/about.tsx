import { useState, useEffect } from "react";
import AdminLayout from "./layout";
import { motion } from "framer-motion";
import { Save, Loader2, Plus, X, ListTodo } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Stat {
    value: string;
    label: string;
}

export default function AdminAbout() {
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [stats, setStats] = useState<Stat[]>([]);
    const [story, setStory] = useState<string[]>([]);
    const { toast } = useToast();

    useEffect(() => {
        fetch("/api/about")
            .then((res) => res.json())
            .then((data) => {
                if (data.content) {
                    setStats(data.content.about_stats || []);
                    setStory(data.content.about_story || []);
                }
                setLoading(false);
            });
    }, []);

    const handleSave = async (type: string, content: any) => {
        setIsSaving(true);
        try {
            const res = await fetch("/api/admin/about", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ type, content }),
            });
            if (res.ok) {
                toast({ title: "Saved", description: `${type} updated successfully` });
            }
        } catch (e) {
            toast({ title: "Error", description: "Save failed", variant: "destructive" });
        } finally {
            setIsSaving(false);
        }
    };

    const updateStat = (idx: number, field: keyof Stat, val: string) => {
        const newStats = [...stats];
        newStats[idx] = { ...newStats[idx], [field]: val };
        setStats(newStats);
    };

    const addStat = () => setStats([...stats, { value: "", label: "" }]);
    const removeStat = (idx: number) => setStats(stats.filter((_, i) => i !== idx));

    const updateStory = (idx: number, val: string) => {
        const newStory = [...story];
        newStory[idx] = val;
        setStory(newStory);
    };

    const addStoryPara = () => setStory([...story, ""]);
    const removeStoryPara = (idx: number) => setStory(story.filter((_, i) => i !== idx));

    if (loading) return <AdminLayout><div className="flex justify-center py-20"><Loader2 className="animate-spin text-primary" /></div></AdminLayout>;

    return (
        <AdminLayout>
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-white tracking-tight">About Content</h1>
                <p className="text-slate-400 mt-2 font-body">Manage your stats and brand story</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
                {/* Stats Management */}
                <section className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-black">ST</span>
                            Global Stats
                        </h2>
                        <Button size="sm" onClick={() => handleSave("about_stats", stats)} disabled={isSaving}>
                            {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4 mr-2" />} Save
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex gap-3 items-end">
                                <div className="flex-1">
                                    <label className="text-[10px] text-slate-500 uppercase font-black mb-1 block">Value</label>
                                    <Input value={stat.value} onChange={(e) => updateStat(idx, "value", e.target.value)} className="bg-white/[0.03] border-white/5 rounded-xl" />
                                </div>
                                <div className="flex-[2]">
                                    <label className="text-[10px] text-slate-500 uppercase font-black mb-1 block">Label</label>
                                    <Input value={stat.label} onChange={(e) => updateStat(idx, "label", e.target.value)} className="bg-white/[0.03] border-white/5 rounded-xl" />
                                </div>
                                <Button variant="ghost" onClick={() => removeStat(idx)} className="text-slate-500 hover:text-red-500 mb-0.5">
                                    <X size={18} />
                                </Button>
                            </div>
                        ))}
                        <Button variant="outline" onClick={addStat} className="w-full mt-4 rounded-xl border-dashed border-white/10 text-slate-500 py-6">
                            <Plus size={16} className="mr-2" /> Add Stat
                        </Button>
                    </div>
                </section>

                {/* Story Content */}
                <section className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-black">SY</span>
                            Brand Story
                        </h2>
                        <Button size="sm" onClick={() => handleSave("about_story", story)} disabled={isSaving}>
                            {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4 mr-2" />} Save
                        </Button>
                    </div>

                    <div className="space-y-6">
                        {story.map((para, idx) => (
                            <div key={idx} className="relative group">
                                <Textarea value={para} onChange={(e) => updateStory(idx, e.target.value)} rows={4} className="bg-white/[0.03] border-white/5 rounded-2xl p-4 resize-none" />
                                <button onClick={() => removeStoryPara(idx)} className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform">
                                    <X size={12} />
                                </button>
                            </div>
                        ))}
                        <Button variant="outline" onClick={addStoryPara} className="w-full rounded-xl border-dashed border-white/10 text-slate-500 py-6">
                            <Plus size={16} className="mr-2" /> Add Paragraph
                        </Button>
                    </div>
                </section>
            </div>
        </AdminLayout>
    );
}

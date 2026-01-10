import { useState, useEffect } from "react";
import AdminLayout from "./layout";
import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Loader2, User } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
    createdAt: string;
}

export default function AdminContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        fetch("/api/admin/contacts")
            .then(res => res.json())
            .then(data => {
                if (data.contacts) setContacts(data.contacts);
                setLoading(false);
            })
            .catch(() => {
                toast({ title: "Error", description: "Failed to load messages", variant: "destructive" });
                setLoading(false);
            });
    }, []);

    return (
        <AdminLayout>
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-white tracking-tight font-display">Inquiries</h1>
                <p className="text-slate-400 mt-2 font-body">Manage responses from your contact form</p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            ) : (
                <div className="space-y-6">
                    {contacts.length === 0 ? (
                        <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                            <p className="text-slate-500">No inquiries yet.</p>
                        </div>
                    ) : (
                        contacts.map((contact, idx) => (
                            <motion.div
                                key={contact._id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:border-primary/20 transition-all duration-300 group"
                            >
                                <div className="flex flex-col lg:flex-row gap-8 lg:items-start justify-between">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                                <User size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{contact.name}</h3>
                                                <p className="text-primary text-xs font-bold uppercase tracking-widest">{contact.subject || "General Inquiry"}</p>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 text-slate-300 font-body leading-relaxed">
                                            {contact.message}
                                        </div>
                                    </div>

                                    <div className="lg:w-72 space-y-3">
                                        <div className="flex items-center gap-3 text-slate-400 text-sm">
                                            <Mail size={16} className="text-primary" />
                                            <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors truncate">{contact.email}</a>
                                        </div>
                                        {contact.phone && (
                                            <div className="flex items-center gap-3 text-slate-400 text-sm">
                                                <Phone size={16} className="text-primary" />
                                                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">{contact.phone}</a>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3 text-slate-400 text-xs mt-4 pt-4 border-t border-white/5">
                                            <Calendar size={14} className="text-slate-500" />
                                            <span>{format(new Date(contact.createdAt), "PPP")}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            )}
        </AdminLayout>
    );
}

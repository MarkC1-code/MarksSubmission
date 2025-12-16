import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type PillTabsProps = {
    tabs: string[];
    activeTab: string;
    onChange: (tab: string) => void;
};

export default function PillTabs({ tabs, activeTab, onChange }: PillTabsProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative mb-8">
            {/* ===== Desktop Pills ===== */}
            <div className="hidden w-full justify-between rounded-full bg-gray-100 p-1 md:flex">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => onChange(tab)}
                        className={cn(
                            "relative z-10 flex-1 rounded-full py-2.5 cursor-pointer text-xs font-semibold transition-colors sm:text-sm",
                            activeTab === tab
                                ? "text-white"
                                : "text-gray-500 hover:text-gray-700"
                        )}
                    >
                        {activeTab === tab && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 z-[-1] rounded-full bg-[#002b28]"
                                transition={{
                                    type: "spring",
                                    bounce: 0.15,
                                    duration: 0.5,
                                }}
                            />
                        )}
                        {tab}
                    </button>
                ))}
            </div>

            {/* ===== Mobile Menu Button ===== */}
            <div className="flex items-center justify-end md:hidden">
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                >
                    {activeTab}
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* ===== Mobile Dropdown ===== */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-2xl bg-white shadow-xl md:hidden"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    onChange(tab);
                                    setOpen(false);
                                }}
                                className={cn(
                                    "w-full px-4 py-3 text-left text-sm font-semibold transition-colors",
                                    activeTab === tab
                                        ? "bg-[#002b28] text-white"
                                        : "text-gray-700 hover:bg-gray-50"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

import { Currency } from "@/types/convert";
import { useState } from "react";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

// 2. The Pop-up Dropdown (Matches Image Logic)
export default function CurrencyDropdown({
    options,
    onSelect,
}: {
    options: Currency[];
    onSelect: (c: Currency) => void;
    onClose: () => void;
}) {
    const [search, setSearch] = useState("");

    const filtered = options.filter(opt =>
        opt.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute right-0 top-full w-70 origin-top-right overflow-hidden rounded-3xl border border-gray-100 bg-white p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] ring-1 ring-black/5"
        >
            {/* Search Bar */}
            <div className="relative mb-2 px-2 pt-2">
                <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                    autoFocus
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl bg-gray-50 py-3  pl-10 pr-4 text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-[#002b28]/10"
                />
            </div>

            <div className="max-h-50 overflow-y-auto px-1">
                {filtered.map((curr) => (
                    <button
                        key={curr.code}
                        type="button"
                        onClick={() => onSelect(curr)}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-3 text-left transition-colors hover:bg-gray-50"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-lg">
                            {curr.icon}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-900">{curr.code}</span>
                        </div>
                    </button>
                ))}
                {filtered.length === 0 && (
                    <div className="py-4 text-center text-xs text-gray-400">No currency found</div>
                )}
            </div>
        </motion.div>
    );
}
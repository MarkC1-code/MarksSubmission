"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = {
    id: string;
    name: string;
    icon?: React.ReactNode;
};

type SelectDropdownProps = {
    label: string;
    placeholder?: string;
    value?: string;
    options: SelectOption[];
    isOpen: boolean;
    onToggle: () => void;
    onSelect: (id: string) => void;
    footerText?: string;
};

export function SelectDropdown({
    label,
    placeholder = "Select an option",
    value,
    options,
    isOpen,
    onToggle,
    onSelect,
}: SelectDropdownProps) {
    const selectedOption = options.find((o) => o.id === value);

    return (
        <div className="relative mt-3">
            <label className="mb-2 block text-sm font-bold text-[#04433f]">
                {label}
            </label>

            <div className="relative">
                <button
                    type="button"
                    onClick={onToggle}
                    className={cn(
                        "flex w-full items-center justify-between rounded-2xl bg-white p-4 text-left transition-all",
                        "focus:outline-none focus:ring-0 focus:shadow-none cursor-pointer",
                        isOpen
                            ? "shadow-[0_0_0_1px_#002b28]"
                            : "shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.12)]"
                    )}
                >

                    <div className="flex items-center gap-2">
                        {selectedOption ? (
                            <>
                                {selectedOption.icon && (
                                    <span className="">{selectedOption.icon}</span>
                                )}
                                <span className=" text-green-900">
                                    {selectedOption.name}
                                </span>
                            </>
                        ) : (
                            <span className="text-green-900">{placeholder}</span>
                        )}
                    </div>

                    <ChevronDown
                        className={cn(
                            "h-5 w-5 text-gray-400 transition-transform",
                            isOpen && "rotate-180"
                        )}
                    />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute left-0 right-0 top-[110%] z-50 max-h-60 overflow-y-auto rounded-3xl border border-gray-100 bg-white shadow-xl"
                        >
                            {options.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => onSelect(option.id)}
                                    className="flex cursor-pointer w-full items-center gap-2 border-b border-gray-50 px-2 py-2 hover:bg-gray-50 last:border-0"
                                >
                                    {option.icon && (
                                        <span className="text-2xl">{option.icon}</span>
                                    )}
                                    <span className="font-semibold text-xs text-[#04433f]">
                                        {option.name}
                                    </span>

                                </button>
                            ))}

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

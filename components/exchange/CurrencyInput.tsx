import { Currency } from "@/types/convert";
import { ChevronDown } from "lucide-react";


export default function CurrencyInputGroup({
    label,
    amount,
    currency,
    onAmountChange,
    onCurrencyClick,
    readOnly,
}: {
    label: string;
    amount: string;
    currency: Currency;
    onAmountChange?: (val: string) => void;
    onCurrencyClick?: () => void;
    readOnly?: boolean;
}) {
    return (
        <div className="group rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-gray-200 focus-within:ring-1 focus-within:ring-[#002b28]">
            <label className="mb-1 block text-sm font-medium text-gray-500">{label}</label>
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    value={amount}
                    readOnly={readOnly}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                    className="w-full bg-transparent text-4xl font-bold text-black outline-none placeholder:text-gray-200"
                    placeholder="0.00"
                />
                <button
                    type="button"
                    onClick={onCurrencyClick}
                    className="ml-2 flex shrink-0 items-center gap-2 cursor-pointer rounded-full border border-gray-200 bg-white px-3 py-2 transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm">
                        {currency.icon}
                    </span>
                    <span className="font-bold text-green-950 cursor-pointer">{currency.code}</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
            </div>
        </div>
    );
}

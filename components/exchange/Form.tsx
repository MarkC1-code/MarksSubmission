"use client";

import { AnimatePresence, motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { CURRENCIES, WALLETS } from "@/lib/constants";
import { ExchangeFormData } from "@/types/convert";
import CurrencyInputGroup from "./CurrencyInput";
import CurrencyDropdown from "./SelectionModal";
import { SelectDropdown } from "./SelectDropdown";

type ExchangeFormProps = {
    form: UseFormReturn<ExchangeFormData>;
    isPayCurrencyOpen: boolean;
    setIsPayCurrencyOpen: (open: boolean) => void;
    payFromOpen: boolean;
    setPayFromOpen: (open: boolean) => void;
    payToOpen: boolean;
    setPayToOpen: (open: boolean) => void;
};

export default function ExchangeForm({
    form,
    isPayCurrencyOpen,
    setIsPayCurrencyOpen,
    payFromOpen,
    setPayFromOpen,
    payToOpen,
    setPayToOpen,
}: ExchangeFormProps) {
    const { watch, setValue, handleSubmit } = form;

    const payCurrency = watch("payCurrency");
    const receiveCurrency = watch("receiveCurrency");
    const payFrom = watch("payFrom");
    const payTo = watch("payTo");

    const onSubmit = (data: ExchangeFormData) => {
        console.log("Processing:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 relative">

            {/* You Pay */}
            <div className="relative z-30">
                <CurrencyInputGroup
                    label="You pay"
                    amount={watch("payAmount")}
                    currency={payCurrency}
                    onAmountChange={(val) => setValue("payAmount", val)}
                    onCurrencyClick={() => setIsPayCurrencyOpen(!isPayCurrencyOpen)}
                />

                <AnimatePresence>
                    {isPayCurrencyOpen && (
                        <CurrencyDropdown
                            options={CURRENCIES}
                            onSelect={(curr) => {
                                setValue("payCurrency", curr);
                                setIsPayCurrencyOpen(false);
                            }}
                            onClose={() => setIsPayCurrencyOpen(false)}
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* You Receive */}
            <div className="relative z-10">
                <CurrencyInputGroup
                    label="You receive"
                    amount={watch("receiveAmount")}
                    currency={receiveCurrency}
                    readOnly
                    onCurrencyClick={() => alert("Receive currency logic here")}
                />
            </div>

            {/* Pay From */}
            <SelectDropdown
                label="Pay from"
                value={payFrom}
                options={WALLETS}
                isOpen={payFromOpen}
                onToggle={() => {
                    setPayFromOpen(!payFromOpen);
                    setPayToOpen(false);
                }}
                onSelect={(id) => {
                    setValue("payFrom", id);
                    setPayFromOpen(false);
                }}
            />

            {/* Pay To */}
            <SelectDropdown
                label="Pay to"
                value={payTo}
                options={WALLETS}
                isOpen={payToOpen}
                onToggle={() => {
                    setPayToOpen(!payToOpen);
                    setPayFromOpen(false);
                }}
                onSelect={(id) => {
                    setValue("payTo", id);
                    setPayToOpen(false);
                }}
                footerText="Other Crypto Wallets..."
            />

            {/* Submit Button */}
            <div className="pt-4">
                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-full cursor-pointer bg-[#002b28] py-4 text-lg font-bold text-white shadow-lg"
                >
                    Convert now
                </motion.button>
            </div>
        </form>
    );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CURRENCIES, TABS } from "@/lib/constants";
import { ExchangeFormData } from "@/types/convert";
import PillTabs from "../tab/tabs";
import ExchangeForm from "./Form";

export default function ExchangeWidget() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    // Dropdown states
    const [isPayCurrencyOpen, setIsPayCurrencyOpen] = useState(false);
    const [payFromOpen, setPayFromOpen] = useState(false);
    const [payToOpen, setPayToOpen] = useState(false);


    const form = useForm<ExchangeFormData>({
        defaultValues: {
            payAmount: "1.00",
            receiveAmount: "1.00",
            payCurrency: CURRENCIES[0],
            receiveCurrency: { code: "NGN", icon: "₦" },
            paymentMethod: "",
            payFrom: "",
            payTo: "",
        },
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#1a1a1a] -mt-15 p-2 font-sans">
            <div className="w-full max-w-120 rounded-4xl bg-white p-4 shadow-2xl">

                {/* Tabs */}
                <PillTabs
                    tabs={TABS}
                    activeTab={activeTab}
                    onChange={(tab) => setActiveTab(tab)}
                />
                <ExchangeForm
                    form={form}
                    isPayCurrencyOpen={isPayCurrencyOpen}
                    setIsPayCurrencyOpen={setIsPayCurrencyOpen}
                    payFromOpen={payFromOpen}
                    setPayFromOpen={setPayFromOpen}
                    payToOpen={payToOpen}
                    setPayToOpen={setPayToOpen}
                />
            </div>
        </div>
    );
}

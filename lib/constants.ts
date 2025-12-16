import { Currency } from "@/types/convert";

// --- Constants & Mock Data ---
export const TABS = ["Crypto to cash", "Cash to crypto", "Crypto to fiat loan"];

export const CURRENCIES: Currency[] = [
     { code: "ETH", icon: "💎" },
    { code: "USDT - CELO", icon: "💵" },
    { code: "USDT-TON", icon: "🔵" },
    { code: "USDT-BNB", icon: "🟡" },
];

export const WALLETS = [
    { id: "metamask", name: "Metamask", icon: "🦊" },
    { id: "rainbow", name: "Rainbow", icon: "🌈" },
    { id: "walletconnect", name: "WalletConnect", icon: "📡" },
    { id: "Other", name: "Other Crypto Wallets (Binance, Coinbae, Bybit etc)", icon: "🕋" },
];
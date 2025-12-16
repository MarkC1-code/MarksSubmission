export interface ExchangeFormData {
    payAmount: string;
    receiveAmount: string;
    payCurrency: Currency;
    receiveCurrency: Currency;
    paymentMethod: string;
    payFrom: string; 
    payTo: string;   
}

export interface Currency {
    code: string;
    icon: string;
}
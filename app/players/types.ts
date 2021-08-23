
export type PlayerProps = {
    id: string | number[],
    order: number | string
    name_nickename: string
    position: string
    payment: string
    phone: string
}

export type PlayerForm = {
    order: number | string
    name_nickename: string
    position: string
    payment: string
    phone: string
}

export const Position = [
    {label: 'N/A', value: 'N/A'},
    {label: 'GOL', value: 'GOL'},
    {label: 'ATA', value: 'ATA'},
    {label: 'LT', value: 'LT'},
    {label: 'MC', value: 'MC'},
    {label: 'VOL', value: 'VOL'},
    {label: 'ZAG', value: 'ZAG'},
];

export const PaymentMethods = [
    {label: 'N/P', value: 'N/P'},
    {label: 'Dinheiro', value: 'Dinheiro'},
    {label: 'Pix', value: 'Pix'},
    {label: 'Isento', value: 'Isento'},
];

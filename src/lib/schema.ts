import {z} from 'zod';

export const carSchema=z.object({
    brand:z.string().min(1,'minimum 1 character').max(20,'maximum 20 characters').regex(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,'only A-Z'),
    year:z.number().min(1990,'min year 1990').max(2026,'max year 2026'),
    price:z.number().min(1,'min prise 1 USD').max(1000000,'max prise 1 000 000')
})
export type CarFormType=z.infer<typeof carSchema>

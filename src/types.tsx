import { z } from "zod";
export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}
export type ProductsType = ProductType[];

export type cartItemType = ProductType[] & {
    quantity: number;
    selectSize: string;
    selectColor: string;
};

export type cartItemsType = cartItemType[];

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.email().min(1, "Name is required!"),
    phone: z.string().min(7, "phone number must be between 7 to 10").max(10, "Phone number must be 7 to 10 digits")
    .regex(/^\d+/, "Phone number must contain only numbers!"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
});
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  cardHolder: z.string().trim().min(1, "Card holder is required!"),

  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{16}$/, "Card number must be 16 digits!"),

  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY format!"),

  cvv: z
    .string().min(3, "cvv is requred!").max(3, "cvv is requered!")
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
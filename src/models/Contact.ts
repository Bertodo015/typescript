export type Contact = {
    name: string;
    phone: string;
    email?: string;  // "?" pode ou não ser preenchida
    birthday?: Date;
};
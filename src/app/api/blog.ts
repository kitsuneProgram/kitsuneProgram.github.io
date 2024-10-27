import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
    contentId: string,
    title: string,
    image: MicroCMSImage,
    content: string,
    category: Category[],
    createdAt: string,
    updatedAt: string
};

export type Category = {
    name: string,
    date: MicroCMSDate
}
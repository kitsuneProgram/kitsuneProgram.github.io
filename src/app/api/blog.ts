import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
    contentId: string,
    title: string,
    image: MicroCMSImage,
    content: string,
    category: Category[],
    date: MicroCMSDate
};

export type Category = {
    name: string,
    date: MicroCMSDate
}
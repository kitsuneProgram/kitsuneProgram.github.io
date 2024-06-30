import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Blog = {
    id: string;
    content: string;
    title: string;
    category: Tag;
    image: MicroCMSImage;
}&MicroCMSDate;
  
export type Tag = {
    id: string;
    name: string;
}& MicroCMSDate;

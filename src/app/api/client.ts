import { createClient } from "microcms-js-sdk"
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

export type Blog = {
    id: string,
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

export const client = createClient({
    serviceDomain:  process.env.NEXT_SERVICEDOMAIN || "",
    apiKey: process.env.NEXT_APIKEY || "",
});

export const getBlogs = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Blog>({
     customRequestInit: {cache: "no-store"},
     endpoint: "blogs",
     queries,
    });
   
    return listData;
};

export const getCategories = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Category>({
     customRequestInit: {cache: "no-store"},
     endpoint: "categories",
     queries,
    });
   
    return listData;
};
   
export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<Blog>({
     customRequestInit: {cache: "no-store"},
     endpoint: "blogs", contentId, queries
    });
   
    return detailData;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<Category>({
     customRequestInit: {cache: "no-store"},
     endpoint: "categories", contentId, queries,
    });
   
    return detailData;
};
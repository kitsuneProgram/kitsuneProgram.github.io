"use client"

import { Blog, Tag } from "./blog";

import { createClient, MicroCMSQueries } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: process.env.DOMAIN_NAME || "", 
    apiKey: process.env.APIKEY || "",
});

export const getList = async (queries?: MicroCMSQueries) => {
	const response = await client.getList<Blog>({
		endpoint: "blogs",
		queries,
	});
	const listData = await response;
	console.log(response);
	return listData;
};

export const getTags = async (queries?: MicroCMSQueries) => {
	const tags = await client.getList<Tag>({endpoint: "categories", queries});
	console.log(tags);
	return tags;
};

export const getTagDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	const tag = await client.getListDetail<Tag>({endpoint: "categories", contentId, queries});
	console.log(tag);
	return {
		tag
	}
};

export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
	const detailData = await client.getListDetail<Blog>({endpoint: "blogs", contentId, queries});
	console.log(detailData);
	return {
		detailData
	}
};
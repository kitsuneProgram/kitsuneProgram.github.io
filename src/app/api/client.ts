import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain:  process.env.SERVICEDOMAIN || "",
    apiKey: process.env.APIKEY || "",
});
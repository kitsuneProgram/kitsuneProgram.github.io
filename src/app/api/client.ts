import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain:  process.env.NEXT_SERVICEDOMAIN || "",
    apiKey: process.env.NEXT_APIKEY || "",
});
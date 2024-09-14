import axios, { AxiosResponse, AxiosError } from "axios";

// Create Instance
const http = axios.create({
  headers: { "Content-Type": "application/json" }, // ข้อมูลที่ส่งหรือรับ เป็นรูปแบบ JSON
});

export { http };
export type { AxiosResponse, AxiosError };

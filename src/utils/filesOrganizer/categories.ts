import type { Categories } from "@/types/Categories";

const categories = ["corpos", "olhos", "sobrancelhas", "narizes", "camisas", "cabelos", "bocas"] as const;

const categoryTabs: Categories[] = ["corpos", "cabelos", "olhos", "sobrancelhas", "narizes", "bocas", "camisas"];

export { categories, categoryTabs };

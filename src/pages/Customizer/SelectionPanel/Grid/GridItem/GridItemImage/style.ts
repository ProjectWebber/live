import { tv } from "tailwind-variants";

const GridItemImageStyles = tv({
    base: "absolute h-full w-full !border-transparent transition-all opacity-0 z-2",
    variants: {
        corpo: {
            corpos_f_1: "",
            corpos_m_1: "",
        },
        category: {
            bocas: "",
            cabelos: "",
            camisas: "top-0 left-0 scale-[1]",
            corpos: "top-0 left-0 scale-[1]",
            narizes: "",
            olhos: "",
            sobrancelhas: "",
        },
    },
    compoundVariants: [
        {
            corpo: "corpos_m_1",
            category: "sobrancelhas",
            class: "left-[35%] top-[93%] scale-[410%]",
        },
        {
            corpo: "corpos_m_1",
            category: "olhos",
            class: "left-[38%] top-[91%] scale-[470%]",
        },
        {
            corpo: "corpos_m_1",
            category: "narizes",
            class: "left-[46%] top-[74%] scale-[500%]",
        },
        {
            corpo: "corpos_m_1",
            category: "bocas",
            class: "left-[52%] top-[44%] scale-[620%]",
        },
        {
            corpo: "corpos_m_1",
            category: "cabelos",
            class: "top-[25%] left-[5%] scale-[150%]",
        },

        {
            corpo: "corpos_f_1",
            category: "sobrancelhas",
            class: "left-[37%] top-[80%] scale-[410%]",
        },
        {
            corpo: "corpos_f_1",
            category: "olhos",
            class: "left-[42%] top-[78%] scale-[470%]",
        },
        {
            corpo: "corpos_f_1",
            category: "narizes",
            class: "left-[52%] top-[70%] scale-[500%]",
        },
        {
            corpo: "corpos_f_1",
            category: "bocas",
            class: "left-[71%] top-[39%] scale-[730%]",
        },
        {
            corpo: "corpos_f_1",
            category: "cabelos",
            class: "top-[16%] left-[3%] scale-[140%]",
        },
    ],
    defaultVariants: {
        corpo: "corpos_m_1",
        category: "corpos",
    },
});

export default GridItemImageStyles;

const useCanvas = () => {
    const initCanvasInstance = (
        canvasWidth: number,
        canvasHeight: number
    ): HTMLCanvasElement => {
        const canvas = document.createElement("canvas");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        return canvas;
    };

    const clearCanvas = (
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) => {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    };

    const drawImage = (
        img: HTMLImageElement,
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) => {
        if (img.complete) {
            ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        }
    };

    const drawAllImages = (
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) => {
        const previewContainer: NodeListOf<HTMLImageElement> =
            document.querySelectorAll("#preview-container img");
        previewContainer.forEach((img) => {
            drawImage(img, ctx, canvasWidth, canvasHeight);
        });
    };

    const downloadAsImagePNG = (canvas: HTMLCanvasElement) => {
        const url = canvas.toDataURL("image/png");
        const linkElement = document.createElement("a");
        linkElement.download = "portrait.png";
        linkElement.href = url;
        linkElement.click();
    };

    const getImageDataUrl = (
        canvas: HTMLCanvasElement,
        type: string,
        quality?: number
    ) => {
        return canvas.toDataURL(type, quality);
    };

    const getLowQualityImageUrl = () => {
        const canvas = initCanvasInstance(500, 500);
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        clearCanvas(ctx, canvas.width, canvas.height);
        drawAllImages(ctx, canvas.width, canvas.height);
        const dataUrl = getImageDataUrl(canvas, "image/webp", 0.6);

        return dataUrl;
    };

    const drawAndDownload = () => {
        const canvas = initCanvasInstance(900, 900);
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        clearCanvas(ctx, canvas.width, canvas.height);
        drawAllImages(ctx, canvas.width, canvas.height);
        downloadAsImagePNG(canvas);
    };

    return { drawAndDownload, getLowQualityImageUrl };
};

export default useCanvas;

import Image from "next/image";

const ImageExplicitWidthAndHeight = ({ id, src, width, height, alt }: any) => {
    return (
        <Image src={src} alt={alt} width={width} height={height} layout="raw" />
    );
};

export default ImageExplicitWidthAndHeight;

import { Heading } from "@/components/heading";
import { Image } from "lucide-react";

const ImagePage = () => {
    return (	
        <div>
            <Heading
             title = "Image Generation"
             description = "Generate any image using our AI"
             icon = {Image}
             iconColor = "text-pink-500"
             bgColor = "text-pink-500/10"
             />
        </div>
    );
}

export default ImagePage;
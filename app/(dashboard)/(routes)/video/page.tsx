import { Heading } from "@/components/heading";
import { Video } from "lucide-react";

const VideoPage = () => {
    return (	
        <div>
            <Heading
             title = "Video Generation"
             description = "Create any video with our AI"
             icon = {Video}
             iconColor = "text-orange-500"
             bgColor = "text-orange-500/50"
             />
        </div>
    );
}

export default VideoPage;
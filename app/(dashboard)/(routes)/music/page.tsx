import { Heading } from "@/components/heading";
import { Music } from "lucide-react";

const MusicPage = () => {
    return (	
        <div>
            <Heading
             title = "Music Generation"
             description = "Create music with our AI"
             icon = {Music}
             iconColor = "text-yellow-500"
             bgColor = "text-yellow-500/10"/>
        </div>
    );
}

export default MusicPage;
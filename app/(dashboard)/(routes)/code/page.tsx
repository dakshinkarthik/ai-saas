import { Heading } from "@/components/heading";
import { Code } from "lucide-react";

const CodePage= () => {
    return (	
        <div>
            <Heading
             title = "Code Generation"
             description = "Generate code from our AI"
             icon = {Code}
             iconColor = "text-emerald-500"
             bgColor = "text-emerald-500/10"
             />
        </div>
    );
}

export default CodePage;
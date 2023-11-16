"use client";

import * as z from "zod";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

import { Heading } from "@/components/heading";

const ConversatioPage = () => {

    const form = useForm({
        defaultValues: {
            prompt: ""
        }
    })
    return (	
        <div>
            <Heading
             title = "Conversation"
             description = "Talk to our AI model"
             icon = {MessageSquare}
             iconColor = "text-violet-500"
             bgColor = "text-violet-500/10"/>
            <div className="px-4 lg:px-8">

            </div>
        </div>
    );
}

export default ConversatioPage;
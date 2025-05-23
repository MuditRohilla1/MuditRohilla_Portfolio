"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { FaLocationArrow } from "react-icons/fa6";

export function SignUpForm() {
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            "service_agkdiui",
            "template_wya679u",
            {
                from_name: `${formData.firstname} ${formData.lastname}`,
                reply_to: formData.email,
                message: formData.message
            },
            "u45OVZzjPxs7JFknn"
        )
            .then(() => {
                setSuccess(true);
                setFormData({ firstname: "", lastname: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Failed to send. Try again later.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-transparent">
            <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                Let&apos;s Catch Up !!
            </h2>
            <p className="mt-2 max-w-sm text-sm text-emerald-600 dark:text-emerald-300 capitalize">
                Please Fill Up the details to get in touch
            </p>

            <form className="my-8 bg-transparent" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="John" type="text" value={formData.firstname} onChange={handleChange} required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Doe" type="text" value={formData.lastname} onChange={handleChange} required />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="johndoe@gmail.com" type="email" value={formData.email} onChange={handleChange} required />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" placeholder="Type Your Message..." type="text" value={formData.message} onChange={handleChange} required />
                </LabelInputContainer>

                <button
                    type="submit"
                    disabled={loading}
                    className="group/btn relative flex items-center cursor-pointer justify-center gap-2 h-10 w-full rounded-md bg-gradient-to-br from-emerald-600 to-emerald-800 font-medium text-white disabled:opacity-50 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-emerald-700 dark:from-emerald-800 dark:to-emerald-900 dark:shadow-[0px_1px_0px_0px_#064e3b_inset,0px_-1px_0px_0px_#064e3b_inset]"
                >
                    {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                        <span className="flex items-center gap-1">
                            Done <FaLocationArrow className="ml-1" />
                        </span>
                    )}
                    <BottomGradient />
                </button>

                {success && (
                    <p className="mt-4 text-center text-sm text-green-600 font-medium">
                        Message sent successfully !!
                    </p>
                )}

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent dark:via-emerald-700" />
            </form>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
);

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};

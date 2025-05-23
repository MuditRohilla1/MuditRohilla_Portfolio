'use client'

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export function Education() {
    const data = [
        {
            title: "Bachelor Of Engineering (B.E)",
            content: (
                <div>
                    <h3 className=" text-md lg:text-3xl bold tracking-wider font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Chandigarh University
                    </h3>
                    <p className="mb-2 text-xs lg:text-2xl tracking-wider font-normal text-neutral-800 md:text-sm dark:text-slate-400">
                        Computer Science and Engineering
                    </p>
                    <p className="mb-8 text-xs tracking-wider font-normal text-neutral-800 md:text-sm dark:text-slate-400">
                        Session [2021 - 2025]
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/C_1.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/C_2.jpg"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Intermediate (CBSE)",
            content: (
                <div>
                    <h3 className=" text-md bold lg:text-3xl tracking-wider font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Vivekanand Global School
                    </h3>
                    <p className="mb-2 text-xs lg:text-2xl tracking-wider font-normal text-neutral-800 md:text-sm dark:text-slate-400">
                        Non-Medical [Physics, Chemistry, Maths]
                    </p>
                    <p className="mb-8 text-xs tracking-wider font-normal text-neutral-800 md:text-sm dark:text-slate-400">
                        Session [2019 - 2021]
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/XII_1.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/XII_2.jpg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Matriculation (CBSE)",
            content: (
                <div>
                    <h3 className=" text-md bold lg:text-3xl tracking-wider font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Vivekanand Global School
                    </h3>
                    <p className="mb-2 text-xs tracking-wider font-normal text-neutral-800 md:text-sm dark:text-slate-400">
                        Session [2018 - 2019]
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="/X_1.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <Image
                            src="/X_2.jpg"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div id="Education" className="relative rounded-2xl mt-28 w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

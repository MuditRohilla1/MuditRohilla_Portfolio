import React from "react";
import Image from "next/image";

export interface GlassIconsItem {
    icon: React.ReactElement;
    color: string;
    label: string;
    imageSrc?: string;
    customClass?: string;
}

export interface GlassIconsProps {
    items: GlassIconsItem[];
    className?: string;
}

const gradientMapping: Record<string, string> = {
    blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
    purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
    red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
    indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
    orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
    green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
    const getBackgroundStyle = (color: string): React.CSSProperties => {
        if (gradientMapping[color]) {
            return { background: gradientMapping[color] };
        }
        return { background: color };
    };

    return (
        <div className={`grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-8 w-full p-5 md:p-10 ${className || ""}`}>
            {items.map((item, index) => (
                <button
                    key={index}
                    type="button"
                    className={`icon-btn mx-auto ${item.customClass || ""}`}
                    aria-label={item.label}
                >
                    <span
                        className="icon-btn__back"
                        style={getBackgroundStyle(item.color)}
                    ></span>
                    <span className="icon-btn__front">
                        {item.imageSrc ? (
                            <Image
                                src={item.imageSrc}
                                alt={item.label}
                                className="icon-btn__img"
                                width={40}
                                height={40}
                            />
                        ) : (
                            <span className="icon-btn__icon" aria-hidden="true">
                                {item.icon}
                            </span>
                        )}
                    </span>
                    <span className="icon-btn__label">{item.label}</span>
                </button>
            ))}
        </div>
    );
};


export default GlassIcons;

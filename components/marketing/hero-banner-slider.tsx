"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const banners = [
    {
        image: "/images/banner_1.png",
        title: "Track every container, every shipment",
        description: "Real-time visibility from port to delivery.",
        cta: "Explore Features",
        href: "/features",
    },
    {
        image: "/images/banner_2.jpg",
        title: "Built for global export businesses",
        description: "Manage orders and buyers across every market.",
        cta: "See Solutions",
        href: "/solutions",
    },
    {
        image: "/images/banner_3.jpg",
        title: "One team, one dashboard",
        description: "Keep your whole export team in sync.",
        cta: "View Pricing",
        href: "/pricing",
    },
];

export function HeroBannerSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative mx-auto mt-16 w-full max-w-4xl overflow-hidden rounded-2xl shadow-lg">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {banners.map((banner) => (
                    <div
                        key={banner.title}
                        className="relative aspect-[16/7] w-full shrink-0"
                    >
                        <Image
                            src={banner.image}
                            alt={banner.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 1024px"
                            className="object-cover"
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 p-6 text-left sm:p-10">
                            <h3 className="text-xl font-bold text-white sm:text-2xl">
                                {banner.title}
                            </h3>
                            <p className="text-sm text-white/80 sm:text-base">
                                {banner.description}
                            </p>
                            <Button size="sm" className="mt-3" asChild>
                                <Link href={banner.href}>
                                    {banner.cta}
                                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 right-6 flex items-center gap-2">
                {banners.map((banner, i) => (
                    <button
                        key={banner.title}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to banner ${i + 1}`}
                        className={cn(
                            "h-1.5 rounded-full transition-all",
                            i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
import { useEffect, useState } from "react";

interface HeaderProps {
    titleHeight: number;
    setTitleHeight: (height: number) => void;
    giveStatus: string;
}

const Header = ({ titleHeight, setTitleHeight, giveStatus }: HeaderProps) => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 讓透明度變慢
            const maxScroll = 400;
            const opacity = Math.min(currentScrollY / maxScroll, 1);
            setScrollOpacity(opacity);

            // 計算新的高度
            const newHeight = Math.max(186, 536 - currentScrollY);
            setTitleHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setTitleHeight]);

    const showFullBanner = giveStatus === "form" && titleHeight > 320;
    const titleClasses = ["title", showFullBanner ? "" : "title-collapsed"].filter(Boolean).join(" ");

    return (
        <div
            className={titleClasses}
            style={{
                "--scroll-opacity": showFullBanner ? scrollOpacity : "0",
                position: (giveStatus === "success" || giveStatus === "fail") ? "relative" : "fixed",
                height: (giveStatus === "success" || giveStatus === "fail") ? "124px" : `${titleHeight}px`,
            } as React.CSSProperties}
        >
            {showFullBanner && (
                <>
                    <img src="/images/deco-dots-left.png" alt="dots-deco" className="title-deco title-deco-left" />
                    <img src="/images/deco-dots-right.png" alt="dots-deco" className="title-deco title-deco-right" />
                </>
            )}
            <img
                src="/images/Logo.png"
                alt="FORWARD Restore"
                className={`title-logo ${showFullBanner ? "title-logo-floating" : "title-logo-compact"}`}
            />
            {showFullBanner && (
                <>
                    <div className="title-copy-block">
                        <p className="title-headline">FORWARD 外展建堂奉獻</p>
                        <p className="title-subheadline font-gotham-light">
                            建堂 ｜ 網路宣教 ｜ 其他城市分部
                        </p>
                        <p className="title-subheadline font-gotham-light">
                            宣教資助 ｜ 外展憐憫事工
                        </p>
                    </div>
                    <p className="title-message text-zh">
                        在這個季節，讓我們一起感謝神的作為，並以信心期待神在未來要成就更大的事
                    </p>
                </>
            )}
        </div>
    );
};

export default Header;

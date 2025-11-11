import { useEffect, useState } from "react";

export const TITLE_MAX_HEIGHT = 536;
export const TITLE_MIN_HEIGHT = 186;
export const TITLE_COLLAPSE_THRESHOLD = 320;
export const COLLAPSED_HEIGHT_RATIO = 0.5;
export const COLLAPSED_TOP_OFFSET = 25;
export const COLLAPSED_WIDTH_RATIO = 0.5;
const RESULT_VIEW_HEIGHT_RATIO = 0.4;

interface HeaderProps {
    titleHeight: number;
    setTitleHeight: (height: number) => void;
    giveStatus: string;
}

const Header = ({ titleHeight, setTitleHeight, giveStatus }: HeaderProps) => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        if (giveStatus !== "form") {
            setScrollOpacity(0);
            setTitleHeight(TITLE_MAX_HEIGHT);
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 讓透明度變慢
            const maxScroll = 400;
            const opacity = Math.min(currentScrollY / maxScroll, 1);
            setScrollOpacity(opacity);

            // 計算新的高度
            const newHeight = Math.max(TITLE_MIN_HEIGHT, TITLE_MAX_HEIGHT - currentScrollY);
            setTitleHeight(newHeight);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [giveStatus, setTitleHeight]);

    const isFormView = giveStatus === "form";
    const isResultView = !isFormView;
    const showFullBanner = isResultView || titleHeight > TITLE_COLLAPSE_THRESHOLD;
    const isCollapsed = isFormView && !showFullBanner;
    const collapsedHeight = Math.max(TITLE_MIN_HEIGHT * COLLAPSED_HEIGHT_RATIO, titleHeight * COLLAPSED_HEIGHT_RATIO);
    const resultViewHeight = Math.round(TITLE_MAX_HEIGHT * RESULT_VIEW_HEIGHT_RATIO);
    const displayedHeight = isFormView ? (showFullBanner ? titleHeight : collapsedHeight) : resultViewHeight;
    const collapsedWidthPercent = COLLAPSED_WIDTH_RATIO * 100;
    const titleClasses = [
        "title",
        isCollapsed ? "title-collapsed" : ""
    ].filter(Boolean).join(" ");

    return (
        <div
            className={titleClasses}
            style={{
                "--scroll-opacity": showFullBanner ? scrollOpacity : "0",
                position: isFormView ? "fixed" : "relative",
                height: `${displayedHeight}px`,
                top: isCollapsed ? `${COLLAPSED_TOP_OFFSET}px` : 0,
                width: isFormView ? (isCollapsed ? `${collapsedWidthPercent}%` : "100%") : "100%",
                left: isCollapsed ? "50%" : 0,
                transform: isCollapsed ? "translateX(-50%)" : "none",
                margin: 0,
                borderTopLeftRadius: isFormView ? undefined : "32px",
                borderTopRightRadius: isFormView ? undefined : "32px",
            } as React.CSSProperties}
        >
            {showFullBanner && (
                <>
                    <img loading="lazy" src="/images/deco-dots-left.png" alt="dots-deco" className="title-deco title-deco-left" />
                    <img loading="lazy" src="/images/deco-dots-right.png" alt="dots-deco" className="title-deco title-deco-right" />
                </>
            )}
            {isFormView && (
                <img
                    loading="lazy"
                    src="/images/Logo.png"
                    alt="FORWARD Restore"
                    className={`title-logo ${showFullBanner ? "title-logo-floating" : "title-logo-compact"}`}
                />
            )}
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
                    {isFormView && (
                        <p className="title-message text-zh">
                            在這個季節，讓我們一起感謝神的作為，並以信心期待神在未來要成就更大的事
                        </p>
                    )}
                </>
            )}
        </div>
    );
};

export default Header;

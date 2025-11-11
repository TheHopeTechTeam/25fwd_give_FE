import { Button } from "@mui/material";

interface PayButtonProps {
    paymentType: string;
    isApplePayReady: boolean;
    isGooglePayReady: boolean;
    isSamsungPayReady: boolean;
    setupGooglePay: () => void;
    setupApplePay: () => void;
    setupSamsungPay: () => void;
}

const PayButton: React.FC<PayButtonProps> = (props) => {
    const { paymentType, isApplePayReady, isGooglePayReady, isSamsungPayReady, setupGooglePay, setupApplePay, setupSamsungPay } = props;

    return (
        <>
            {paymentType === "credit-card" && (
                <Button
                    type="submit"
                    variant="contained"
                    className="continue-button glass-button glass-button-accent width100">
                    <span className="text-en">CONTINUE</span>
                    <span className="text-zh"> 下一步</span>
                </Button>
            )}
            {paymentType === "apple-pay" && (
                <>
                    {isApplePayReady ? (
                        <div id="apple-pay-button-container" onClick={setupApplePay}></div>
                    ) : (
                        <button type="submit" className="fake-pay-button apple-pay-button"></button>
                    )}
                </>

            )}
            {paymentType === "google-pay" && (
                <>
                    {isGooglePayReady ? (
                        <button
                            type="button"
                            className="fake-pay-button google-pay-button"
                            onClick={setupGooglePay}
                        ></button>
                    ) : (
                        <button
                            type="submit"
                            className="fake-pay-button google-pay-button"
                        ></button>
                    )}
                </>
            )}
            {paymentType === "samsung-pay" && (
                <>
                    {isSamsungPayReady ? (
                        <button
                            type="button"
                            className="fake-pay-button samsung-pay-button"
                            onClick={setupSamsungPay}
                        ></button>
                    ) : (
                        <button
                            type="submit"
                            className="fake-pay-button samsung-pay-button"
                        ></button>
                    )}
                </>
            )}
        </>
    )
}

export default PayButton

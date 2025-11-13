import { Select, MenuItem, Box } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface PaymentSelectProps {
    register: UseFormRegister<any>;
    selectedPayment: string;
}


const PaymentSelect: React.FC<PaymentSelectProps> = (props) => {
    const { register, selectedPayment } = props;
    const paymentOptions = [
        { label: "Apple Pay", value: "apple-pay" },
        { label: "Google Pay", value: "google-pay" },
    ];

    return (
        <Select
            displayEmpty
            {...register("paymentType")}
            defaultValue={selectedPayment}
            className="payment-method width100 basic-formControl"
            renderValue={(selected) => {
                let text = "";

                // 動態選擇對應的圖標和文字
                switch (selected) {
                    case "apple-pay":
                        text = "Apple Pay";
                        break;
                    case "google-pay":
                        text = "Google Pay";
                        break;
                    case "credit-card":
                        text = "Credit Card 信用卡";
                        break;
                }

                return (
                    <Box className="payment-method-icon-text">
                        {text}
                    </Box>
                );
            }}
        >
            {paymentOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
            <MenuItem value="credit-card">
                Credit Card 信用卡
            </MenuItem>
        </Select>
    )
}

export default PaymentSelect

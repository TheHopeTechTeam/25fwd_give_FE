import { Select, MenuItem, ListItemIcon, Box } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { SiApplepay } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";
import { SiSamsungpay } from "react-icons/si";
import { CiCreditCard1 } from "react-icons/ci";

interface PaymentSelectProps {
    register: UseFormRegister<any>;
    selectedPayment: string;
}


const PaymentSelect: React.FC<PaymentSelectProps> = (props) => {
    const { register, selectedPayment } = props;
    const paymentOptions = [
        { label: "Apple Pay", value: "apple-pay", icon: <SiApplepay size={24} /> },
        { label: "Google Pay", value: "google-pay", icon: <FaGooglePay size={24} /> },
        { label: "Samsung Pay", value: "samsung-pay", icon: <SiSamsungpay size={24} /> },
    ];

    return (
        <Select
            displayEmpty
            {...register("paymentType")}
            defaultValue={selectedPayment}
            className="payment-method width100 basic-formControl"
            renderValue={(selected) => {
                let icon, text;

                // 動態選擇對應的圖標和文字
                switch (selected) {
                    case "apple-pay":
                        icon = <SiApplepay size={24} />;
                        text = "Apple Pay";
                        break;
                    case "google-pay":
                        icon = <FaGooglePay size={24} />;
                        text = "Google Pay";
                        break;
                    case "samsung-pay":
                        icon = <SiSamsungpay size={24} />;
                        text = "Samsung Pay";
                        break;
                    case "credit-card":
                        icon = <CiCreditCard1 size={24} />;
                        text = "Credit Card";
                        break;
                }

                return (
                    <Box className="payment-method-icon-text">
                        {icon}
                        {text}
                    </Box>
                );
            }}
        >
            {paymentOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    <ListItemIcon>
                        {option.icon}
                    </ListItemIcon>
                    {option.label}
                </MenuItem>
            ))}
            <MenuItem value="credit-card">
                <ListItemIcon>
                    <CiCreditCard1 size={24} />
                </ListItemIcon>
                Credit Card
            </MenuItem>
        </Select>
    )
}

export default PaymentSelect

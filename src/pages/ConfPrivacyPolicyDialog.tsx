import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { ReactNode } from "react";

interface ConfPrivacyPolicyDialogProps {
    open: boolean;
    title?: ReactNode;
    onClose: () => void;
    cancelText?: string;
}


const ConfPrivacyPolicy: React.FC<ConfPrivacyPolicyDialogProps> = ({
    open,
    title = "",
    onClose,
    cancelText = "CLOSE",
}) => {
    return (
        <Dialog maxWidth="xs" fullWidth open={open} onClose={onClose}>
            <DialogTitle className="privacy-dialog-title text-zh">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText className="dialog-message text-zh">
                    感謝您參與在 The Hope 教會當中！為確保您的個人資料安全並遵循《個人資料保護法》及相關法令規定，The Hope 教會將依法保護並妥善處理您的個人資料。請仔細閱讀以下條款，並確認您同意本教會對您的個人資料的蒐集、處理與利用方式。當您註冊為本系統會員或使用本系統所提供服務，將視為您同意本隱私政策及條款。如您不同意，請立刻停止使用本系統及相關服務：<br></br>
                    個人資料蒐集之目的及利用於適用法律允許的範圍內，The Hope 教會基於以下目的蒐集您的個人資料，且僅供The Hope 教會依照蒐集之目的進行處理和利用：<br></br>
                    1.1. 與教會相關的活動、事工及關懷服務之聯繫與通知。<br></br>
                    1.2. 活動報名管理與統計分析，以提升服務品質。<br></br>
                    1.3. 教會內部的行政與資料紀錄管理需求。<br></br>
                    蒐集之個人資料類別<br></br>
                    依您參與的活動性質，The Hope 教會可能蒐集的資料包括但不限於：<br></br>
                    2.1. 基本識別資訊（如姓名、出生年月日、聯絡電話、電子郵件地址、婚姻狀態、家庭及成員情況等）。<br></br>
                    2.2. 特殊情況下的其他必要資訊（如健康狀況、緊急聯絡人資訊等）。<br></br>
                    2.3  其他得以直接或間接識別您的身分之個人資料。<br></br>
                    個人資料利用的期間、地區除下列情形外，The Hope 教會僅會基於您授權的範圍，於會員存續期間或法律另有規定之保存期間及台灣境內、或基於活動需求且經您授權後跨境而於前開蒐集目的範圍內為作業之必要運用個人資料：<br></br>
                    法律明文規定。<br></br>
                    為增進公共利益所必要。<br></br>
                    為免除當事人之生命、身體、自由或財產上之危險。<br></br>
                    為防止他人權益之重大危害。<br></br>
                    經當事人同意。<br></br>
                    有利於當事人權益。<br></br>

                    個人資料利用的對象及方式<br></br>
                    4.1 對象：僅限The Hope 教會內部相關單位或經授權之合作機構使用。<br></br>
                    4.2 方式：以電子或紙本方式蒐集、處理及利用您的資料。<br></br>
                    個人資料保存期間<br></br>
                    您提供之個人資料，The Hope 教會將於提供您會員服務為目的之存續期間持續保存，直至您刪除會員帳戶，或當您行使相關個人權利時為止。<br></br>
                    個人資料權利行使<br></br>
                    6.1依《個人資料保護法》，您對您的個人資料擁有以下權利：<br></br>
                    6.1. 1查詢或請求閱覽您的個人資料。<br></br>
                    6.1.2. 請求補充、更正或刪除不完整或不正確的資料。<br></br>
                    6.1.3. 請求停止蒐集、處理或利用您的個人資料。<br></br>
                    6.1.4. 請求刪除您的個人資料，惟法律另有規定者不在此限。<br></br>
                    6.2如需行使上述權利，請聯繫The Hope 教會。The Hope 教會受理您行使各項個人權利，若為查詢或請求閱覽、請求製給複製本，The Hope 教會將於提出請求之[*]日內回覆，必要時得再延長[*]日；若為請求補充或更正、請求停止蒐集處理或利用、請求刪除，The Hope 教會將於提出請求之[*]日內回覆，必要時得再延長[*]日。<br></br>
                    個人資料正確性之影響<br></br>
                    在此提醒您，請確保您提供個人資料之正確性，以避免影響會員資格，或使用、參與會員服務及相關活動之權益。<br></br>
                    隱私保護承諾<br></br>
                    8.1The Hope 教會承諾將採取適當的技術與管理措施，保護您的個人資料安全，避免資料遭受未經授權的存取、洩漏、竄改或損壞。<br></br>
                    8.2若因個人疏忽導致之損失， The Hope 教會將無法承擔其賠償責任，故為了保護您的會員帳戶及個人資料的安全，請遵守以下規定：<br></br>
                    請勿提供您的個人資料予第三人申請帳號及密碼。<br></br>
                    請妥善保管個人申請之帳號及密碼，並勿任意將其資料提供予第三人。<br></br>
                    The Hope 教會保留隨時修訂本隱私政策及相關告知事項之權利。建議您隨時注意本隱私政策及相關告知事項之修改或變更。若您不同意前開修改或變更，請停止繼續使用本系統之服務。<br></br>
                    同意聲明<br></br>
                    我已詳閱並瞭解上述條款，同意 The Hope 教會依上述內容蒐集、處理及利用我的個人資料。
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} className="dialog-button">
                    {cancelText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfPrivacyPolicy;

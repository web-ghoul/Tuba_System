import PaymentBalanceDetailsSection from "../sections/PaymentSections/PaymentBalanceDetailsSection";
import PaymentBalanceSection from "../sections/PaymentSections/PaymentBalanceSection";
import PaymentTransactionsSection from "../sections/PaymentSections/PaymentTransactionsSection";
import PaymentUploadFilesSection from "../sections/PaymentSections/PaymentUploadFilesSection";

const Payment = () => {
  return (
    <>
      <PaymentBalanceSection />
      <PaymentBalanceDetailsSection />
      <PaymentUploadFilesSection />
      <PaymentTransactionsSection />
    </>
  );
};

export default Payment;

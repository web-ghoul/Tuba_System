import PaymentBalanceDetailsSection from "../sections/PaymentSections/PaymentBalanceDetailsSection";
import PaymentBalanceSection from "../sections/PaymentSections/PaymentBalanceSection";
import PaymentTransactionsSection from "../sections/PaymentSections/PaymentTransactionsSection";

const Payment = () => {
  return (
    <>
      <PaymentBalanceSection />
      <PaymentBalanceDetailsSection />
      <PaymentTransactionsSection />
    </>
  );
};

export default Payment;

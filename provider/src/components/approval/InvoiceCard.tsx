import InvoiceHeader from "./InvoiceHeader";
import RejectionAlert from "./RejectionAlert";
import ClaimDetails from "./ClaimDetails";
import CoveredPersonDetails from "./CoveredPersonDetails";
import ClaimItemsTable from "./ClaimItemsTable";
import ClaimTotals from "./ClaimTotals";

export default function InvoiceCard() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <InvoiceHeader />
      <RejectionAlert />
      <div className="mt-6">
        <ClaimDetails />
        <CoveredPersonDetails />
        <ClaimItemsTable />
        <ClaimTotals />
      </div>
    </div>
  );
}

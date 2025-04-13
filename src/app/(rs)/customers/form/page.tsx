import { BackButton } from "@/components/back-button";
import { getCustomer } from "@/lib/queries/getCustomers";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "./customer-form";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              customer ID #{customerId} not found
            </h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(customer);
      // edit customer form
      return <CustomerForm customer={customer} />;
    } else {
      // new customer form
      return <CustomerForm />;
    }
  } catch (error) {
    if (error instanceof Error) {
      Sentry.captureException(error);
      throw error;
    }
  }
}

import { fetchCustomers, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import EditInvoiceForm from "@/app/ui/invoices/edit-form";

export default async function Page({params}: {
    params: {
        id: string
    }
}){
    const {id} = params;

    const invoiceDetails = await fetchInvoiceById(id);
    const customers = await fetchCustomers();

    console.log('inv', invoiceDetails);
    
    
    return <main>
        <Breadcrumbs breadcrumbs={[
            {label: 'Invoices', href: 'dashboard/invoices'},
            {
                label: 'Edit Invoice',
                href: `/dashboard/invoices/edit/${id}`,
                active: true,
            }
        ]} />
        <EditInvoiceForm customers={customers} invoice={invoiceDetails}/>
    </main>
}
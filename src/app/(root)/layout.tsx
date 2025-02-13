import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/SideBar";
import Image  from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const loggedIn = {
    firstName: 'rukshan',
    postalCode: '12345',
    dateOfBirth: '1990-01-01',
    ssn: '123-45-6789',
    lastName: 'perera',
    $id: '1',
    email: 'rukshan@example.com',
    userId: 'user123',
    dwollaCustomerUrl: 'https://example.com/dwolla',
    dwollaCustomerId: 'dwolla123',
    address1: '123 Main St',
    address2: 'Apt 4B',
    city: 'Colombo',
    state: 'Western',
    zip: '12345',
    phone: '123-456-7890',
  };
  return (

    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src='/icons/logo.svg' width={30} height={30} alt="NexBank"/>
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
      {children}
      </div>
    </main>
  )
}
import Leftbar from "@/components/ui/Leftbar";
import RightSidebar from "@/components/ui/RightSidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="relative flex ">
    <Leftbar/>
    <div className="md:ml-40 md:mr-32">{children}</div>
    <RightSidebar/>
  </div>
  );
}

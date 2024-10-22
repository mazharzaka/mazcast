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
    <div className="md:ml-52 ml-14 w-full p-2">{children}</div>
    <RightSidebar/>
  </div>
  );
}

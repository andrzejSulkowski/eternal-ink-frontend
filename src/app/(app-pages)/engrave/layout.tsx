import { EngravingProvider } from "./(logic)/useContext";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <EngravingProvider>{children}</EngravingProvider>;
}
export default Layout;

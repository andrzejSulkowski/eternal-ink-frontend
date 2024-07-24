export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-templates-layout
      className="w-[2480px] h-[3508px] overflow-hidden"
    >
      {children}
    </div>
  );
}

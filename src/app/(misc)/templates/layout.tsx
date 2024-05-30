
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-templates-layout className="w-[573px] h-[842px] overflow-hidden">
      {children}
    </div>
  );
}

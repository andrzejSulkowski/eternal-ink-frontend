// Layout.tsx
export default function RootAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"flex flex-col flex-grow justify-between relative"}>
      {children}
    </main>
  );
}

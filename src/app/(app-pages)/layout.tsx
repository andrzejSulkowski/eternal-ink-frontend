// Layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow min-h-screen w-full overflow-x-hidden">
      {children}
    </main>
  );
}

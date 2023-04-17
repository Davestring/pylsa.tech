export const metadata = {
  title: 'Pylsa',
  description: 'Electronic Safety and Comfort Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

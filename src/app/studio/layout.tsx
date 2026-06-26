export const metadata = {
  title: 'Biodry India - Sanity Studio',
  description: 'Sanity Studio for Biodry India',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}

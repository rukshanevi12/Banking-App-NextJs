export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          SideBar
          <main>{children}</main>
        </body>
      </html>
    )
  }
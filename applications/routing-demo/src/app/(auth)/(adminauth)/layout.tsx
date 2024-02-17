export default function AdminAuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <div>Admin Auth</div>
          <div>{children}</div>
        </>
    )
  }
  
export default function ComplexDashBoardLayout({
    children,
    notifications,
    revenue,
    users,
    login
  }: {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode,
    login: React.ReactNode
  }) {
    const isLogin = false;

    return isLogin ?  (
        <>
          <div>{children}</div>
          <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div style={{display:"flex"}}>{notifications}</div>
          </div>
        </>
    ) :
    (<>{login}</>)
  }
  
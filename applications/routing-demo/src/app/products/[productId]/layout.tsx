export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <div>Similar product Carousel</div>
          <div>{children}</div>
        </>
    )
  }
  
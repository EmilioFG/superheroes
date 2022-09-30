import ContentLoader from "react-content-loader"

export const Mobile = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={300}
        height={1500}
        viewBox="auto"
        backgroundColor="#694bbb59"
        foregroundColor="#eaeaeb"
      >
        <rect x="75" y="12" rx="10" ry="10" width="200" height="27" />
        <rect x="75" y="45" rx="10" ry="10" width="200" height="150" />
        <rect x="75" y="250" rx="10" ry="10" width="200" height="27" />
        <rect x="75" y="285" rx="10" ry="10" width="200" height="150" />
        <rect x="75" y="445" rx="10" ry="10" width="200" height="150" />
      </ContentLoader>
    </div>
  )
}
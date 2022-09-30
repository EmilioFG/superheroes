import ContentLoader from "react-content-loader"

export const Desktop = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1500}
        height={1500}
        viewBox="auto"
        backgroundColor="#694bbb59"
        foregroundColor="#eaeaeb"
      >
        <rect x="300" y="12" rx="10" ry="10" width="285" height="27" />
        <rect x="300" y="45" rx="10" ry="10" width="285" height="150" />
        <rect x="590" y="45" rx="10" ry="10" width="285" height="150" />
        <rect x="880" y="45" rx="10" ry="10" width="285" height="150" />
        <rect x="1170" y="45" rx="10" ry="10" width="285" height="150" />
        <rect x="300" y="250" rx="10" ry="10" width="285" height="27" />
        <rect x="300" y="285" rx="10" ry="10" width="285" height="150" />
        <rect x="590" y="285" rx="10" ry="10" width="285" height="150" />
        <rect x="880" y="285" rx="10" ry="10" width="285" height="150" />
        <rect x="1170" y="285" rx="10" ry="10" width="285" height="150" />
        <rect x="300" y="445" rx="10" ry="10" width="285" height="150" />
        <rect x="590" y="445" rx="10" ry="10" width="285" height="150" />
        <rect x="880" y="445" rx="10" ry="10" width="285" height="150" />
        <rect x="1170" y="445" rx="10" ry="10" width="285" height="150" />
      </ContentLoader>
    </div>
  )
}
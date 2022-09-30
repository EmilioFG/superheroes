import ContentLoader from "react-content-loader"

export const Ipad = () => {
  return (
    <div>
      <ContentLoader
        speed={2}
        width={1000}
        height={1500}
        viewBox="auto"
        backgroundColor="#694bbb59"
        foregroundColor="#eaeaeb"
      >
        <rect x="50" y="12" rx="10" ry="10" width="225" height="27" />
        <rect x="50" y="45" rx="10" ry="10" width="225" height="150" />
        <rect x="280" y="45" rx="10" ry="10" width="225" height="150" />
        <rect x="510" y="45" rx="10" ry="10" width="225" height="150" />
        <rect x="740" y="45" rx="10" ry="10" width="225" height="150" />
        <rect x="50" y="250" rx="10" ry="10" width="225" height="27" />
        <rect x="50" y="285" rx="10" ry="10" width="225" height="150" />
        <rect x="280" y="285" rx="10" ry="10" width="225" height="150" />
        <rect x="510" y="285" rx="10" ry="10" width="225" height="150" />
        <rect x="740" y="285" rx="10" ry="10" width="225" height="150" />
        <rect x="50" y="445" rx="10" ry="10" width="225" height="150" />
        <rect x="280" y="445" rx="10" ry="10" width="225" height="150" />
        <rect x="510" y="445" rx="10" ry="10" width="225" height="150" />
        <rect x="740" y="445" rx="10" ry="10" width="225" height="150" />
      </ContentLoader>
    </div>
  )
}
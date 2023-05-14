import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">123</Typography.Link>
      <Typography.Link href="https:google.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https:google.com" target={"_blank"}>
        Term of Use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;

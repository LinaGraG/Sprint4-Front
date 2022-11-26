import { Content } from "./Content"
import { Box } from "./Box";
import Footer from "./Footer"

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
    <Footer />
  </Box>
);
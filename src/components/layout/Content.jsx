import { Box } from "./Box";
import Routes from "../../routes/Routers";

export const Content = () => (
  <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
    <Routes />
  </Box>
);

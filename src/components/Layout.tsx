import { Box } from "../components/Box";

export const Layout = ({ children } : any) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    {children}
  </Box>
);

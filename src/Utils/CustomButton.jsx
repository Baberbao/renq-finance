import { Button, styled } from "@mui/material";

//Styled Component
const CustomButton = styled(Button)({
  background: "linear-gradient(90.1deg, #4889DA 0.08%, #FB497F 101.84%)",
  borderRadius: "44px",
  "&:hover": {
    color: "#EF4D84",
    background: "white",
  },
  transition: "0.6s",
  height: "36px",
  fontWeight: 700,
  fontSize: "12px",
  color: "white",
});

export default CustomButton;

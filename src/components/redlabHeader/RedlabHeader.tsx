import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface RedlabHeaderProps {
  title: string;
}

const Title = styled(Typography)`
  :hover {
    color: #e11f1c;
    cursor: pointer;
  }
`;

function RedlabHeader({ title }: RedlabHeaderProps) {
  return <Title variant="h1">{title}</Title>;
}

export default RedlabHeader;

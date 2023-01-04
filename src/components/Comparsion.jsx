import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

import fi from "../images/fi.png";
import correct from "../images/correct.png";
import wrong from "../images/wrong.png";

export default function Comparsion() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "Feature 1",
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={wrong} width="33px" height="33px" alt="" />,
      <img src={wrong} width="33px" height="33px" alt="" />,
      <img src={wrong} width="33px" height="33px" alt="" />
    ),
    createData(
      "Feature 2",
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />
    ),
    createData(
      "Feature 3",
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />
    ),
    createData(
      "Feature 4",
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />
    ),
    createData(
      "Feature 5",
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={wrong} width="33px" height="33px" alt="" />,
      <img src={wrong} width="33px" height="33px" alt="" />,
      <img src={wrong} width="33px" height="33px" alt="" />
    ),
    createData(
      "Feature 6",
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />,
      <img src={correct} width="33px" height="33px" alt="" />
    ),
  ];

  return (
    <>
      <Box
        py={4}
        sx={{
          background: "#1D0742",
        }}
      >
        <Typography
          mb={4}
          textAlign="center"
          fontFamily="Open Sans"
          fontWeight="700"
          fontSize={{ xs: "26px", md: "36px" }}
          color="#FFFFFF"
        >
          We Vs Other Comparison{" "}
        </Typography>
        <Box>
          <Container maxWidth="md">
            <TableContainer sx={{ background: "#160531" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #7A7A7A" }}
                    >
                      <Typography
                        textAlign="center"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize={{ xs: "20px", md: "24px" }}
                        color="#FFFFFF"
                      >
                        Comparison
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #7A7A7A" }}
                    >
                      <img src={fi} width="145px" height="30px" alt="" />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #7A7A7A" }}
                    >
                      <Typography
                        textAlign="center"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize={{ xs: "20px", md: "24px" }}
                        color="#FFFFFF"
                      >
                        Other
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #7A7A7A" }}
                    >
                      <Typography
                        textAlign="center"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize={{ xs: "20px", md: "24px" }}
                        color="#FFFFFF"
                      >
                        Other
                      </Typography>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ border: "1px solid #7A7A7A" }}
                    >
                      <Typography
                        textAlign="center"
                        fontFamily="Open Sans"
                        fontWeight="700"
                        fontSize={{ xs: "20px", md: "24px" }}
                        color="#FFFFFF"
                      >
                        Other
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #7A7A7A" }}
                      >
                        <Typography
                          textAlign="center"
                          fontFamily="Open Sans"
                          fontWeight="600"
                          fontSize={{ xs: "20px", md: "24px" }}
                          color="#FFFFFF"
                        >
                          {row.name}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #7A7A7A" }}
                      >
                        {row.calories}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #7A7A7A" }}
                      >
                        {row.fat}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #7A7A7A" }}
                      >
                        {row.carbs}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #7A7A7A" }}
                      >
                        {row.protein}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Box>
    </>
  );
}

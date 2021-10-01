import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CarOne() {
    const [inputs, setInputs] = useState(
        { distance: '', time: '' }
    );
    const [oneTrip, setOneTrip] = useState();

    const Count = () => {
        const speed = inputs.distance / inputs.time;
        const consuption = 0.03 * 1.009 * inputs.distance;
        console.log(inputs, speed, consuption);

        function createData(distance, time, speed, consuption) {
            return { distance, time, speed, consuption };
        }

        const rows = [
            createData(inputs.distance, inputs.time, speed, consuption),
        ];

        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Matka</TableCell>
                            <TableCell align="left">Aika</TableCell>
                            <TableCell align="left">Nopeus</TableCell>
                            <TableCell align="left">Kulutus l / h</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell align="left">{row.distance}</TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left">{speed.toFixed(1)}</TableCell>
                                <TableCell align="left">{consuption.toFixed(1)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
        console.log(inputs);
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Tämä on auto A , jonka kulutus on 3l / 100km
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{
                    marginTop: "20px",
                    marginLeft: "20px"
                }}
            >
                <TextField
                    id="outlined-number"
                    label="Ajomatka: km"
                    type="number"
                    name="distance"
                    value={inputs.distance}
                    onChange={e => handleChange(e)}
                />
                <TextField
                    id="outlined-number"
                    label="Ajoaika"
                    type="number"
                    name="time"
                    value={inputs.time}
                    onChange={e => handleChange(e)}
                />
                <Button style={{
                    marginTop: "20px"
                }}
                    variant="contained"
                    onClick={Count}
                >Laske</Button>
            </Box>
            <Count />
        </div>
    );
}

export default CarOne;

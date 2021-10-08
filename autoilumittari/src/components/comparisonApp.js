import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';

function ComparisonApp() {
    const [inputs, setInputs] = useState(
        { distance: '', speedOne: '', speedTwo: '' }
    )

    const timeOne = inputs.distance / inputs.speedOne;
    const timeTwo = inputs.distance / inputs.speedTwo;

    const consuptionCarASpeed1 = 3 * 1.009 ** (inputs.speedOne - 1) * (inputs.distance / 100);
    const consuptionCarASpeed2 = 3 * 1.009 ** (inputs.speedTwo - 1) * (inputs.distance / 100);

    const consuptionCarBSpeed1 = 3.5 * 1.009 ** (inputs.speedOne - 1) * (inputs.distance / 100);
    const consuptionCarBSpeed2 = 3.5 * 1.009 ** (inputs.speedTwo - 1) * (inputs.distance / 100);

    const consuptionCarCSpeed1 = 4 * 1.009 ** (inputs.speedOne - 1) * (inputs.distance / 100);
    const consuptionCarCSpeed2 = 4 * 1.009 ** (inputs.speedTwo - 1) * (inputs.distance / 100);

    function createData(speed, time, carA, carB, carC) {
        return { speed, time, carA, carB, carC };
    }

    const rows = [
        createData(inputs.speedOne, timeOne, consuptionCarASpeed1, consuptionCarBSpeed1, consuptionCarCSpeed1),
        createData(inputs.speedTwo, timeTwo, consuptionCarASpeed2, consuptionCarBSpeed2, consuptionCarCSpeed2)
    ];

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
        console.log(inputs);
    }

    const Compare = () => {
        const comparisonInPerCents = (timeOne - timeTwo) / timeOne * 100;
        const comparisonInHours = timeOne - timeTwo;

        const comparisonConsuptionPercentCarA = (consuptionCarASpeed2 - consuptionCarASpeed1) / consuptionCarASpeed1 * 100;
        const comparisonConsuptionPercentCarB = (consuptionCarBSpeed2 - consuptionCarBSpeed1) / consuptionCarBSpeed1 * 100;
        const comparisonConsuptionPercentCarC = (consuptionCarCSpeed2 - consuptionCarCSpeed1) / consuptionCarCSpeed1 * 100;

        const comparisonConsuptionLitreCarA = consuptionCarASpeed2 - consuptionCarASpeed1;
        const comparisonConsuptionLitreCarB = consuptionCarBSpeed2 - consuptionCarBSpeed1;
        const comparisonConsuptionLitreCarC = consuptionCarCSpeed2 - consuptionCarCSpeed1;

        return (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <div style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography variant="h5" style={{ marginBottom: 20 }}>
                        Vertailut ajassa
                    </Typography>
                    <Typography>
                        Nopeutuu / hidastuu {comparisonInPerCents} %
                    </Typography>
                    <Typography>
                        Nopeutuu / hidastuu {comparisonInHours.toFixed(1)} h
                    </Typography>
                </div>

                <div style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography variant="h5" style={{ marginBottom: 20 }}>
                        Auto A
                    </Typography>
                    <Typography>
                        Kulutus kasvaa/alenee {comparisonConsuptionPercentCarA.toFixed(1)} %
                    </Typography>
                    <Typography>
                        Kulutus kasvaa/alenee {comparisonConsuptionLitreCarA.toFixed(1)} litroina
                    </Typography>
                </div>

                <div style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography variant="h5" style={{ marginBottom: 20 }}>
                        Auto B
                    </Typography>
                    <Typography>
                        Kulutus kasvaa/alenee {comparisonConsuptionPercentCarB.toFixed(1)} %
                    </Typography>
                    <Typography>
                        Kulutus kasvaa/alenee {comparisonConsuptionLitreCarB.toFixed(1)} litroina
                    </Typography>
                </div>

                <div style={{ marginLeft: 20, marginRight: 20 }}>
                    <Typography variant="h5" style={{ marginBottom: 20 }}>
                        Auto C
                    </Typography>
                    <Typography>
                        Kulutus kasvaa/alenee {comparisonConsuptionPercentCarC.toFixed(1)} %
                    </Typography>
                    <Typography>
                        Kulutus kasvaa/alenee {comparisonConsuptionLitreCarC.toFixed(1)} litroina
                    </Typography>
                </div>
            </Box>
        )
    }

    return (
        <div className="App">
            <AppBar>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Autoilumittari
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{
                display: 'flex'
            }}>
                <div style={{
                    marginTop: 90,
                    marginLeft: 30,
                    display: 'inline-grid'
                }}>
                    <TextField
                        id="outlined-number"
                        label="Etäisyys"
                        type="number"
                        name="distance"
                        value={inputs.distance}
                        onChange={e => handleChange(e)}
                        style={{
                            marginTop: 20
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Nopeus nro. 1: km / h"
                        type="number"
                        name="speedOne"
                        value={inputs.speedOne}
                        onChange={e => handleChange(e)}
                        style={{
                            marginTop: 20
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Nopeus nro. 2: km / h"
                        type="number"
                        name="speedTwo"
                        value={inputs.speedTwo}
                        onChange={e => handleChange(e)}
                        style={{
                            marginTop: 20
                        }}
                    />
                </div>
                <div>
                    <TableContainer component={Paper} style={{
                        marginTop: 110,
                        marginLeft: 30,
                        marginRight: 30,
                        height: 'fit-content'
                    }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Nopeudet</TableCell>
                                    <TableCell align="left">Kesto h</TableCell>
                                    <TableCell align="left">Kulutus A</TableCell>
                                    <TableCell align="left">Kulutus B</TableCell>
                                    <TableCell align="left">Kulutus C</TableCell>
                                </TableRow>
                            </TableHead>
                            {inputs.speedOne != 0 && inputs.speedTwo != 0 &&
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow>
                                            <TableCell align="left">{row.speed}</TableCell>
                                            <TableCell align="left">{row.time.toFixed(1)}</TableCell>
                                            <TableCell align="left">{row.carA.toFixed(1)}</TableCell>
                                            <TableCell align="left">{row.carB.toFixed(1)}</TableCell>
                                            <TableCell align="left">{row.carC.toFixed(1)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>}
                        </Table>
                    </TableContainer>
                </div>
            </div>
            {inputs.speedOne != 0 && inputs.speedTwo != 0 &&
                <Compare />
            }
        </div>
    );
}

export default ComparisonApp;

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function CarThree() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Tämä on auto C , jonka kulutus on 4l / 100km
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default CarThree;

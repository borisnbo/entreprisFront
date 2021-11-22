import { AppBar, Grid, IconButton, TextField, Toolbar, Typography } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    title:{
        flexGrow:1
    },
    item:{
        marginLeft:40,
        marginRight:20,
    },
    link:{
        textDecoration:"none",
        color:"#fff",
    }
})

const Navbar = ()=>{

    const classes= useStyles()

    return <>
        <AppBar position="static" className={classes.nav}>
            <Toolbar>
                <Typography className={classes.title}>
                    Welcome to MT
                </Typography>
                <Typography className={classes.item}>
                    <Link to="/services" className={classes.link}>Services</Link>
                </Typography>
                <Typography className={classes.item}>
                    <Link to="/postes" className={classes.link}>Postes</Link>
                </Typography>
                <Typography className={classes.item}>
                    <Link to="/employes" className={classes.link}>Employes</Link>
                </Typography>
                <IconButton
                 icon={<NoteAdd/>}
                />
            </Toolbar>
        </AppBar>
    </>
}

export default Navbar;
import { Grid, makeStyles } from "@material-ui/core";
import Navbar from "./components/navbar";

const useStyles = makeStyles({
    page:{
        backgroundColor:"#f9f9f9",
        height:"100%",
        padding:19
    },
})

const Layout = ({children})=>{

    const classes = useStyles()

    return <>
    <div>
        <Navbar/>
        {/* Navbar */}

        {/* Drawer */}
        <Grid container>
            <Grid item xs={12} md={2} className={classes.side}>
    
            </Grid>
            <Grid item xs={12} md={8} className={classes.page}>
                <div>
                    {children}
                </div>
            </Grid>
        </Grid>
    </div>
    </>
}
export default Layout;
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    page:{
        backgroundColor:"#f9f9f9",
        height:"100%",
        padding:19
    },    
    field:{
        marginTop:19
    }, 
    auth:{
        width:"40%",
        margin:"0 auto"
    },
})

const Auth = ({isAuth})=>{

    const classes = useStyles()

    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name !=""){
            fetch("http://localhost:9898/auth",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({username:name, pass:pass})
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then(() => history.push("/employes"))
            .catch((data) => console.log(data))
            isAuth("name");
        }
    }

    return <>
    <div className={classes.auth}>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <TextField
                label="Nom d'utilisateur"
                variant="outlined"
                fullWidth
                required
                className={classes.field}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                label="Mot de pass"
                variant="outlined"
                fullWidth
                required
                className={classes.field}
                onChange={(e)=>setPass(e.target.value)}
            />
            <Button type="submit" color="primary" fullWidth variant="contained">se Connecter</Button>
        </form>
    </div>
    </>
}
export default Auth;
import { Button, Grid, makeStyles, Select, TextField } from "@material-ui/core";
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
        width:"70%",
        margin:"0 auto"
    },
})

const CreateS = ()=>{

    const classes = useStyles()

    const [nom, setName] = useState()
    const [description, setDescription] = useState()
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nom !=""){
            fetch("http://localhost:9898/addService",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({nom, description})
            })
            .then(() => history.push("/services"))
            .catch((data) => console.log(data))
        
        }
    }

    return <>
    <div className={classes.auth}>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <TextField
                label="Nom du service"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                label="Description du service"
                variant="outlined" fullWidth required className={classes.field} rows={2}
                onChange={(e)=>setDescription(e.target.value)}
            />
            <Button type="submit" color="primary" fullWidth variant="contained">Enregistrer</Button>
        </form>
    </div>
    </>
}
export default CreateS;
import { Button, Grid, makeStyles, Select, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
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

const CreateP = ()=>{

    const classes = useStyles()

    const [nom, setName] = useState()
    const [description, setDescription] = useState()
    const [service, setService] = useState()
    const [services, setServices] = useState([])
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nom !=""){
            fetch("http://localhost:9898/addPoste",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({nom, description, service})
            })
            .then(() => history.push("/postes"))
            .catch((data) => console.log(data))
        
        }
    }

    useEffect(()=> {
        fetch('http://localhost:9898/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])


    return <>
    <div className={classes.auth}>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <TextField
                label="Nom du Poste"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                label="Description du Poste"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setDescription(e.target.value)}
            />
            
            <Select onChange={(e)=>setService(e.target.value)} className={classes.field}
                label="Selectionnez le Poste" fullWidth required>
                    {services.map(e=>(
                        <option value={e}>{e.nom }</option>
                    ))}
            </Select>
            <Button type="submit" color="primary" fullWidth variant="contained">Enregistrer</Button>
        </form>
    </div>
    </>
}
export default CreateP;
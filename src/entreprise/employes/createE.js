import { Button, Grid, makeStyles, Select, TextField } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
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

const CreateE = ()=>{

    const classes = useStyles()

    const [nom, setName] = useState()
    const [password, setPass] = useState()
    const [prenom, setPrenom] = useState()
    const [sexe, setSexe] = useState()
    const [poste, setPoste] = useState()
    const [username, setPseudo] = useState()
    const [postes, setPostes] = useState([])
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(nom !=""){
            fetch("http://localhost:9898/addEmploye",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({nom, prenom, sexe, poste, password, username})
            })
            .then(() => history.push("/employes"))
            .catch((data) => console.log(data))
        
        }
    }

    
    useEffect(()=> {
        fetch('http://localhost:9898/postes')
        .then(res => res.json())
        .then(data => setPostes(data))
    }, [])

    return <>
    <div className={classes.auth}>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <TextField
                label="Nom d'utilisateur"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                label="Prenom d'utilisateur"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setPrenom(e.target.value)}
            />
            <TextField
                label="Pseudonyme"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setPseudo(e.target.value)}
            />
            <TextField
                label="Sexe"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setSexe(e.target.value)}
            />
            <TextField
                label="mot de pass" type="password"
                variant="outlined" fullWidth required className={classes.field}
                onChange={(e)=>setPass(e.target.value)}
            />
            <Select onChange={(e)=>setPoste(e.target.value)} 
                label="Selectionnez le Poste" fullWidth required>
                    {postes.map(e=>(
                        <option value={e}>{e.nom }</option>
                    ))}
            </Select>
            <Button type="submit" color="primary" fullWidth variant="contained">Enregistrer</Button>
        </form>
    </div>
    </>
}
export default CreateE;
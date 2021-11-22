import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    item:{
        color:"#fff",
    },
})

const Poste = ()=>{

    const [employes, setEmployes] = useState([])

    useEffect(()=> {
        fetch('http://localhost:9898/postes')
        .then(res => res.json())
        .then(data => setEmployes(data))
    }, [])

    const classes = useStyles()

    return <>
        <div>
            
            <Button variant="contained" color="primary">
                    <Link to="poste/add" className={classes.item} >Ajouter Poste</Link>
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom du poste </TableCell>
                        <TableCell>Description </TableCell>
                        <TableCell>Service </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employes.map(e=>(
                        <TableRow key={e.id}>
                            <TableCell>{e.nom }</TableCell>
                            <TableCell>{e.description }</TableCell>
                            <TableCell>{e.service.nom }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </>
}
export default Poste;
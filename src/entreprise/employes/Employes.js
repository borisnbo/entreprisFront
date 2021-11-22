import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    item:{
        color:"#fff",
    },
})

const Employe = ()=>{

    const [employes, setEmployes] = useState([])

    const handleDelete = (id)=>{
        if (id) {
            fetch("http://localhost:9898/deleteEmp/"+id,{
                method:"DELETE"
            })
            const newEmp = employes.filter(note=>note.id != id)
            setEmployes(newEmp)
        }
    }
    useEffect(()=> {
        fetch('http://localhost:9898/employes')
        .then(res => res.json())
        .then(data => setEmployes(data))
    }, [])


    const classes = useStyles()

    return <>
        <div>
            <Button variant="contained" color="primary">
                    <Link to="employe/add" className={classes.item} >Add Employe</Link>
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom </TableCell>
                        <TableCell>Prenom </TableCell>
                        <TableCell>Sexe </TableCell>
                        <TableCell>Poste </TableCell>
                        <TableCell>Option </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employes.map(e=>(
                        <TableRow key={e.id}>
                            <TableCell>{e.nom }</TableCell>
                            <TableCell>{e.prenom }</TableCell>
                            <TableCell>{e.sexe }</TableCell>
                            <TableCell>{e.poste.description }</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" onClick={()=>handleDelete(e.id)}>
                                    Suprimer
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </>
}
export default Employe;
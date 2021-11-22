import { Button, Grid, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    item:{
        color:"#fff",
    },
})

const Service = ()=>{

    const [employes, setEmployes] = useState([])

    useEffect(()=> {
        fetch('http://localhost:9898/services')
        .then(res => res.json())
        .then(data => setEmployes(data))
    }, [])

    const classes = useStyles()

    return <>
        <div>
            
            <Button variant="contained" color="primary">
                    <Link to="service/add" className={classes.item} >Add Service</Link>
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom du service </TableCell>
                        <TableCell>Description </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employes.map(e=>(
                        <TableRow key={e.id}>
                            <TableCell>{e.nom }</TableCell>
                            <TableCell>{e.description }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </>
}
export default Service;
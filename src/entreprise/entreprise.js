
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateE from './employes/createE';
import Employe from './employes/Employes';
import Layout from './Layout';
import Auth from './login/auth';
import CreateP from './postes/createP';
import Poste from './postes/postes';
import CreateS from './service/createS';
import Service from './service/service';

const Entreprise = ()=>{
 
  // Pour le moment, nous partons sur la base d'un seul tutoriel existant
const isAuth =(name) =>{
    console.log(name)
} 
    return <>
    <Router>
      <Layout> 
        <Switch>
          <Route exact path="/">
            Couvou le monde
          </Route>
          <Route path="/course/html">
            hello les cours
          </Route>
          <Route path="/employes">
            <Employe/>
          </Route>
          <Route path="/auth">
            <Auth isAuth={isAuth}/>
          </Route>
          <Route path="/employe/add">
            <CreateE/>
          </Route>
          <Route path="/services">
            <Service/>
          </Route>
          <Route path="/service/add">
            <CreateS/>
          </Route>
          <Route path="/postes">
            <Poste/>
          </Route>
          <Route path="/poste/add">
            <CreateP/>
          </Route>
        </Switch>
      </Layout>
    </Router>
    </>
}

export default Entreprise;
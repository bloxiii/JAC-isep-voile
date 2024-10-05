import React from 'react';
import './login.css';
import { createRoot } from "react-dom/client";
import Popup from 'reactjs-popup';
import { LoginRequest } from '../model/LoginRequest';
import { LoginResponse } from '../model/LoginResponse';


export default function ComponentA() {


  var loginRequest = new LoginRequest(); 
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Fname, setFname] = React.useState("");
  const [Lname, setLname] = React.useState("");
  const [Password, setpassword] = React.useState("");


  const openPage2 = () => {
    window.location.href = '/page1';
  };

  const openPage1 = () => {
    
    loginRequest.user = user;
    loginRequest.password = password;

    fetch('http://localhost:3000/login?user='+ encodeURI(user) + "&password=" + encodeURI(password), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur HTTP, statut ' + response.status);
      }
      return response;
    })
    .then(data => {
      console.log("data", data);
      // Si la réponse est "oui", rediriger vers la page "/task"
      if (data) {
        window.location.href = '/task';
      } else {
        console.log("La réponse du backend n'est pas 'oui'");
      }
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    // Vérification que tous les champs sont remplis avant de soumettre
    if (!Fname || !Lname || !Email || !Password) {
        // Gérer le cas où des champs obligatoires sont manquants
        console.log("Veuillez remplir tous les champs.");
        return;
    }
    
    // Création de l'objet utilisateur avec les données du formulaire
    const newUser: Createcompte = {
        firstName: Fname,
        lastName: Lname,
        email: Email,
        password: Password
    };

    interface Createcompte {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
  }
  
    
    // Ici, vous pouvez effectuer des actions supplémentaires, telles que l'envoi des données à un serveur, le stockage dans une base de données, etc.
    
    // Réinitialisation des champs après la soumission
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
};


  const handleChangeUser = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };
  const handleChangepassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setpassword(event.target.value);
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  const handleChangeFname = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFname(event.target.value);
  };
  const handleChangeLname = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLname(event.target.value);
  };


  


    return (
    <div>
        <div className='logo'>
            <span >
            <div className='se_co'>
<h1 className="H1"><strong>Connectez-vous</strong></h1>
<form className='Taille'>
        <label htmlFor="titre" className='Mail'>Adresse Email</label>
        <input
          type="email"
          id="titre"
          name="titre"
          value={user}
          onChange={handleChangeUser}
          placeholder="Exemple@gmail.com"
        />
        <label htmlFor="auteur" className='Mdp'>Mot de passe</label>
        <input
          type="password"
          id="auteur"
          name="auteur"
          value={password}
          onChange={handleChangePassword}
          placeholder="Entrez votre mot de passe"
        />
        <label htmlFor="details" className='Mdp'>Mot de passe oublié</label>
        <div className='Mdp'></div>
        </form>
        <button onClick={() => openPage1()} id='buttontask' type="submit" className='Seconnecter'> Se connecter
  
  </button>
  <div className='Mdp'></div>
  <Popup trigger={<button className='nouvelletask1'>
    <div className="Text_nouvelle_tache">Créer un compte</div>
</button>}>
    <div className='modal' style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="container">
            <h1 className='h1-new-task'>Créer un compte</h1>
            <form onSubmit={handleSubmit} action="#">
                <label htmlFor="Fname">First Name</label>
                <input className='input-padding'
                    type="text"
                    id="Fname"
                    name="Fname"
                    value={Fname}
                    onChange={handleChangeFname}
                    placeholder="Entrez votre prénom"
                />
                <label htmlFor="Lname">Last Name</label>
                <input className='input-padding'
                    type="text"
                    id="Lname"
                    name="Lname"
                    value={Lname}
                    onChange={handleChangeLname}
                    placeholder="Entrez votre nom de famille"
                />
                <label htmlFor="Email">Email</label>
                <input className='input-padding'
                    type="email"
                    id="Email"
                    name="Email"
                    value={Email}
                    onChange={handleChangeEmail}
                    placeholder="Entrez votre adresse email"
                />
                <label htmlFor="Password">Password</label>
                <input className='input-padding'
                    type="password"
                    id="Password"
                    name="Password"
                    value={Password}
                    onChange={handleChangepassword}
                    placeholder="Entrez votre mot de passe"
                />
                <button className='buttontask' type="submit">Créer le compte</button>
            </form>
        </div>
    </div>
</Popup>


          </div>
            </span>

        </div>
    </div>


  );
}










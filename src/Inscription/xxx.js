useEffect(() => {
    // Vérifiez si les champs requis sont remplis avant d'envoyer la requête POST
    if (firstname && lastname && email && telephone && password && password === confirmpassword) {
      // Données à envoyer dans la requête POST
      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        telephone: telephone,
        password: password
      };

      // Envoi de la requête POST
      axios.post('https://api.example.com/register', data)
        .then(response => {
          // Gérer la réponse de réussite
          console.log('Inscription réussie:', response.data);
          // Rediriger l'utilisateur vers une autre page par exemple '/connexion'
        })
        .catch(error => {
          // Gérer les erreurs
          console.error('Erreur lors de l\'inscription:', error);
        });
    }
  }, [firstname, lastname, email, telephone, password, confirmpassword]);

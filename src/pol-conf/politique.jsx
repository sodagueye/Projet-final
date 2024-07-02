import "../pol-conf/politique.css"
export default function Politique() {
    return <div className="politique">
        <h1 style={{color:"#91725d"}} className="py-4">POLITIQUE DE CONFIDENTIALITÉ</h1>
        <p>
            Le <strong>Groupe Keur yaye Soda</strong> s'engage à protéger la confidentialité
            des informations personnelles de ses utilisateurs. Cette politique de
            confidentialité explique comment nous collectons, utilisons, divulguons et
            protégeons vos informations personnelles.
        </p>
        <ol>
            <li className="title">Informations Personnelles Collectées</li>
            <p>Nous pouvons collecter différentes catégories d'informations personnelles, y compris, mais sans s'y limiter, les informations suivantes :</p>
            <ul>
                <li>Informations d'identification personnelle (nom, adresse, adresse e-mail, numéro de téléphone, etc.).</li>
                <li>Informations de connexion et d'utilisation du site web.</li>
                <li>Informations démographiques.</li>
            </ul>
            <li className="title">Utilisation des Informations Personnelles</li>
            <p>Nous utilisons les informations personnelles collectées aux fins suivantes :</p>
            <ul>
                <li>Fournir, personnaliser et améliorer nos services.</li>
                <li>Communiquer avec vous, répondre à vos demandes et fournir un support client.</li>
                <li>Analyser l'utilisation du site web et améliorer notre contenu et nos services.</li>
                <li>Respecter les obligations légales.</li>
            </ul>
            <li className="title">Divulgation des Informations Personnelles</li>
            <p>Nous ne vendons ni ne louons vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations dans les circonstances suivantes :</p>
            <ul>
                <li>Avec votre consentement.</li>
                <li>Pour respecter les obligations légales.</li>
                <li>Avec des prestataires de services tiers qui agissent en notre nom.</li>
            </ul>
            <li className="title">Sécurité des Informations Personnelles</li>
            <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos 
                informations personnelles contre tout accès non autorisé, altération, divulgation
                 ou destruction.</p>
            <li>Modification de la Politique de Confidentialité</li>
            <p>Nous nous réservons le droit de mettre à jour cette politique de confidentialité
                 à tout moment. La date de la dernière mise à jour sera indiquée en bas de la 
                 page.
            </p>
            <li className="title">Contact</li>
            <p>Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:yayesoda@gmail.com" style={{textDecoration:"none"}}>yayesoda@gmail.com</a>.</p>
        </ol>
        <h6>Dernière mise à jour :  01/07/2024</h6>

    </div>
}
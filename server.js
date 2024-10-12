const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connection URI to MongoDB
const uri = "mongodb+srv://afrotennis-admin:FifasocceR27081954@cluster-afrotennis.8cj9jxo.mongodb.net/Cluster-afrotennis?retryWrites=true&w=majority";

// Fonction principale pour gérer la connexion et les interactions avec la DB
async function main() {
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");

        const database = client.db("Cluster-afrotennis");
        const messages = database.collection("messages");

        // Route pour gérer les soumissions du formulaire
        app.post("/api/contact", async (req, res) => {
            const { name, email, subject, message } = req.body;

            // Enregistrement du message dans MongoDB
            const newMessage = {
                name,
                email,
                subject,
                message,
                date: new Date(),
            };

            try {
                await messages.insertOne(newMessage); // Ajoute à MongoDB

                // Optionnel : Envoi d'un email via Nodemailer
                const transporter = nodemailer.createTransport({
                    host: "ssl0.ovh.net",
                    port: 465,
                    secure: true, // true pour port 465
                    auth: {
                        user: "hello@afrotennis.com",
                        pass: "k8Uf7D9wQ9", // Remplace par le mot de passe de ta messagerie OVH
                    },
                });

                const mailOptions = {
                    from: email,
                    to: "hello@afrotennis.com",
                    subject: `New Contact Message from ${name}`,
                    text: `You have a new message from ${email}\n\nSubject: ${subject}\n\nMessage:\n${message}`,
                };

                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.status(500).send({ message: "Error sending email", error });
                    } else {
                        res.send({ message: "Message received and email sent!" });
                    }
                });
            } catch (error) {
                res.status(500).send({ message: "Error saving message", error });
            }
        });

    } catch (e) {
        console.error(e);
    } finally {
        // Ne ferme pas le client si tu as besoin d'une connexion persistante
    }
}

// Appel de la fonction pour démarrer la connexion à la base de données
main().catch(console.error);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

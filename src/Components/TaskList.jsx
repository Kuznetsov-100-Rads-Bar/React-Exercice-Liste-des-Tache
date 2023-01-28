import { useState } from 'react';

export default function TaskList() {
    /**
     * La première fonction => const [tasks, setTasks] = useState([]); il initialise un tableau vide pour stocker les tâches, une déclaration d'un état local "tasks" initialisé à une liste vide, et une fonction "setTasks" pour mettre à jour cet état 
     */
    const [tasks, setTasks] = useState([]);
    /** La seconde fonction => const [newTask, setNewTask] = useState(''); il initialise une chaîne vide pour stocker la nouvelle tâche saisie par l'utilisateur, une déclaration d'un état local "newTask" initialisé à une chaîne vide, et une fonction "setNewTask" pour mettre à jour cet état */
    const [newTask, setNewTask] = useState('');
   /** La fonction handleSubmit est utilisée pour gérer l'événement de soumission du formulaire.  */
   /** Cette fonction ajoute la nouvelle tâche saisie à la liste des tâches existantes en utilisant la fonction setTasks et remet la valeur de la nouvelle tâche à vide en utilisant la fonction setNewTask. */

   // Déclaration d'une fonction "handleSubmit" pour gérer la soumission du formulaire
    const handleSubmit = (event) => {
        /** La méthode event.preventDefault() est utilisée pour empêcher le comportement par défaut de l'événement de soumission, qui est de recharger la page, en faite ça empêche la mise à jour de la page lors de la soumission du formulaire */
        event.preventDefault();
        // Ajoute la nouvelle tâche à la liste de tâches en utilisant la fonction "setTasks"
        setTasks([...tasks, newTask]);
        // Réinitialise la valeur de "newTask" à vide
        setNewTask('');
    }
    /** Le rendu de la vue */
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Champ de saisie pour entrer une nouvelle tâche */}
                <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} placeholder="Nouvelle tache" />
                {/* Bouton pour soumettre la nouvelle tâche */}
                <button type="submit">Ajouter une Tâche</button>
            </form>
            {/* Affichage de la liste de tâches */}
            <ul>
                {tasks.map((task, index) =>
                    <li key={index}>{task}</li>
                )}
            </ul>
        </div>
    );
}

/** Alors en gros, on a un formulaire est créé avec un champ de saisie pour la nouvelle tâche et
 *  un bouton pour soumettre le formulaire.
 * Et lui l'utilisateur peut saisir la nouvelle tâche dans le champ de saisie et
 *  soumettre le formulaire en cliquant sur le bouton "Ajouter une tâche".
 *  La liste des tâches existantes est ensuite affichée sous forme de liste qui est non ordonnée, (la balise ul). */
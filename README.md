## Command line stuff

### Navigation dans un terminal Linux

La navigation dans un terminal Linux se fait à l'aide de la commande **cd**. Cette commande permet de changer de répertoire de travail.

#### cd

La syntaxe de la commande **cd** est la suivante :

```
cd <chemin>
```

`<chemin>` est le chemin vers le répertoire que vous souhaitez ouvrir.

##### Exemples :

- `cd /` => Ouvre le répertoire racine du système de fichiers.
- `cd ~` ou `cd` => Ouvre le répertoire personnel de l'utilisateur courant.
  `cd /home` : Ouvre le répertoire **home**.

#### Chemins relatifs et absolus

Il existe deux types de chemins en Linux : les chemins relatifs et les chemins absolus.

- Les chemins relatifs indiquent le chemin d'un répertoire par rapport au répertoire de travail actuel.

- Les chemins absolus indiquent le chemin d'un répertoire par rapport à la racine du système de fichiers.

##### Exemples :

- `cd home` ou `cd ./home` => Ce chemin est relatif. Il indique que le répertoire dossier est situé dans le répertoire de travail actuel.
- `cd /home` => Ce chemin est absolu. Il indique que le répertoire dossier est situé dans le répertoire personnel de l'utilisateur utilisateur.

#### mv

La commande mv permet de déplacer ou de renommer un fichier ou un répertoire.

##### Syntaxe :

`mv <fichier/répertoire> <nouveau-nom>`

##### Exemples :

- `mv ./fichier.txt ./nouveau-fichier.txt` => Renomme le fichier fichier.txt en nouveau-fichier.txt.
- `mv ./dossier ./dossier-nouveau` => Déplace le répertoire dossier dans un nouveau répertoire nommé dossier-nouveau.

#### touch

La commande touch permet de créer un nouveau fichier vide.

##### Syntaxe :

`touch <fichier>`

##### Exemple :

- `touch fichier.txt` => Crée un nouveau fichier vide nommé fichier.txt.

#### mkdir

La commande mkdir permet de créer un nouveau répertoire.

##### Syntaxe :

`mkdir <répertoire>`

##### Exemple :

- `mkdir dossier` => Crée un nouveau répertoire nommé dossier.

#### Autres commandes utiles

- `pwd` => Affiche le chemin du répertoire de travail actuel.
- `ls` => Affiche la liste des fichiers et répertoires du répertoire de travail actuel.
- `rm` => Supprime un fichier ou un répertoire.
- `cp` => Copie un fichier ou un répertoire.
- `cat` => Affiche le contenu d'un fichier.

##### Exemples :

- `rm fichier.txt` => Supprime le fichier fichier.txt.
- `cp fichier.txt fichier-copie.txt` => Copie le fichier fichier.txt dans un nouveau fichier nommé fichier-copie.txt.

### Nvs

**Node Version Switcher** permet d'utiliser une version specifique de node. Utiliser la commande et suivre les instruction. `node` sera ensuite disponible dans la session actuelle.

```
nvs
```

### Git

##### Cloner un dépot de code

```
git clone <lien-ssh>
```

##### Ajouter des modifications

```
git add <chemin-vers-le-dossier/fichier>
```

##### Creer un commit

Associe les changements ajouté précedement a une "sauvegarde"

```
git commit -m "<mon-message-de-commit>"
```

##### Envoyer les commits sur le depot de code

```
git push
```

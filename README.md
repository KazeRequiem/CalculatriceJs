# 📟 Calculatrice en JavaScript

Ce projet est une calculatrice simple développée en JavaScript, permettant d'effectuer des opérations de base telles que l'addition, la soustraction, la multiplication et la division.

## 🚀 Fonctionnalités
- Interface simple avec affichage des résultats.
- Bouton de réinitialisation.
- Prise en charge des erreurs de calcul.

## 🛠 Technologies utilisées
- HTML
- CSS
- JavaScript

## 📜 Code principal (JavaScript)
```js
const clearButton = document.getElementById('clear');
const buttons = document.querySelectorAll('.content button');
const display = document.getElementById('result');

let clear = true;

clearButton.addEventListener('click', () => {
    display.value = '';
    clear = true;
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.getAttribute('value') === '='){
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
                clear = true;
            }
        }else {
            if (clear) {
                display.value = button.getAttribute('value');
                clear = false;
            }
            else{
                display.value += button.getAttribute('value');
            }
        }
    });
});
```

## 📂 Installation
1. Clone ce dépôt :
   ```sh
   git clone https://github.com/tonpseudo/calculatrice-js.git
   ```
2. Ouvre le fichier `index.html` dans ton navigateur.

## 📷 Aperçu
![image](https://github.com/user-attachments/assets/91462d22-0888-463a-b728-4cd4d692db65)

## ✨ Améliorations possibles
- Ajouter la gestion du clavier.
- Améliorer le style avec CSS.
- Ajouter des fonctionnalités avancées (exponentiation, racine carrée...).

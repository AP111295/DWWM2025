/*
   typescript est une surcouche à Javascript.
   il permet d'ajouter des fonctionnalités que l'on trouve habituellement dans les langages de développement plus classique.

   Dont la principale, qui se trouve dans le nom, le typage.

   ? Installation :
       * npm install typescript --save-dev
   ? transpiler un fichier :
       * npx tsc pathTofile.ts
   ? transpiler vers un autre dossier :
       * npx tsc pathtofile.ts --outDir pathtofolder


   pour éviter de retaper cela à chaque fois, on peut créer un fichier "tsconfig.js" à la racine du projet et y enter :
      {
    "compilerOptions": {
        "outDir": "dist"
    },
    "files": [
        "src/01-install.ts"
    ]
}

Ensuite on aura plus qu'à taper :
   * npx tsc
ou si on veut que le terminal surveille tout changement :
   * npx tsc --watch

*/
const btn = document.querySelector("#compte");
let i = 0;
btn.addEventListener("click", () => {
    i++;
    // btn.textContent = i;
    btn.textContent = i.toString();
});


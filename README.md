# akkurate-modal-ts

Akkurate Modal est un plugin pour créer une modal facilement avec VueJs.

## Installation du plugin

-   Ajouter dans le package.json

```json
"dependencies": {
    // ...
    "akkurate-modal-ts": "git+ssh://git@bitbucket.org/subvitaminetm/akkurate-modal-ts.git",
    //...
  },
```

-   Dans le app.js ajouter

```javascript
import ModalPlugin from 'akkurate-modal-ts';
Vue.use(ModalPlugin);
```

## Utilisation

```javascript
this.$modal.show(ModalComponent);
```

```javascript
this.modal = await this.$modal.create(ModalComponent);

this.modal.open();

if (this.isShow()) {
    this.modal.hide();
}
```

##### ModalComponent

```vue
<template>
    <div class="akk-modal-container">
        <div class="akk-modal-header">
            <h3>{{ title }}</h3>
        </div>

        <div class="akk-modal-body">
            {{ body }}
        </div>

        <div class="akk-modal-footer">
            <button class="akk-modal-default-button" @click="$emit('close')">
                OK
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        body: String,
    },
};
</script>
<style scoped>
.akk-modal-container {
    width: 75%;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.akk-modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.akk-modal-body {
    margin: 20px 0;
}
</style>
```

## Commandes

-   `serve` : Lance le serveur de dévelopement.
-   `build` : Build les components
-   `build:ssr` : Build les components pour le ssr (server side rendering)
-   `build:es` : Build les components es (Pour le developement)
-   `build:unpkg` : Build les components pour la prod

## Informations

Pour plus d'informations se rendre sur le storybooks akkurate.

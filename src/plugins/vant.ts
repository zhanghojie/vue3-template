import { Button, Field, NavBar } from 'vant';
import { App } from 'vue';

export default {
  install(app: App<Element>) {
    // app.component(Button.name, Button);
    // app.component(Field.name, Field);
    app.use(Button).use(Field).use(NavBar);
  },
};

/* export default function (app: App<Element>) {
	app.use(Button).use(Field);
} */

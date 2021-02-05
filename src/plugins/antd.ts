/**
 * ant design 组件全局注册
 *
 * @dependency ant-design-vue
 */
import 'ant-design-vue/dist/antd.css';
import {
  Button,
  Col,
  Input,
  Layout,
  message,
  Modal,
  Form,
  notification,
  Row
} from 'ant-design-vue';
import Vue from 'vue';


Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$form = Form;
// Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.use(Col);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Layout);
Vue.use(Row);
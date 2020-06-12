import Test from './components/test.mjs';

export default {
  components: {
      Test
  },
  template: /* template */`
      <div>
          <div>{{ message }}</div>
          <br>
          <Test a="Hello from props"></Test>
      </div>
  `,
  data: () => ({
      message: 'hello word'
  }),
}
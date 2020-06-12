export default {
  template: /* template */`
  <div>
    <div>{{ message }} / {{ a }}</div>
    <div>This is a vue app, with vue components and no bundler</div>
  </div>
  `,
  props:['a'],
  data: () => ({
    message: 'hello from test component'
  }),
}
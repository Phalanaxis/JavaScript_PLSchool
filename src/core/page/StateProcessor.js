export class StateProcessor {
  constructor(client, holdup = 300) {
    this.client = client;
    this.listen = debounce(this.listen.bind(this), holdup);
  }

  listen(state) {
    this.client.save(state);
  }

  get() {
    return this.client.get();
  }
}

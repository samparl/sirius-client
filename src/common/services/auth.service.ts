export class Store<T> {
  private listeners: ((state?: AuthState)=>void)[] = [];
  private _state: any; // Need to figure out how to properly type this or generically generate state from type T

  constructor() {
    this._state = new AuthState();
  }
  private get properties() {
    return Object.keys(this._state).reduce((acc, prop) => 
      this._state.hasOwnProperty(prop) ? [prop, ...acc] : acc, []
    )
  }

  public listen(callback: (state?: AuthState) => void) {
    const index = this.listeners.push(callback);
    return () => { delete this.listeners[index]; }; // Return disposal method
  }

  public getState() {
    return { ...this._state };
  }

  public setState(changes: T) {
    const state = Object.assign({}, this._state, changes);
    this._state = state;
    this.listeners.forEach(listener => listener(state));
  }
}

export class AuthState {
  user: any;

  constructor() {
    this.user = null;
  }
}

export const AuthStore = new Store<AuthState>();

export const AuthService = {
  login(): void {
    setTimeout(() => { AuthStore.setState({ ...AuthStore.getState(), user: {} }); }, 200);
  },

  logout(): void {
    setTimeout(() => { AuthStore.setState({ ...AuthStore.getState(), user: null }); }, 200);
  }
}
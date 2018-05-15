export class Store<T> {
  private listeners: (()=>void)[] = [];
  private _state: any; // Need to figure out how to properly type this or generically generate state from type T

  constructor() {
    this._state = new AuthState();
  }
  private get properties() {
    return Object.keys(this._state).reduce((acc, prop) => 
      this._state.hasOwnProperty(prop) ? [prop, ...acc] : acc, []
    )
  }

  public listen(callback: () => void) {
    const index = this.listeners.push(callback);
    return () => { delete this.listeners[index]; }; // Return disposal method
  }

  public get state() {
    return { ...this._state };
  }

  public setState(changes: T) {
    this._state = { ...this._state, changes };
    this.listeners.forEach(listener => listener());
  }
}

export class AuthState {
  user: any;

  constructor() {
    this.user = null;
  }
}

const AuthStore = new Store<AuthState>()

export const AuthService = {
  getState(): AuthState {
    return AuthStore.state;
  },

  login(): void {
    setTimeout(() => { AuthStore.setState({ ...AuthStore.state, user: {} }); }, 200);
  },

  logout(): void {
    setTimeout(() => { AuthStore.setState({ ...AuthStore.state, user: null }); }, 200);
  }
}